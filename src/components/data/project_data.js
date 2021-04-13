import todolist from '../../assets/projects_images/todolist.png'
import weatherapp from '../../assets/projects_images/weatherapp.png'
import piggame from '../../assets/projects_images/piggame.png'
import billmanagement from '../../assets/projects_images/billmanagement.png'
import portfolio from '../../assets/projects_images/portfolio.png'

const data_projects = [
    {
        name: 'ToDoList',
        image: todolist,
        deployed_url: 'https://akash-todolist-react.herokuapp.com/',
        github_url: 'https://github.com/chandakash/react-todolist',
        category: ['react.js']
    },

    {
        name: 'Weather App',
        image: weatherapp,
        deployed_url: 'http://weatherappakash.herokuapp.com/',
        github_url: 'https://github.com/chandakash/NodeJs-project',
        category: ['node.js','handlebars','CSS']
    },

    {
        name: 'Pig game',
        image: piggame,
        deployed_url: '#',
        github_url: 'https://github.com/chandakash/Pig_Game',
        category: ['JS','CSS','HTML']
    },
    {
        name: 'Bill Management',
        image: billmanagement,
        deployed_url: '#',
        github_url: 'https://github.com/chandakash/H2H_internship',
        category: ['react.js','python','HTML','CSS','JAVA']
    },

    {
        name: 'portfolio',
        image: portfolio,
        deployed_url: 'https://akashchand1703-portfolio.herokuapp.com/',
        github_url: 'https://github.com/chandakash/portfolio',
        category: ['react.js']
    },

]

export default data_projects;
