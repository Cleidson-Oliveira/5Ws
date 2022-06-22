import Link from "next/link"
import { Wrapper } from "./style"

interface HeaderProps {
    page: string,
}

export default function Header ({ page }: HeaderProps) {
    return (
        <Wrapper>
            <svg width="63" height="24" viewBox="0 0 63 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59375 8.40625C9.98958 8.40625 11.2292 8.67188 12.3125 9.20312C13.4062 9.73438 14.2656 10.5156 14.8906 11.5469C15.5156 12.5781 15.8281 13.849 15.8281 15.3594C15.8281 17.0052 15.4844 18.4271 14.7969 19.625C14.1198 20.8125 13.1042 21.724 11.75 22.3594C10.4062 22.9948 8.72917 23.3125 6.71875 23.3125C5.52083 23.3125 4.39062 23.2083 3.32812 23C2.27604 22.8021 1.35417 22.4948 0.5625 22.0781V17.9062C1.35417 18.3229 2.30208 18.6771 3.40625 18.9688C4.52083 19.25 5.56771 19.3906 6.54688 19.3906C7.50521 19.3906 8.3125 19.2656 8.96875 19.0156C9.625 18.7552 10.1198 18.3594 10.4531 17.8281C10.7969 17.2865 10.9688 16.599 10.9688 15.7656C10.9688 14.651 10.5938 13.7969 9.84375 13.2031C9.09375 12.6094 7.94271 12.3125 6.39062 12.3125C5.79688 12.3125 5.17708 12.3698 4.53125 12.4844C3.89583 12.599 3.36458 12.7135 2.9375 12.8281L1.01562 11.7969L1.875 0.15625H14.2656V4.25H6.10938L5.6875 8.73438C6.04167 8.66146 6.42708 8.58854 6.84375 8.51562C7.26042 8.44271 7.84375 8.40625 8.59375 8.40625ZM48.25 0.15625L42.4375 23H36.9219L33.8281 11C33.7656 10.7708 33.6823 10.4219 33.5781 9.95312C33.474 9.48438 33.3646 8.97396 33.25 8.42188C33.1354 7.85938 33.0312 7.33333 32.9375 6.84375C32.8542 6.34375 32.7969 5.94792 32.7656 5.65625C32.7344 5.94792 32.6719 6.33854 32.5781 6.82812C32.4948 7.31771 32.3958 7.83854 32.2812 8.39062C32.1771 8.94271 32.0729 9.45833 31.9688 9.9375C31.8646 10.4167 31.7812 10.7812 31.7188 11.0312L28.6406 23H23.1406L17.3125 0.15625H22.0781L25 12.625C25.0833 13 25.1771 13.4479 25.2812 13.9688C25.3958 14.4896 25.5052 15.0365 25.6094 15.6094C25.724 16.1719 25.8229 16.7188 25.9062 17.25C26 17.7708 26.0677 18.224 26.1094 18.6094C26.1615 18.2135 26.2292 17.7552 26.3125 17.2344C26.3958 16.7031 26.4844 16.1667 26.5781 15.625C26.6823 15.0729 26.7865 14.5625 26.8906 14.0938C26.9948 13.625 27.0885 13.2448 27.1719 12.9531L30.5 0.15625H35.0781L38.4062 12.9531C38.4792 13.2344 38.5625 13.6146 38.6562 14.0938C38.7604 14.5625 38.8646 15.0729 38.9688 15.625C39.0729 16.1771 39.1667 16.7188 39.25 17.25C39.3438 17.7708 39.4115 18.224 39.4531 18.6094C39.526 18.0885 39.625 17.4583 39.75 16.7188C39.8854 15.9688 40.026 15.224 40.1719 14.4844C40.3281 13.7448 40.4635 13.125 40.5781 12.625L43.4844 0.15625H48.25ZM62.9375 17.8125C62.9375 19 62.6562 20.0052 62.0938 20.8281C61.5417 21.6406 60.7135 22.2604 59.6094 22.6875C58.5052 23.1042 57.1302 23.3125 55.4844 23.3125C54.2656 23.3125 53.2188 23.2344 52.3438 23.0781C51.4792 22.9219 50.6042 22.6615 49.7188 22.2969V18.3594C50.6667 18.7865 51.6823 19.1406 52.7656 19.4219C53.8594 19.6927 54.8177 19.8281 55.6406 19.8281C56.5677 19.8281 57.2292 19.6927 57.625 19.4219C58.0312 19.1406 58.2344 18.776 58.2344 18.3281C58.2344 18.0365 58.151 17.776 57.9844 17.5469C57.8281 17.3073 57.4844 17.0417 56.9531 16.75C56.4219 16.4479 55.5885 16.0573 54.4531 15.5781C53.3594 15.1198 52.4583 14.6562 51.75 14.1875C51.0521 13.7188 50.5312 13.1667 50.1875 12.5312C49.8542 11.8854 49.6875 11.0677 49.6875 10.0781C49.6875 8.46354 50.3125 7.25 51.5625 6.4375C52.8229 5.61458 54.5052 5.20312 56.6094 5.20312C57.6927 5.20312 58.724 5.3125 59.7031 5.53125C60.6927 5.75 61.7083 6.09896 62.75 6.57812L61.3125 10.0156C60.4479 9.64062 59.6302 9.33333 58.8594 9.09375C58.099 8.85417 57.3229 8.73438 56.5312 8.73438C55.8333 8.73438 55.3073 8.82812 54.9531 9.01562C54.599 9.20312 54.4219 9.48958 54.4219 9.875C54.4219 10.1562 54.5104 10.4062 54.6875 10.625C54.875 10.8438 55.2292 11.0885 55.75 11.3594C56.2812 11.6198 57.0573 11.9583 58.0781 12.375C59.0677 12.7812 59.9271 13.2083 60.6562 13.6562C61.3854 14.0938 61.9479 14.6406 62.3438 15.2969C62.7396 15.9427 62.9375 16.7812 62.9375 17.8125Z" fill="#CCE5F3"/>
            </svg>

            <nav>
                <ul>
                    <li className={page == "Home" ? "active" : ""}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={page == "Rooms" ? "active" : ""}>
                        <Link href={"/Rooms"}>Salas</Link>
                    </li>
                    <li className={page == "Contact" ? "active" : ""}>
                        <Link href={"/Contact"}>Contato</Link>
                    </li>
                    <li className="signin">
                        <Link href={"/auth/signin"}>Sign In</Link>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    )
}