import ShopActionTypes from './shop.action.types';
import {
    firestore, 
    convertCollectionSnapshotToMap
    } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START  
});

export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = errMsg => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMsg
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(err => {
            dispatch(fetchCollectionFailure(err.message));
        })
    }
}