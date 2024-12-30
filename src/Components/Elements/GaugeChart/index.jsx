import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
} from "@mui/x-charts/Gauge";

import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

function GaugePointer() {
    const { theme } = useContext(ThemeContext);
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        // No value to display
        return null;
    }

    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={5} fill={theme.color} />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke={theme.color}
                strokeWidth={3}
            />
        </g>
    );
}

export default function CompositionExample() {

    const { theme } = useContext(ThemeContext);

    return (
        <GaugeContainer
            className="w-full"
            height={100}
            startAngle={-90}
            endAngle={90}
            value={75}
            sx={() => ({
                [`& .value-arc`]: {
                    fill: theme.color,
                },
            })}
        >
            <GaugeReferenceArc />
            <GaugeValueArc className="value-arc" />
            <GaugePointer />
        </GaugeContainer>
    );
}
