import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from '../screens/Game';
import Menu from '../screens/Menu';
import Winner from '../screens/Winner';


const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="menu" component={Menu} />
            <Screen name="game" component={Game} />
            <Screen name="winner" component={Winner} />
        </Navigator>
    )

}