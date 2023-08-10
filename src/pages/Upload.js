import * as ImagePicker from 'react-native-image-picker';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native'

export default function App(){

  function imgPickerCallback(data){
    console.log(data)
  }
  return(
    <View style={styles.container}>
      <Image 
        style={styles.img}
        source={{
          uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AKQDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAEEBQMCBgf/xAA6EAACAgEBBAYHBgUFAAAAAAAAAQIDEQQSITFhBSJBUVJxEzJygZGh0SNDkrHB4TRCYmPwBjNTorL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/WwAAAGQBDcYpuTSS4tvC+LKt2thHMasTl2yfqry7yhZZZa8zk5PszwXkuAGhZraI5UczfLdH4v6FaWuvfqqMPJZfz+hVAHWV+olnNs9/FJtL4I55feyCQG/mSp2R9WUl5Nr8iCAO8dVqY/eN8pJM7w17+8rT5wePk/qUQBsV30W42ZrPhe5/BnUwu4s1ay6vCk9uPdLivJgagOdV1VyzCW9cU/WXmjoAAAAAAADzOca4ynJ4jHe2AnOFcXKbSiuLZmX6md2YrMa/D2v2jxddO6WXuis7Mc7kvqcgJBAAkEAASQAJBAAkgACQQAPUZSi1KMmpLg0aOn1cbcQnhWdndLy5mYAN0FTS6nbxXY+uvVfiXc+ZbAAAAZWpvd08Rf2cX1eb8X0LOtu2IqqL6011uUP3M4AAAJBAAHmyyqqO3ZJRjwWeLfdFEW2wprnZPhHgu2UnwijEttsum52PL4JdkV3IC7Z0k+FNaS8Vm9/hW75leWt1kvvcezGC/QrADutXrF99P34f5o6R6Q1cfWcJr+qKXzjgqADXp11FrUZL0cnuW08xb5SLZ86aGh1TzGix5T3VyfFPwv9ANMgACSAAJWU8p4aeU1xRq6a/wBNDf8A7kd0ufNGSdKrJVWRmux713rtQGyCIyUoxlF5UkmnyYAxrLHZOc3xk8+S7EeSAAAAEggAZnSVrdldSe6EVN+1L9sfEoFjW/xV+e+Hw2EVwAAAAAASm1hrc08p9zIAG/TZ6WqqzxRTfnwZ0Kug/hq/asx5bTLIEkAACSABap1cqoKGztJNtck+wFUASCAAAAEggAZPSEcajPjrg/hmP6FMu9I2QndGEeNUXCT3YbbzheRSAAAAAAAAA3NJHZ02nXfBS/F1jucdPZC2muUVhJKDXc47sHUCSAABJAAAAAAAAAAkEADD1Ka1GpX92b+LycTU1ejlbJ21Y22ltRf8zXauZlgAAAAAAA7Uae3UScYYSjhylLgs8u8DQ6NTVE32O2WPJJIuHiquNNcK48Iri+LbeW2ewJIAAEkAAAAJBAAAACQAAMLU1+jvujjdtOUfZlvRuFTW6Z3R9JBfaQT3eKPHHn3AZAAAAAAa3R0HGhyf3k3JeS6qM/T0S1Figt0Vh2S8Mfq+z9jbjGMYxjFYjFKMUuxLckB6AIAkgkgASQSBAAAAAAAAAAAAByjFSlJ4jFOUnyW9gYWoSWo1CS3K2eEuzezkepyc5zm+M5Sk/e8nkAAANXo1L0NjXF2vPuii6Z/RtixbU3vyrFz7H+hoAAAAAAAAAATh8wBY1dXo7dperZvXJ9qKxs3VK6uUHx4xfdJcGZEoyjKUZLEovDQHkAASCJSjFOUpRjFdsmkviynb0hp4ZVadsu/fGHxe/wCQFxvGW2kksttpJLvbZma3WRsTpqea89efja7FyK12pvv9eXVTyoR3RXuOIAAAAAB6rsnXOM4PEovK+jNrT6mrURWy8TS60HxXlyMMlNppptNPc08NeQH0RBl09IWxwrUprvW6f0L1Wq01uNmxJ+GfVl8wO5BJAAAt6Ojbl6WS6kH1c/zT/b/OAFvT0quqKkk5vrTzvw32e4HcACrq9P6VbcF9pHs8S7vMtAD562+mlfaTSfZFb5vyRQt6RseVTFQXiliU/ojX6V6JWo2tTpopX8bILCVuO1f1fmfNNNNpppptNPc01xTTAmc7LJOU5ylLvk238zyAAAAAAAAAAAAAAAd6tVqacKM8x8M+svnvL9PSFM8K1ejl38YfHiZJa0Wg1Gvs2aurVF4tuazGHJd8uX+MN3T1PUSSi1scZTTykuXN9hrxjGMYxisRisJcjlptNRpKYUUx2YR798pSfGUn3s7AAAAAAAz+kOi9PrU5r7PUJbrIrdLlNdpoAD4fU6TVaSexfW459WS3wn7Mjgfe2V1WwlXbCM4S4xmk0/czE1X+n65Zno7Nh8fRWtyh5Rl6y+YHzoLGo0Wt0rfp6LIxX86W1X+KO4r5T4fIAAAAAAAExTnJQhGU5t7owTlJ+6O8CBlLHPcub7kaem6E6Rv2XYo6evtdvWsa5Qi/zaN7R9FaHR4lGDsuX3tuJTXsrgvcgMXQ9CajUbNmq2qaOKhwusXPuXz8j6WqqqiuFVUIwrgsRjFYSR7AAAAAAAAAAAAAAAKl3RvRt7bs01W0+MoLYl+KGGABnanoPQVwlOuWojhbltxkv+0W/mYE4RjKSWcJ43gAecIv6DQUauWLJ2xx/wAbiv8A1FgAbdfQfRVe+Vc7X/esk1+FYj8i/VTRTHZpqrrj3VxjFfIADoAAAAAAAAAAP//Z"
        }}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => ImagePicker.showImagePicker({}, imgPickerCallback)}
        >
        <Text style={styles.buttonText}>Choice image</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  button:{
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#FF6745",
    alignItems:"center",
    justifyContent: 'center'
  },
  buttonText:{
    fontWeight: 500,
    color: '#fff'
  },
  img:{
    width: 100,
    height:100,
    borderRadius: 50,
    marginBottom: 20
  }
})