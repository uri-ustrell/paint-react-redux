import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableState from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add suport por redux dev tools

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxImmutableState()))
	);
}
