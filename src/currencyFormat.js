export default function Currency(num){
    return Number(num.toFixed(1)).toLocaleString() + " " + "RS";
}