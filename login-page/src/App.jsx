import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CoursesPage from './pages/CoursesPage';
import AfterSelectedCourse from './pages/AfterSelectedCoursePage';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUpPage />
    },
    {
        path: "/courses",
        element: <CoursesPage/>
    },
    {
        path: "/AfterSelectedCourse",
        element: <AfterSelectedCourse/>
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App