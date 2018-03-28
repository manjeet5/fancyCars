import { createStore, applyMiddleware,combineReducers,compose } from 'redux';
import thunk from 'redux-thunk';
import HeaderReducer from './headerReducer';
import EditorSettingReducer from './EditorSettingReducer';
import WorkExperienceReducer from './WorkExperienceReducer';
import ResumeGlobalStateReducer from './resumeGlobalStateReducer';
import projectsReducer from './projectsReducer';
import EducationReducer from './educationReducer';
import AwardsReducer from './awardsReducer';
import UserIdReducer from './userIdReducer';
import AdditionalSkillsReducer from './additionalSkillsReducer';
import SkillsReducer from './skillsReducer';
import AppSettingsReducer from './appColorReducer.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { ReduxCache, apolloReducer } from 'apollo-cache-redux';

const httpLink = new HttpLink({
	uri: 'https://sdlsvxuwoj.execute-api.us-east-1.amazonaws.com/dev/graphql'
});

const link = ApolloLink.from([ httpLink]);


const persistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['editorSetting']
};

const editorPersistConfig ={
	key: 'auth',
	storage: storage,
	blacklist: ['theme','font']
};

const Reducers = combineReducers({
	apollo: apolloReducer,
	userId:UserIdReducer,
	appSettings:AppSettingsReducer,
	header:HeaderReducer,
	editorSetting:persistReducer(editorPersistConfig, EditorSettingReducer),
	workExperienceList:WorkExperienceReducer,
	resumeGlobalStateReducer:ResumeGlobalStateReducer,
	projects:projectsReducer,
	education:EducationReducer,
	awards:AwardsReducer,
	additionalSkills:AdditionalSkillsReducer,
	skills:SkillsReducer,

});

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(
	persistedReducer,
	compose(
		applyMiddleware(thunk)
	),
);


const cache = new ReduxCache({ store });

export const client = new ApolloClient({
	link,
	cache
});

export let persistor = persistStore(store);

export default store;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
