import Select from "react-select";

const options = [
    { value: "Spring", label: "Spring", color: "#498205" },
    { value: "Summer", label: "Summer", color: "#c19c00" },
    { value: "Autumn", label: "Autumn", color: "#da3b01" },
    { value: "Winter", label: "Winter", color: "#004e8c" },
];

const styles = {
    option: (provided, state) => ({
        ...provided,
        fontWeight: state.isSelected ? "bold" : "normal",
        color: "white",
        backgroundColor: state.data.color,
        fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
        fontSize: state.selectProps.myFontSize,
    }),
    control: (base) => ({
        ...base,
        width: "50%",
        height: 70,
        minHeight: 70,
    }),
};
const App = () => <Select myFontSize="20px" options={options} styles={styles} />;

export default App;
