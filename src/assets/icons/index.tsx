import React from "react";
import SendIcon from "./svg/send.svg"
import NotificationIcon from "./svg/notification.svg"
import MessageIcon from "./svg/message.svg"
import HomeIcon from "./svg/home.svg"
import StatIcon from "./svg/stat.svg"
import MusicIcon from "./svg/music.svg"
import AddIcon from "./svg/add.svg"
import StoreIcon from "./svg/store.svg"
import WalletIcon from "./svg/wallet.svg"
import SettingIcon from "./svg/setting.svg"
import ClipboardIcon from "./svg/clipboard.svg"
import VerifiedIcon from "./svg/verified.svg"
import LinkIcon from "./svg/link.svg"
import LocationIcon from "./svg/location.svg"
import FlagSouthAfrica from "./svg/flags/south-africa.svg"
import SocialInstagram from "./svg/socials/instagram.svg"
import SocialTwitter from "./svg/socials/twitter.svg"
import SocialFacebook from "./svg/socials/facebook.svg";
import SocialYoutube from "./svg/socials/youtube.svg"
import SocialDeezer from "./svg/socials/deezer.svg"
import ArrowDown from "./svg/arrow-down.svg";
import CalendarIcon from "./svg/calendar.svg";
import InfoIcon from "./svg/info.svg";
import ArrowDownBold from "./svg/arrow-down-bold.svg";
import LineGraphIcon from "./svg/line-graph.svg";
import InformationIcon from "./svg/information.svg";
import DashboardIcon from "./svg/menu.svg";
import GradientLinkIcon from "./svg/gradient-links.svg";
import ArrowDownBlackIcon from "./svg/arrow-down-black.svg"

export type Flags = "south-africa"
export type Socials = "instagram" | "twitter" | "facebook" | "youtube"
    | "deezer"

export type Icons = "send" | "notification" | "message"
    | "home" | "stat" | "music" | "add" | "store" | "wallet"
    | "setting" | "clipboard" | "verified" | "link" | "location"
    | "arrow-down" | "calendar" | 'info' | 'arrow-down-bold'
    | "line-graph" | "information" | "dashboard" | "gradient-link"
    | "arrow-down-black"
    | Flags | Socials;

export interface IconProps {
    name: Icons;
    size?: 16 | 24 | 32 | 64;
    width: number;
    height: number;
    color?: string;
    fill?: string;
    stroke?: string;
    onPress: () => void;
}

export const Icon: React.FC<Pick<IconProps, "name" | "width" | "fill">> = ({ name, width, fill }) => {
    switch (name) {
        case "send":
            return <SendIcon fill={fill} />;
        case "notification":
            return <NotificationIcon fill={fill} />;
        case "message":
            return <MessageIcon fill={fill} />;
        case "add":
            return <AddIcon fill={fill} />
        case "home":
            return <HomeIcon fill={fill} />
        case "music":
            return <MusicIcon fill={fill} />
        case "setting":
            return <SettingIcon fill={fill} />
        case "stat":
            return <StatIcon fill={fill} />
        case "store":
            return <StoreIcon fill={fill} />
        case "wallet":
            return <WalletIcon fill={fill} />
        case "verified":
            return <VerifiedIcon fill={fill} />
        case "clipboard":
            return <ClipboardIcon fill={fill} />
        case "link":
            return <LinkIcon fill={fill} />
        case "south-africa":
            return <FlagSouthAfrica fill={fill} />
        case "instagram":
            return <SocialInstagram fill={fill} />
        case "twitter":
            return <SocialTwitter fill={fill} />
        case "facebook":
            return <SocialFacebook fill={fill} />
        case "youtube":
            return <SocialYoutube fill={fill} />
        case "deezer":
            return <SocialDeezer fill={fill} />
        case "location":
            return <LocationIcon />
        case "arrow-down":
            return <ArrowDown fill={fill} />
        case "calendar":
            return <CalendarIcon fill={fill} />
        case "info":
            return <InfoIcon fill={fill} />
        case "arrow-down-bold":
            return <ArrowDownBold fill={fill} />
        case "line-graph":
            return <LineGraphIcon fill={fill} />
        case "information":
            return <InformationIcon fill={fill} />
        case "dashboard":
            return <DashboardIcon fill={fill} />
        case "gradient-link":
            return <GradientLinkIcon fill={fill} />
        case "arrow-down-black":
            return <ArrowDownBlackIcon fill={fill} />
        default:
            return "";
    }
}