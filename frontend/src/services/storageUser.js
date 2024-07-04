import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getUser(key) {
    try {
        const user = await AsyncStorage.getItem(key);
   
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function setUser(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
        console.log("Usuário salvo com sucesso.");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}