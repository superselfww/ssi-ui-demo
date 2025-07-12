
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome'
import LoginRegister from './pages/Auth/LoginRegister'
import ForgotPassword from './pages/Auth/ForgotPassword'
import VerifyOTP from './pages/Auth/VerifyOTP'
import SaveNewPassword from './pages/Auth/SaveNewPassword'
import Consent from './pages/NewMember/Consent'
import ConsentForm from './pages/NewMember/ConsentForm'
import SelectPackages from './pages/NewMember/SelectPackages'
import EmotionalDevelopmentReport from './pages/Account/Student/Reports/EmotionalDevelopmentReport'
import SkillAcquisition from './pages/Account/Student/Reports/SkillAcquisition'
import MyProgress from './pages/Account/Student/Reports/MyProgress'
import FaceRecognition from './pages/Account/Student/EmotionalRecognition/FaceRecognition'
import ViewFaceScanReport from './pages/Account/Student/EmotionalRecognition/ViewFaceScanReport'
import MeditationIndex from './pages/Meditation/Index'
import ZenMeditation from './pages/Meditation/ZenMeditation'
import AsrmMeditation from './pages/Meditation/AsrmMeditation'
import VisualizationMeditation from './pages/Meditation/VisualizationMeditation'
import MovementMeditation from './pages/Meditation/MovementMeditation'
import MindfulnessMeditation from './pages/Meditation/MindfulnessMeditation'
import ExerciseIndex from './pages/Account/Student/Exercise/Index'
import ViewExerciseCategories from './pages/Account/Student/Exercise/ViewExerciseCategories'
import ViewExerciseVideo from './pages/Account/Student/Exercise/ViewExerciseVideo'
import Congratulations from './pages/Account/Student/Exercise/Congratulations'
import KnowMySuperPower from './pages/Account/Student/Assessment/KnowMySuperPower/Index'
import StrenghtAssessment from './pages/Account/Student/Assessment/Strenght/Index'
import MentalHealthAssessment from './pages/Account/Student/Assessment/MentalHealth/Index'
import Analytics from './pages/Account/Student/Analytics'
import Chat from './pages/Chat/Index'
import AiChat from './pages/Chat/AiChat'
import PeerMentorship from './pages/PeerMentorship/Index'
import TopicView from './pages/PeerMentorship/TopicView'
import ResourceLibrary from './pages/ResourceLibrary/Index'
import SelSessions from './pages/classes/SelSessions'
import Classes from './pages/classes/Index'
import ClassView from './pages/classes/ClassView'
import AssignmentIndex from './pages/classes/Assignment/Index'
import AssignmentView from './pages/classes/Assignment/View'
import SubmitAssignment from './pages/classes/Assignment/SubmitAssignment'
import QuizzesIndex from './pages/classes/quizzes'
import ViewQuizzes from './pages/classes/quizzes/ViewQuizzes'
import Quizess from './pages/classes/quizzes/Quizess'
import ProfileSetup from './pages/Account/Student/ProfileSetup/Index'
import SendOTP from './pages/Account/Student/ProfileSetup/SendOTP'
import ProfileSettings from './pages/Account/ProfileSettings'
import AvatarMaker from './pages/Account/AvatarMaker'
import AddChild from './pages/Account/Parent/AddChild'
import ViewChild from './pages/Account/Parent/ViewChild'
import ChildReports from './pages/Account/Parent/Reports'
import ProgressReports from './pages/Account/Parent/ProgressReports'
import EmotionalDevelopmentReports from './pages/Account/Parent/EmotionalDevelopmentReports'
import SkillAcquisitionReports from './pages/Account/Parent/SkillAcquisitionReports'
import TeacherDashboard from './pages/Account/Teacher/Dashboard'
import ViewClassForTeachers from './pages/Account/Teacher/Classes/ViewClassForTeachers'
import MarkAttendance from './pages/Account/Teacher/Classes/MarkAttendance'
import AcademicEvaluation from './pages/Account/Teacher/Classes/AcademicEvaluation'
import EvaluationHistory from './pages/Account/Teacher/Classes/EvaluationHistory'
import CreateAssignment from './pages/Account/Teacher/Classes/Assignment/CreateAssignment'
import ViewAssignment from './pages/Account/Teacher/Classes/Assignment/ViewAssigment'
import AddStudent from './pages/Account/Teacher/Classes/Students/AddStudent'
import CreateReport from './pages/Account/Teacher/Classes/Students/CreateReport'
import SubmittedAssignmentView from './pages/Account/Teacher/Classes/Assignment/SubmittedAssignmentView'
import CreateQuiz from './pages/Account/Teacher/Classes/Quiz/CreateQuiz'
import CreateCommunity from './pages/Chat/CreateCommunity'
import WorkShopIndex from './pages/WorkShops/WorkShopIndex'
import ViewWorkShop from './pages/WorkShops/ViewWorkShop'
import Instructor from './pages/WorkShops/Instructor'
import ViewMyWorkshop from './pages/WorkShops/ViewMyWorkshop'
import AddResourceLibrary from './pages/WorkShops/AddResourceLibrary'
import GradeIndex from './pages/Account/Sel/Grade/GradeIndex'
import ViewGrade from './pages/Account/Sel/Grade/ViewGrade'
import ViewCalander from './pages/Account/Sel/Grade/ViewCalander'
import SchoolDashboard from './pages/Account/School/Dashboard'
import Teachers from './pages/Account/School/Teachers/Teachers'
import AddSubject from './pages/Account/School/Subjects/AddSubject'
import CreateGrade from './pages/Account/School/Grade/CreateGrade'
import ViewGradeForSchool from './pages/Account/School/Grade/ViewGrade'
import CreateClasses from './pages/Account/School/Classes/CreateClasses'
import CreateCurriculum from './pages/Account/School/Classes/CreateCurriculum'
import AddTeacher from './pages/Account/School/Teachers/AddTeacher'
import ViewSubscription from './pages/Account/School/Subscription/ViewSubscription'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Account/Dashboard'
import NewMemberScreens from './pages/NewMember/NewMemberScreens'
import AssentForm from './pages/NewMember/AssentForm'
import GradesForSchool from './pages/Account/School/Grade/Grades'
import ViewTeacher from './pages/Account/School/Teachers/ViewTeacher'
import EditGrade from './pages/Account/School/Grade/EditGrade'
import EditClass from './pages/classes/EditClass'
import SubmittedAssignmentViewOnClass from './pages/classes/Assignment/ViewAssignmentsOnClass'
import ViewQuizessOnSchool from './pages/classes/quizzes/ViewQuizessOnSchool'
import ViewQuizzesSubmitted from './pages/classes/quizzes/ViewQuizzesSubmitted'
import Subjects from './pages/Account/School/Subjects/Subjects'
import ViewCalendar from './pages/Account/Sel/Grade/ViewCalander'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginRegister />} />
            <Route path="/start" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-password/verify" element={<VerifyOTP />} />
            <Route path="/forgot-password/save-new-password" element={<SaveNewPassword />} />

            <Route path="/dashboard" element={<Dashboard />} />

            {/* New Member Options */}
            <Route path="/account/avatar-maker" element={<AvatarMaker />} />
            <Route path="/setup" element={<NewMemberScreens />} />

            <Route path="/setup/assent-form" element={<AssentForm />} />
            <Route path="/setup/consent" element={<Consent />} />
            <Route path="/setup/consent/agreement" element={<ConsentForm />} />
            <Route path="/setup/package" element={<SelectPackages />} />

            <Route path="/update-profile" element={<ProfileSettings />} />
            <Route path="/dashboard/profile-setup" element={<ProfileSetup />} />
            <Route path="/dashboard/profile-setup/send-otp" element={<SendOTP />} />
            <Route path="/emotional-development-report" element={<EmotionalDevelopmentReport />} />
            <Route path="/skill-acquisition-report" element={<SkillAcquisition />} />
            <Route path="/my-progress" element={<MyProgress />} />

            <Route path="/emotional-recognition" element={<FaceRecognition />} />
            <Route path="/emotional-recognition/view-result" element={<ViewFaceScanReport />} />

            <Route path="/meditation" element={<MeditationIndex />} />
            <Route path="/meditation/zen" element={<ZenMeditation />} />
            <Route path="/meditation/asmr" element={<AsrmMeditation />} />
            <Route path="/meditation/visualization" element={<VisualizationMeditation />} />
            <Route path="/meditation/movement" element={<MovementMeditation />} />
            <Route path="/meditation/mindfulness" element={<MindfulnessMeditation />} />

            <Route path="/exercises" element={<ExerciseIndex />} />
            <Route path="/exercises/:id" element={<ViewExerciseCategories />} />
            <Route path="/exercises/:id/play/:id" element={<ViewExerciseVideo />} />
            <Route path="/exercises/:id/play/:id/success" element={<Congratulations />} />

            <Route path="/assessment/know-my-super-power" element={<KnowMySuperPower />} />
            <Route path="/assessment/know-my-strength" element={<StrenghtAssessment />} />
            <Route path="/assessment/my-mental-health" element={<MentalHealthAssessment />} />

            <Route path="/analytics" element={<Analytics />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/ai-chat" element={<AiChat />} />
            <Route path="/create-chat" element={<CreateCommunity />} />

            <Route path="/peer-mentorship" element={<PeerMentorship />} />
            <Route path="/peer-mentorship/:id" element={<TopicView />} />



            <Route path="/sel-sessions" element={<SelSessions />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/classes/:id" element={<ClassView />} />
            <Route path="/classes/:id/assignments" element={<AssignmentIndex />} />
            <Route path="/classes/:id/assignments/:id" element={<SubmittedAssignmentViewOnClass />} />
            <Route path="/classes/:id/assignments/submit" element={<SubmitAssignment />} />

            <Route path="/classes/:id/quizzes" element={<QuizzesIndex />} />
            <Route path="/classes/:id/quizzes/start" element={<ViewQuizzes />} />
            <Route path="/classes/:id/quizzes/start/:id" element={<Quizess />} />
            <Route path="/classes/:id/quizzes/view/:id" element={<ViewQuizessOnSchool />} />
            <Route path="/classes/:id/quizzes/view/:id/:id" element={<ViewQuizzesSubmitted />} />

            {/* Parent UI */}

            <Route path="/add-child" element={<AddChild />} />
            <Route path='/view-child/:id' element={<ViewChild />} />
            <Route path="/view-child/:id/reports" element={<ChildReports />} />
            <Route path="/view-child/:id/reports/progress" element={<ProgressReports />} />
            <Route path="/view-child/:id/reports/emotional-development" element={<EmotionalDevelopmentReports />} />
            <Route path="/view-child/:id/reports/skill-acquisition" element={<SkillAcquisitionReports />} />
            <Route path="/view-child/:id/evaluation-history" element={<EvaluationHistory />} />

            {/* Teachers UI */}
            <Route path="/home" element={<TeacherDashboard />} />
            <Route path="/home/class/:id" element={<ViewClassForTeachers />} />
            <Route path="/home/class/:id/mark-attendance" element={<MarkAttendance />} />
            <Route path="/home/class/:id/academic-evaluation" element={<AcademicEvaluation />} />
            <Route path="/home/class/:id/evaluation-history" element={<EvaluationHistory />} />
            <Route path="/home/class/:id/create-assignment" element={<CreateAssignment />} />
            <Route path="/home/class/:id/assignment/:id" element={<ViewAssignment />} />
            <Route path="/home/class/:id/assignment/:id/submitted/:id" element={<SubmittedAssignmentView />} />

            <Route path="/home/class/:id/quizzes/create" element={<CreateQuiz />} />

            <Route path="/home/class/:id/add-student" element={<AddStudent />} />
            <Route path="/home/class/:id/student/create-report" element={<CreateReport />} />

            <Route path='workshop' element={<WorkShopIndex />} />
            <Route path='workshop/:id' element={<ViewWorkShop />} />
            <Route path='/instructor/:id' element={<Instructor />} />
            <Route path='/workshop/my/:id' element={<ViewMyWorkshop />} />
            <Route path="/resource-library" element={<ResourceLibrary />} />
            <Route path="/resource-library/add" element={<AddResourceLibrary />} />

            {/* SEL Teacher */}
            <Route path="/grades" element={<GradeIndex />} />
            <Route path="/grades/:id" element={<ViewGrade />} />
            <Route path="/grades/:id/calendar" element={<ViewCalendar />} />
            <Route path="/academic-evaluation" element={<AcademicEvaluation />} />
            <Route path="/evaluation-history" element={<EvaluationHistory />} />

            {/* School */}
            <Route path="/school" element={<SchoolDashboard />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers/add" element={<AddTeacher />} />
            <Route path="/teacher/:id" element={<ViewTeacher />} />
            <Route path="/school/subjects" element={<Subjects />} />
            <Route path="/school/add-subject" element={<AddSubject />} />
            <Route path="/school/grades" element={<GradesForSchool />} />
            <Route path="/school/grades/create" element={<CreateGrade />} />
            <Route path="/school/grades/:id" element={<ViewGradeForSchool />} />
            <Route path="/school/grades/:id/edit" element={<EditGrade />} />
            <Route path="/school/class/create" element={<CreateClasses />} />
            <Route path="/school/class/:id/edit" element={<EditClass />} />
            <Route path="/school/class/create-curriculum" element={<CreateCurriculum />} />
            <Route path="/school/subscriptions" element={<ViewSubscription />} />

        </Routes>
    )
}

export default App
