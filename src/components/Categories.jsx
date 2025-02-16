import './Categories.css';

function Categories(props) {
    // const cname = {
    //     backgroundColor: "white",
    //     padding: 5,
    //     fontWeight: "bold",
    //     color:"purple"
    // }
    // const box = {
    //     backgroundColor: "white",
    //     height: 50,
    //     padding: 8,
    //     boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
    //     borderRadius: "3px",
    //     cursor: "pointer",
    //     display: "inline-block",
    //     textAlign: "center",
    //     justifyContent: "center",
    //     margin: "0px 20px 0px 20px",
    // }
    return (
        <div className='cbox'>
            <p className='cname'>{props.title}</p>
        </div>

    );
}

export default Categories;