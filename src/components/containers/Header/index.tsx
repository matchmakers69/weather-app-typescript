import { FC } from "react";
import { constants } from "../../../constants";
import { TopHeader, NavigationList, NavigationListItem, NavigationListLink } from "./Header.styled";

const { ROOT, FORECAST_EXTENDED } = constants.routes;

const Header: FC = () => {
    return (
        <TopHeader>
            <NavigationList>
                <NavigationListItem>
                    <NavigationListLink exact to={ROOT}>Weather</NavigationListLink>
                </NavigationListItem>

                <NavigationListItem>
                    <NavigationListLink exact to={FORECAST_EXTENDED}>16 Day Forecast</NavigationListLink>
                </NavigationListItem>
            </NavigationList>
        </TopHeader>
    )
}

export default Header
