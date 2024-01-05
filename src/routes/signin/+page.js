import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
    // @ts-ignore
import { error, redirect } from '@sveltejs/kit';
import { goto } from "$app/navigation";
import {browser} from '$app/environment'
const firebaseConfig = {
    apiKey: "AIzaSyBp1KKYhd_M5SK4y5Ofi8M7H-EjAotAWdo",
    authDomain: "lambda-community.firebaseapp.com",
    projectId: "lambda-community",
        storageBucket: "lambda-community.appspot.com",
        messagingSenderId: "316292399888",
        appId: "1:316292399888:web:40ddc69203c6c8c8c81b95",
        measurementId: "G-FGHWYFCPDN"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		context: {
			app
		}
	}
}