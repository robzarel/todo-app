import styled from 'styled-components';
import checkboxCheckedImage from './images/сheckbox-checked.png';
import checkboxUnCheckedImage from './images/сheckbox-unchecked.png';

type IconTypes =
    | 'ICON_CHECKBOX_CHECKED'
    | 'ICON_CHECKBOX_UNCHECKED';

type IconSizeTypes =
    | 'ICON_SIZE_S'
    | 'ICON_SIZE_M'
    | 'ICON_SIZE_L'
    | 'ICON_SIZE_XL';

interface IconProps {
    icon: IconTypes,
    size: IconSizeTypes
}

const ICON_CHECKBOX_CHECKED = 'ICON_CHECKBOX_CHECKED';
const ICON_CHECKBOX_UNCHECKED = 'ICON_CHECKBOX_UNCHECKED';

const ICON_SIZE_S = 'ICON_SIZE_S';
const ICON_SIZE_M = 'ICON_SIZE_M';
const ICON_SIZE_L = 'ICON_SIZE_L';
const ICON_SIZE_XL = 'ICON_SIZE_XL';

const ICON_TYPE_MAP:{ [key: string] : string } = {
    [ICON_CHECKBOX_CHECKED]: checkboxCheckedImage,
    [ICON_CHECKBOX_UNCHECKED]: checkboxUnCheckedImage
}
const ICON_SIZE_MAP:{ [key: string] : string } = {
    [ICON_SIZE_S]: '20',
    [ICON_SIZE_M]: '30',
    [ICON_SIZE_L]: '40',
    [ICON_SIZE_XL]: '50'
}

const selectBgImageByProps = (props: IconProps) => ICON_TYPE_MAP[props.icon];
const selectSizeByProps = (props: IconProps) => ICON_SIZE_MAP[props.size];

const IconBlock = styled.div`
    width: ${selectSizeByProps}px;
    height: ${selectSizeByProps}px;
    background-size: contain;
    background-image: url(${selectBgImageByProps});
`;

function Icon (props: IconProps) {
    return <IconBlock { ...props } />
}

const ICON_TYPE_KEYS:{ [key: string] : IconTypes } = {
    [ICON_CHECKBOX_CHECKED]: ICON_CHECKBOX_CHECKED,
    [ICON_CHECKBOX_UNCHECKED]: ICON_CHECKBOX_UNCHECKED
};

const ICON_SIZE_KEYS:{ [key: string] : IconSizeTypes }  = {
    [ICON_SIZE_S]: ICON_SIZE_S,
    [ICON_SIZE_M]: ICON_SIZE_M,
    [ICON_SIZE_L]: ICON_SIZE_L,
    [ICON_SIZE_XL]: ICON_SIZE_XL
};

export { ICON_TYPE_KEYS, ICON_SIZE_KEYS };

export default Icon;