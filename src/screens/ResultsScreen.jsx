import { View } from "react-native"
import Results from "../components/Results"
import MenuPanel from "../components/MenuPanel";

const ResultsScreen = () => {
    return (
        <View style={styles.container}>
            <Results />
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

export default ResultsScreen;