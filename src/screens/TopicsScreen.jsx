import { View } from "react-native"
import Topics from "../components/Topics"
import MenuPanel from "../components/MenuPanel";

const TopicsScreen = () => {
    return (
        <View style={styles.container}>
            <Topics />
            <View style={styles.menu}>
                <MenuPanel />
            </View>
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    },
    menu: {
        position: 'absolute',
        width: "100%",
        bottom: 0
    }
}

export default TopicsScreen;