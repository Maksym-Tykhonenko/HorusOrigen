import { View } from "react-native"
import Quiz from "../components/Quiz"

const QuizScreen = ({ route }) => {
    const { topic, image, quiz } = route.params;
    return (
        <View style={styles.container}>
            <Quiz
                topic={topic}
                image={image}
                quiz={quiz}
                />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default QuizScreen;