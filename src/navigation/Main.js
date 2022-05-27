import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import HeaderBackGround from '@components/HeaderBackGround';
import WalkThrough from '@screens/WalkThrough';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';
import ForgotPassword from '@screens/ForgotPassword';
import ResetPassword from '@screens/ResetPassword';
import ResetPasswordSuccess from '@screens/ResetPasswordSuccess';
import VerifyEmail from '@screens/VerifyEmail';
import VerifyMobile from '@screens/VerifyMobie';
import CreateAccount from '@screens/CreateAccount';
import FullName from '@screens/FullName';
import Gender from '@screens/Gender';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/ButtonHeader';
import BirthDay from '@screens/BirthDay';
import Blood from '@screens/Blood';
import MainBottomTab from '@navigation/MainBottomTab';
import SvgNotification from '@svgs/SvgNotification';
import PricePlan from '@screens/PricePlan';
import Notification from '@screens/Notification';
import Weight from '@screens/Weight';
import AppointmentList from '@screens/AppointmentList';
import SvgCalendar from '@svgs/SvgCalendar';
import AppointmentCalendar from '@screens/AppointmentCalendar';
import CreateAppointment from '@screens/CreateAppointment';
import AppointmentDetails from '@screens/AppointmentDetails';
import FindDoctors from '@screens/FindDoctors';
import FindHospital from '@screens/FindHospital';
import ResultFindDoctor from '@screens/ResultFindDoctor';
import SvgMap from '@svgs/SvgMap';
import IndicatorsSettingsTab from '@navigation/IndicatorsSettingsTab';
import SvgSetting from '@svgs/SvgSetting';
import InputTestIndicators from '@screens/InputTestIndicators';
import GoalSettings from '@screens/GoalSettings';
import ROUTES from '@ultis/routes';
import DoctorProfile from '@screens/DoctorProfile';
import DoctorInformation from '@screens/DoctorInformation';
import SvgMyHeart from '@svgs/DoctorInformation/SvgMyHeart';
import DoctorAddress from '@screens/DoctorAddress';
import DoctorReview from '@screens/DoctorReview';
import DoctorMessage from '@screens/DoctorMessage';
import SvgSearch from '@svgs/SvgSearch';
import Insurance from '@screens/Insurance';
import BookAppointment from '@screens/BookAppointment';
import ListDrugs from '@screens/ListDrugs';
import AddDrugs from '@screens/AddDrugs';
import DrugDetails from '@screens/DrugDetails';
import DrugShop from '@screens/DrugShop';
import DrugShopDetails from '@screens/DrugShopDetails';
import NewsTab from '@navigation/NewsTab';
import SvgBookMark from '@svgs/SvgBookMark';
import NewsBookmark from '@screens/NewsBookmark';
import NewsComment from '@screens/NewsComment';
import NewsDetails from '@screens/NewDetails';
import Cart from '@screens/Cart';
import Billing from '@screens/Billing';
import VideoCall from '@screens/VideoCall';
import CallDoctor from '@screens/CallDoctor';
import MapsDoctors from '@screens/MapsDoctors';
import Height from '@screens/Height';
import SvgAdd from '@svgs/SvgAdd';
import Menu from '@screens/Menu';
import Services from '@screens/Services';
import DashBoard from '@screens/DashBoard';
import SetGoal from '@screens/SetGoal';
import MyOrder from '@screens/MyOrder/MyOrder';
import TransactionHistory from '@screens/Transaction/TransactionHistory';
import PrivacyPolicy from '@screens/Introducation/PrivacyPolicy';
import TermsConditions from '@screens/Introducation/TermsConditions';
import ContactUs from '@screens/Introducation/ContactUs';
import Report from '@screens/Report/Report';
import PriceUtTest from '@screens/UtTest/PriceUtTest';
import colors from '@ultis/colors';
import Otp from '@screens/OtpScreen/Otp';

const Main = memo(() => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode={'screen'}
        initialRouteName={ROUTES.WalkThrough}>
        <Stack.Screen
          name={ROUTES.WalkThrough}
          component={WalkThrough}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SignIn}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.SignUp}
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Otp}
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ForgotPassword}
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ResetPassword}
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.ResetPasswordSuccess}
          component={ResetPasswordSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.VerifyEmail}
          component={VerifyEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.VerifyMobile}
          component={VerifyMobile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CreatAccount}
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Notification}
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.DoctorMessage}
          component={DoctorMessage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.NewsDetails}
          component={NewsDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.VideoCall}
          component={VideoCall}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CallDoctor}
          component={CallDoctor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Menu}
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.MyOrder}
          component={MyOrder}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'My Order'} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader
            //     children={<SvgCalendar />}
            //     onPress={() => {
            //       navigation.navigate(ROUTES.Menu);
            //     }}
            //   />
            // ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.TransactionHistory}
          component={TransactionHistory}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Transaction History'} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader
            //     children={<SvgCalendar />}
            //     onPress={() => {
            //       navigation.navigate(ROUTES.Menu);
            //     }}
            //   />
            // ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Report}
          component={Report}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'All Report'} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader
            //     children={<SvgCalendar />}
            //     onPress={() => {
            //       navigation.navigate(ROUTES.Menu);
            //     }}
            //   />
            // ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.PriceUtTest}
          component={PriceUtTest}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Price And Ut Test'} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader
            //     children={<SvgCalendar />}
            //     onPress={() => {
            //       navigation.navigate(ROUTES.Menu);
            //     }}
            //   />
            // ),
            headerBackground: () => <HeaderBackGround  />,
          })}
        />
        <Stack.Screen
          name={ROUTES.PrivacyPolicy}
          component={PrivacyPolicy}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Privacy Policy'} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader
            //     children={<SvgCalendar />}
            //     onPress={() => {
            //       navigation.navigate(ROUTES.Menu);
            //     }}
            //   />
            // ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.TermsConditions}
          component={TermsConditions}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Terms & Conditions'} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader
            //     children={<SvgCalendar />}
            //     onPress={() => {
            //       navigation.navigate(ROUTES.Menu);
            //     }}
            //   />
            // ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.ContactUs}
          component={ContactUs}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Contact Us'} />,
            headerLeft: () => <ButtonHeader />,
            // headerRight: () => (
            //   <ButtonHeader
            //     children={<SvgCalendar />}
            //     onPress={() => {
            //       navigation.navigate(ROUTES.Menu);
            //     }}
            //   />
            // ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.AppointmentCalendar}
          component={AppointmentCalendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.DoctorProfile}
          component={DoctorProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.Services}
          component={Services}
          options={{
            headerTitle: () => <HeaderTitle title={'Services'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DashBoard}
          component={DashBoard}
          options={{
            headerTitle: () => <HeaderTitle title={'DashBoard'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.FullName}
          component={FullName}
          options={{
            headerTitle: () => <HeaderTitle title={'Fullname'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Gender}
          component={Gender}
          options={{
            headerTitle: () => <HeaderTitle title={'Your Gender'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.BirthDay}
          component={BirthDay}
          options={{
            headerTitle: () => <HeaderTitle title={'Your Birthday'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Weight}
          component={Weight}
          options={{
            headerTitle: () => <HeaderTitle title={'Your Weight'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Height}
          component={Height}
          options={{
            headerTitle: () => <HeaderTitle title={'Your Height'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.Blood}
          component={Blood}
          options={{
            headerTitle: () => <HeaderTitle title={'Blood'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.AppointmentList}
          component={AppointmentList}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Appoinment'} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader
                children={<SvgCalendar />}
                onPress={() => {
                  navigation.navigate(ROUTES.AppointmentCalendar);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.IndicatorsSettings}
          component={IndicatorsSettingsTab}
          options={() => ({
            headerTitle: () => <HeaderTitle title={'Settings'} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgSetting />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.News}
          component={NewsTab}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'News Healthy'} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader
                children={<SvgBookMark />}
                onPress={() => {
                  navigation.navigate(ROUTES.NewsBookmark);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.CreateAppointment}
          component={CreateAppointment}
          options={{
            headerTitle: () => <HeaderTitle title={'Create Appointment'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.InputTestIndicators}
          component={InputTestIndicators}
          options={{
            headerTitle: () => <HeaderTitle title={'Weight'} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgSetting />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.SetGoal}
          component={SetGoal}
          options={{
            headerTitle: () => <HeaderTitle title={'Goal Weight'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DoctorInformation}
          component={DoctorInformation}
          options={{
            headerTitle: () => <HeaderTitle title={'Doctor Information'} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgMyHeart />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DoctorAddress}
          component={DoctorAddress}
          options={{
            headerTitle: () => <HeaderTitle title={'Working Address'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.DoctorReview}
          component={DoctorReview}
          options={{
            headerTitle: () => <HeaderTitle title={'Review'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.NewsBookmark}
          component={NewsBookmark}
          options={{
            headerTitle: () => <HeaderTitle title={'Bookmarks'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.GoalSettings}
          component={GoalSettings}
          options={{
            headerTitle: () => <HeaderTitle title={'Goals Settings'} />,
            headerLeft: () => <ButtonHeader />,
            headerRight: () => (
              <ButtonHeader children={<SvgSetting />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          }}
        />

        <Stack.Screen
          name={ROUTES.AppointmentDetails}
          component={AppointmentDetails}
          options={{
            headerTitle: () => <HeaderTitle title={'Appointment Details'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.BookAppointment}
          component={BookAppointment}
          options={{
            headerTitle: () => <HeaderTitle title={'Book Appoinment'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.FindDoctors}
          component={FindDoctors}
          options={{
            headerTitle: () => <HeaderTitle title={'Find Doctors'} />,
            headerLeft: () => <ButtonHeader />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.ResultFindDoctor}
          component={ResultFindDoctor}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Result'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgMap />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.AddDrugs}
          component={AddDrugs}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Add Drugs'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.DrugDetails}
          component={DrugDetails}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Drug Details'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.DrugShop}
          component={DrugShop}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Drugs Shop'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.DrugShopDetails}
          component={DrugShopDetails}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Shop Details'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.NewsComment}
          component={NewsComment}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Comments'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Cart}
          component={Cart}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Shopping Cart'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Billing}
          component={Billing}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Billing'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgMap />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.MapsDoctors}
          component={MapsDoctors}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Maps'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgMap />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Insurance}
          component={Insurance}
          options={({}) => ({
            headerTitle: () => <HeaderTitle title={'Insurance'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader children={<SvgSearch />} onPress={() => {}} />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.ListDrugs}
          component={ListDrugs}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Pills Library'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                children={<SvgAdd />}
                onPress={() => {
                  navigation.navigate(ROUTES.AddDrugs);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
        <Stack.Screen
          name={ROUTES.FindHospital}
          component={FindHospital}
          options={{
            headerTitle: () => <HeaderTitle title={'Find Hospital'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerBackground: () => <HeaderBackGround />,
          }}
        />
        <Stack.Screen
          name={ROUTES.MainBottomTab}
          component={MainBottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.PricePlan}
          component={PricePlan}
          options={({ navigation }) => ({
            headerTitle: () => <HeaderTitle title={'Choose your Plan'} />,
            headerLeft: () => <ButtonHeader left={true} />,
            headerRight: () => (
              <ButtonHeader
                left={true}
                children={<SvgNotification />}
                onPress={() => {
                  navigation.navigate(ROUTES.Notification);
                }}
              />
            ),
            headerBackground: () => <HeaderBackGround />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Main;
