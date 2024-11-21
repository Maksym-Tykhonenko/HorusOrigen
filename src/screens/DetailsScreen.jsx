import { View } from "react-native"
import Details from "../components/Details"
import MenuPanel from "../components/MenuPanel";

const DetailsScreen = ({ route }) => {
    const { image, name, description, attributes, significance, cult, fact } = route.params;

    return (
        <View style={styles.container}>
            <Details
                image={image}
                name={name}
                description={description}
                attributes={attributes}
                significance={significance}
                cult={cult}
                fact={fact}
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

export default DetailsScreen;