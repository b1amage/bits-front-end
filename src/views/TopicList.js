import Art from '../components/utilities/image/Art-icon';
import Education from '../components/utilities/image/Education-icon';
import Travel from '../components/utilities/image/Travel-icon';
import Business from '../components/utilities/image/Business-icon';
import Food from '../components/utilities/image/Food-icon';
import Sport from '../components/utilities/image/Sport-icon';
import Gaming from '../components/utilities/image/Gaming-icon'
import TV from '../components/utilities/image/TV-icon'
import Tech from '../components/utilities/image/Tech-icon'
import Nature from '../components/utilities/image/Nature-icon'
import Covid from '../components/utilities/image/Covid-icon'
import Film from '../components/utilities/image/Film-icon'
import Style from '../components/utilities/image/Style-icon'
import World from '../components/utilities/image/World-icon'
import Health from '../components/utilities/image/Health-icon'
import Science from '../components/utilities/image/Science-icon'

const TopicList = () => {
    const categories =[
        {
            id: 1,
            icon: <Art></Art>
        },
        {
            id: 2,
            icon: <Education></Education>
        },
        {
            id: 3,
            icon: <Travel></Travel>
        },
        {
            id: 4,
            icon: <Business></Business>
        },
        {
            id: 5,
            icon: <Food></Food>
        },
        {
            id: 6,
            icon: <Sport></Sport>
        },
        {
            id: 7,
            icon: <Gaming></Gaming>
        },
        {
            id: 8,
            icon: <TV></TV>
        },
        {
            id: 9,
            icon: <Tech></Tech>
        },
        {
            id: 10,
            icon: <Nature></Nature>
        },
        {
            id: 11,
            icon: <Covid></Covid>
        },
        {
            id: 12,
            icon: <Film></Film>
        },
        {
            id: 13,
            icon: <Style></Style>
        },
        {
            id: 14,
            icon: <World></World>
        },
        {
            id: 15,
            icon: <Health></Health>
        },
        {
            id: 16,
            icon: <Science></Science>
        }
    ]
    const categoryItems = categories.map((category) =>
        <li key={categories.id}>
            {category}            
        </li>
    );
    return (
        <div>
            {categoryItems}
        </div>
    );
};

export default TopicList