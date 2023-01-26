const myProjects = [
    {
        title: 'Online cosmetics store',
        description: 'The application allows the user view products in the online store, sort\n' +
            'by rating, make a selection by tags. A registered user can add the selected\n' +
            'product to the cart, make an order, make a favorite list. On the backend side, product data is\n' +
            'stored in a database. Mongo DB is used. Backend receives user\'s request, processes it, \n' +
            'contacts the DB, gets all necessary data and sends it to the frontend side.',
        stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
        links: {
            front: 'https://github.com/AlinaSyniavska/makeup-shop-fe',
            back: 'https://github.com/AlinaSyniavska/makeup-shop',
            image: 'src/media/makeup-shop.png',
            website: '',
            video: 'https://www.loom.com/share/aaeeb59abc644f93ad0b8c813038db7a',
        },
    },
    {
        title: 'Space Articles',
        description: 'Single Page Application with React.\n' +
            'Using an open API https://spaceflightnewsapi.net to get article names and descriptions.\n' +
            'Home page contains:\n' +
            '1. Cards with article titles and descriptions for 100 characters.\n' +
            'The user can click on the card to go to an article page that contains the title and full description of the selected article.\n' +
            '\n' +
            '2. A field to filter by keyword.\n' +
            'The user enters keywords into the field and the system displays all articles containing at least one of the keywords\n' +
            'in the name or/and description.\n' +
            '\n' +
            'The priority of fields: (1) names; and (2) description.\n' +
            'The article with one match in the name is higher than the article with one match in the description.\n' +
            '\n' +
            'The matched keywords are highlighted with yellow color.\n',
        stack: ['React', 'TypeScript', 'Material UI', 'Tailwindcss'],
        links: {
            front: 'https://github.com/AlinaSyniavska/codebridge-articles-test',
            back: '',
            image: 'src/media/space-articles.png',
            website: 'https://space-articles.netlify.app',
            video: '',
        },
    },
    {
        title: 'Movies App',
        description: 'Implementation of a page with a list of movies, the possibility of a sweater dark/light style theme, requests are executed on the server.\n' +
            'Pagination is done.\n' +
            'The second (next) page with an extended description of the film (routing). It opens if the user clicks on the card with the movie.\n' +
            'Movies Database - API https://developers.themoviedb.org/3/discover/movie-discover.',
        stack: ['Angular'],
        links: {
            front: 'https://github.com/AlinaSyniavska/ngMoviesApp',
            back: '',
            image: 'src/media/movies-app.png',
            website: '',
            video: 'https://www.loom.com/share/64af6aa4b1d24970b429092d403ccc7a',
        },
    },
    {
        title: 'Job List Page',
        description: 'Implemented 2 adaptive pages:\n' +
            '\n' +
            '⦁ Job list\n' +
            '⦁ Detailed Job\n' +
            '\n' +
            'Implementation in two versions: desktop and mobile.\n' +
            'From the data received from the API, we generate a list of jobs, when you click on the Job title, a detailed job page opens. All data on the pages is obtained from the API.',
        stack: ['React', 'TypeScript', 'Tailwindcss'],
        links: {
            front: 'https://github.com/AlinaSyniavska/job-list-aleannlab',
            back: '',
            image: 'src/media/job-list.png',
            website: '',
            video: '',
        },
    },
    {
        title: 'Note App',
        description: 'The task is to create a notes app in JS as a web app. Users can add, edit and remove notes. \n' +
            'List of notes is displayed in a form of table. The columns are time of creation, note content, note category. ' +
            'Categories are predefined: “Task”, “Random Thought”, “Idea”.\n' +
            'Notes in the table should also display a list of dates mentioned in this note as a separate column. ' +
            'Users can archive notes. Archived notes are not shown in the notes list. Users can view archived notes and unarchive them.\n' +
            'There should also be a summary table which counts notes by categories: separately for active and archived. ' +
            'The table is updated whenever users perform some action on notes. ' +
            'The summary table is shown on the same page as the notes table.\n' +
            'There is no need to implement data storage. ' +
            'Simply create a JS variable which stores the data and prepopulate it with 7 notes so that they are shown when the page is reloaded.\n\n',
        stack: ['React', 'TypeScript', 'Tailwindcss'],
        links: {
            front: 'https://github.com/AlinaSyniavska/simple-note-app',
            back: '',
            image: 'src/media/note-app.png',
            website: 'https://simple-note-application.netlify.app',
            video: '',
        },
    },

]

export {myProjects};


