import { View } from "react-native"
import Articles from "../components/Articles"

const ArticlesScreen = () => {
    return (
        <View style={styles.container}>
            <Articles />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default ArticlesScreen;