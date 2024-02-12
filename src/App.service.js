import http from "./services/htttp";

export const save = async (dna) => {
    try {
        const { data } = await http.post("/dnas/", dna);

        return data;
    } catch (error) {
        throw error;
    }
};
