export class StringUtils {
    constructor(){
        throw new Error("MathUtils is a utility class and cannot be instantiated")
    }

     static capitalize(str) {
         if (!str) return "";

         return str[0].toUpperCase() + str.slice(1).toLowerCase();

     }

     static reverse(str) {
         return str.split("").reverse().join("")
        }

     static wordCount(str) {
        return str.split(" ").length
     }   

     
}