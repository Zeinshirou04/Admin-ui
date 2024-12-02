const IconWrapper = ({ children }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {children}
    </svg>
);

const OverviewIcon = () => (
    <IconWrapper>
        <path
            d="M21 14H14V21H21V14Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M10 14H3V21H10V14Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M21 3H14V10H21V3Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M10 3H3V10H10V3Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </IconWrapper>
);

const BalanceIcon = () => (
    <IconWrapper>
        <path
            d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 6V18C4 19.1 4.9 20 6 20H20V16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </IconWrapper>
);

const TransactionIcon = () => (
    <IconWrapper>
        <path
            d="M17 11L21 7L17 3"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M21 7H9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M7 21L3 17L7 13"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15 17H3"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </IconWrapper>
);

const FoodIcon = () => {
    <IconWrapper>
        <path d="M12 4.77778L18.75 9.77778V19.7778H5.25V9.77778L12 4.77778ZM12 2L3 8.66667V22H21V8.66667L12 2ZM11.4375 9.22222V12.5556H10.875V9.22222H9.75V12.5556H9.1875V9.22222H8.0625V12.5556C8.0625 13.4778 8.81625 14.2222 9.75 14.2222V18.6667H10.875V14.2222C11.8088 14.2222 12.5625 13.4778 12.5625 12.5556V9.22222H11.4375ZM13.125 11.4444V14.7778H14.25V18.6667H15.375V9.22222C14.1375 9.22222 13.125 10.2222 13.125 11.4444Z" fill="#878787" />
    </IconWrapper>
}

const HousingIcon = () => {
    <IconWrapper>
        <path d="M10.3333 5V6.78421L12 7.83421V6.57895H20.3333V18.4211H16.1667V20H22V5H10.3333ZM8.25 7.36842L2 11.3158V20H14.5V11.3158L8.25 7.36842ZM13.6667 8.15789V8.89211L15.0083 9.73684H15.3333V8.15789H13.6667ZM17 8.15789V9.73684H18.6667V8.15789H17ZM8.25 9.34211L12.8333 12.1053V18.4211H10.3333V13.6842H6.16667V18.4211H3.66667V12.1053L8.25 9.34211ZM17 11.3158V12.8947H18.6667V11.3158H17ZM17 14.4737V16.0526H18.6667V14.4737H17Z" fill="#878787" />
    </IconWrapper>
}

const EntertainmentIcon = () => {
    <IconWrapper>
        <path d="M14.75 7.45999L12 3.92999L13.97 3.53999L16.71 7.06999L14.75 7.45999ZM21.62 6.09999L20.84 2.17999L16.91 2.95999L19.65 6.49999L21.62 6.09999ZM11.81 8.04999L9.07001 4.49999L7.10001 4.90999L9.85001 8.43999L11.81 8.04999ZM4.16001 5.49999L3.18001 5.68999C2.92241 5.74079 2.67737 5.84194 2.45894 5.98764C2.24051 6.13334 2.05299 6.32072 1.90713 6.53904C1.76127 6.75737 1.65994 7.00234 1.60896 7.2599C1.55797 7.51747 1.55833 7.78257 1.61001 8.03999L2.00001 9.99999L6.90001 9.02999L4.16001 5.49999ZM4.00001 20V12H20V13.09C20.72 13.21 21.39 13.46 22 13.81V9.99999H2.00001V20C2.00001 20.5304 2.21073 21.0391 2.5858 21.4142C2.96087 21.7893 3.46958 22 4.00001 22H13.81C13.46 21.39 13.22 20.72 13.09 20H4.00001ZM21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z" fill="#878787" />
    </IconWrapper>
}

const OthersIcon = () => {
    <IconWrapper>
        <path d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3ZM5 11H9V5H5V11ZM15 19H19V13H15V19ZM15 7H19V5H15V7ZM5 19H9V17H5V19Z" fill="#878787" />
    </IconWrapper>
}

const ShoppingIcon = () => {
    <IconWrapper>
        <path d="M6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V8C4 7.45 4.196 6.979 4.588 6.587C4.98 6.195 5.45067 5.99933 6 6H8C8 4.9 8.39167 3.95833 9.175 3.175C9.95834 2.39167 10.9 2 12 2C13.1 2 14.0417 2.39167 14.825 3.175C15.6083 3.95833 16 4.9 16 6H18C18.55 6 19.021 6.196 19.413 6.588C19.805 6.98 20.0007 7.45067 20 8V20C20 20.55 19.804 21.021 19.412 21.413C19.02 21.805 18.5493 22.0007 18 22H6ZM6 20H18V8H16V10C16 10.2833 15.904 10.521 15.712 10.713C15.52 10.905 15.2827 11.0007 15 11C14.7167 11 14.479 10.904 14.287 10.712C14.095 10.52 13.9993 10.2827 14 10V8H10V10C10 10.2833 9.904 10.521 9.712 10.713C9.52 10.905 9.28267 11.0007 9 11C8.71667 11 8.479 10.904 8.287 10.712C8.095 10.52 7.99934 10.2827 8 10V8H6V20ZM10 6H14C14 5.45 13.804 4.979 13.412 4.587C13.02 4.195 12.5493 3.99933 12 4C11.45 4 10.979 4.196 10.587 4.588C10.195 4.98 9.99934 5.45067 10 6Z" fill="#878787" />
    </IconWrapper>
}

const TransportIcon = () => {
    <IconWrapper>
        <path d="M10 22V15.65L11.625 11H20.375L22 15.65V22H20V20.5H12V22H10ZM12 14.5H20L19.3 12.5H12.7L12 14.5ZM13 18.5C13.2833 18.5 13.521 18.404 13.713 18.212C13.9043 18.0207 14 17.7833 14 17.5C14 17.2167 13.9043 16.9793 13.713 16.788C13.521 16.596 13.2833 16.5 13 16.5C12.7167 16.5 12.4793 16.596 12.288 16.788C12.096 16.9793 12 17.2167 12 17.5C12 17.7833 12.096 18.0207 12.288 18.212C12.4793 18.404 12.7167 18.5 13 18.5ZM19 18.5C19.2833 18.5 19.5207 18.404 19.712 18.212C19.904 18.0207 20 17.7833 20 17.5C20 17.2167 19.904 16.9793 19.712 16.788C19.5207 16.596 19.2833 16.5 19 16.5C18.7167 16.5 18.4793 16.596 18.288 16.788C18.096 16.9793 18 17.2167 18 17.5C18 17.7833 18.096 18.0207 18.288 18.212C18.4793 18.404 18.7167 18.5 19 18.5ZM6 14V12H8V14H6ZM11 8V6H13V8H11ZM6 18V16H8V18H6ZM6 22V20H8V22H6ZM2 22V8H7V2H17V9H15V4H9V10H4V22H2ZM11.5 19H20.5V16H11.5V19Z" fill="#878787" />
    </IconWrapper>
}

const ArrowUpIcon = () => {
    <IconWrapper>
        <path d="M8 12.6667V3.33334" stroke="#E73D1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.33334 8.00001L8.00001 3.33334L12.6667 8.00001" stroke="#E73D1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
}

const ArrowDownIcon = () => {
    <IconWrapper>
        <path d="M8 2.33325V11.6666" stroke="#4DAF6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.6666 7L7.99992 11.6667L3.33325 7" stroke="#4DAF6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
}

const ArrowRightIcon = () => {
    <IconWrapper>
        <path d="M3 12L22 12" stroke="#299D91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 5L22 12L15 19" stroke="#299D91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </IconWrapper>
}

export const Icon = {
    Overview: OverviewIcon,
    Balance: BalanceIcon,
    Transaction: TransactionIcon,
    Food: FoodIcon,
    Housing: HousingIcon,
    Entertainment: EntertainmentIcon,
    Others: OthersIcon,
    Shopping: ShoppingIcon,
    Transportation: TransportIcon,
    ArrowUp: ArrowUpIcon,
    ArrowDown: ArrowDownIcon,
    ArrowRight: ArrowRightIcon
};
