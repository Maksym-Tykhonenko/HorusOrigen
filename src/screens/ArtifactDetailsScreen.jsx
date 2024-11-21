import { View } from "react-native"
import ArtifactDetails from "../components/ArtifactDetails"
import MenuPanel from "../components/MenuPanel";

const ArtifactDetailsScreen = ({ route }) => {
    const { name, article, image } = route.params;
    return (
        <View style={styles.container}>
            <ArtifactDetails
                name={name}
                article={article}
                image={image}
                />
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

export default ArtifactDetailsScreen;