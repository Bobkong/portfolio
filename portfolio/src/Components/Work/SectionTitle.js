import './SectionTitle.css';


function SectionTitle(props) {
    return (
            <div id="section-title-div">
                <span>{props.title}</span>
            </div>
    );
}

export default SectionTitle;