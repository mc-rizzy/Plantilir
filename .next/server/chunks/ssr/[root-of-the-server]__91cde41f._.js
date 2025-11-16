module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/video/speech.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpeechToText",
    ()=>useSpeechToText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useSpeechToText({ silenceMs = 2000, wakeWord = "hey app" } = {}) {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [awake, setAwake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const silenceTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Reset the silence timer
    const resetSilenceTimer = ()=>{
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = setTimeout(()=>{
            if (listening && recognitionRef.current) {
                recognitionRef.current.stop();
            }
        }, silenceMs);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("SpeechRecognition API not supported.");
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";
        recognition.onresult = (event)=>{
            let combined = "";
            for(let i = event.resultIndex; i < event.results.length; i++){
                combined += event.results[i][0].transcript.toLowerCase();
            }
            // Wake word detection
            if (!awake && combined.includes(wakeWord.toLowerCase())) {
                setAwake(true);
                setText("");
                return;
            }
            if (awake) {
                setText(combined);
            }
            resetSilenceTimer();
        };
        recognition.onend = ()=>{
            // Automatically restart if still listening
            if (listening && recognitionRef.current) {
                recognitionRef.current.start();
            } else {
                setListening(false);
                setAwake(false);
            }
        };
        recognitionRef.current = recognition;
    }, [
        awake,
        listening,
        silenceMs,
        wakeWord
    ]);
    const startListen = ()=>{
        if (!recognitionRef.current || listening) return;
        setAwake(false);
        setText("");
        recognitionRef.current.start();
        resetSilenceTimer();
        setListening(true);
    };
    const stopListen = ()=>{
        recognitionRef.current?.stop();
        if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
        setListening(false);
        setAwake(false);
    };
    return {
        text,
        listening,
        awake,
        startListen,
        stopListen
    };
}
}),
"[project]/public/scrapedData.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export const scrapedData = [
//   { name: 'Syed Mujtaba Tirmizi', 
//     email:'mujtabat@meta.com',
//     company:'Meta',
//     job: 'Senior Data Science Manager',
//     linkedIn: 'https://www.linkedin.com/in/mujtabatirmizi/',
//     education: 'University of Waterloo',
//     instagram: 'https://www.instagram.com/mujtabatirmizii',
//     wikipedia: 'https://en.wikipedia.org/wiki/Syed_Mujtaba_Tirmizi?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4CGNhbGxzaXRlAjE1AAGnNdEZp14IVufa6eFtyqWXBiQfBQfljTklSR7lToqgMesfTohbSr2pPSc8R88_aem_DKqllH8XyrPqpt_LZX364w',
//     military_service: 'Pakistan 1982–2016'
//   },
//   { name: 'Meetu Malhotra ', 
//     email:'Fmeetu@my.harrisburgu.edu',
//     education1:'Harrisburg University of Science and Technology',
//     company2:'S&P Global',
//     job: 'Data Analytics Principal',
//     linkedIn: 'http://www.linkedin.com/in/meetu30',
//     education2: 'University of North Carolina at Charlotte',
//     instagram1: 'https://www.instagram.com/meetu_9846',
//     instagram2: 'https://www.instagram.com/meetu_malhotra',
//     instagram3: 'https://www.instagram.com/meetu_malhotra_',
//     specialization: 'Natural language processing and deep learning'
//   },
//   { name: 'Reshu Bisht', 
//     email:'reshu.bisht2013@gmail.com',
//     company:'Meta',
//     job: 'Machine Learning Engineer',
//     linkedIn: 'https://www.linkedin.com/in/reshu-bisht/',
//     instagram1: 'https://www.instagram.com/reshu.bisht',
//     instagram2: 'https://www.instagram.com/reshubisht5'
//   },
//   { name: 'Abhi Desai', 
//     email:'desai.abhi94@gmail.com',
//     company:'Saks Fifth Avenue',
//     job: 'Senior Data Analyst',
//     linkedIn: 'https://www.linkedin.com/in/abhi-desai-5b35a018b',
//     instagram1: 'https://www.instagram.com/abhi.desai11',
//     instragram2: 'https://www.instagram.com/abhi._desai'
//   },
//   { name: 'Sagar Bharat Shah', 
//     email:'sagarshah8087@gmail.com',
//     company:'JPMorgan Chase & Co',
//     job: 'AI & Data Product Leader',
//     linkedIn: 'https://www.linkedin.com/in/sagarbharatshah/',
//     instagram1: 'https://www.instagram.com/sagarshahchess',
//     instagram2: 'https://www.instagram.com/sagarshah9826',
//     specialization: 'Financial technology and AI'
//   },
//   { name: 'Aashrey Kamal Sharma', 
//     email:'aashrey9sharma@gmail.com',
//     company:'Epic Games',
//     job: 'Senior UX Designer',
//     linkedIn: 'https://www.linkedin.com/in/aashreys/',
//     education: 'University of Maryland',
//     instagram1: 'https://www.instagram.com/aashrey_sharma',
//     instagram2: 'https://www.instagram.com/aashreys'
//   },
//   { name: 'Bhakti Mahato', 
//     email:'mabhakti@amazon.com',
//     company:'Amazon Pharmacy',
//     job: 'Sr. Product Manager',
//     education: 'University of Cincinnati College of Business',
//     linkedIn: 'https://www.linkedin.com/in/bhakti-mahato5/',
//     specialization: 'large-scale healthcare solutions',
//     instagram1: 'https://www.instagram.com/enigmatic_reality',
//     instagram2: 'https://www.instagram.com/bhaktimahato54',
//   },
//   { name: 'Abishek Sethuraman', 
//     email:'abisheksethuraman@gmail.com',
//     company1:'Meta',
//     company2:'Facebook',
//     job: 'Senior Software Engineer',
//     linkedIn: 'http://www.linkedin.com/in/abishek-sethuraman',
//     instagram: 'https://www.instagram.com/abisheksethuraman',
//     education1: 'University of Florida',
//     education2: 'Mumbai University Mumbai'
//   },
//   { name: 'Jyoti Kunal Shah', 
//     email:'thejyotishah83@gmail.com',
//     company:'ADP',
//     job: 'Director of Application Development',
//     linkedIn: 'https://www.linkedin.com/in/jyoti-shah-6a550817/',
//     instagram1: 'https://www.instagram.com/jyotishah___',
//     instagram2: 'https://www.instagram.com/jyotishah_3',
//     specialization: 'Java, Angular, Spring programming'
//   },
//   { name: 'Jayesh Gupta', 
//     email:'jgupta0700@gmail.com',
//     company:'Intersystems',
//     job: 'Software Engineer',
//     linkedIn: 'https://www.linkedin.com/in/jayeshgupta0700/',
//     education: 'Duke University',
//     instagram1: 'https://www.instagram.com/jayeshgupta724',
//     instagram2: 'https://www.instagram.com/jayesh.gupta',
//     instagram3: 'https://www.instagram.com/ja_yesh2190',
//   },
//   { name: 'Pathik Sharma', 
//     email:'',
//     company:'Google',
//     job: 'Cloud Solutions Architect',
//     linkedIn: 'http://linkedin.com/in/pathik-sharma',
//     instagram1: 'https://www.instagram.com/_pathik_sharma_',
//     instagram2: 'https://www.instagram.com/pathik_sharma',
//     instagram3: 'https://www.instagram.com/pathik.sharma.5688',
//     education: 'State University of New York at Stony Brook',
//     specialization: 'Cloud financial operational cost optimiation'
//   },
//   { name: 'Minerva Gupta', 
//     email:'',
//     company:'Meta',
//     job: 'Machine Learning Engineer',
//     linkedIn: 'https://www.linkedin.com/in/minervagupta/',
//     education: 'University of Rochester',
//     instagram1: 'https://www.instagram.com/minerva_gupta',
//     instagram2: 'https://www.instagram.com/minerva.gupta',
//     instagram3: 'https://www.instagram.com/minerva.gupta.79',
//   },
//   { name: 'Minfeng Liu', 
//     email:'contact.minfeng@gmail.com',
//     company:'Nanfang Hospital',
//     job: 'Doctor',
//     linkedIn: 'https://www.linkedin.com/in/minfeng-liu-84050837',
//     instagram1: 'https://www.instagram.com/minfengliu',
//   },
//   { name: 'Dev Patel', 
//     email:'devp_10@yahoo.com',
//     company:'PPL Corporation',
//     job: 'Data Engineer',
//     linkedIn: 'https://www.linkedin.com/in/devp10',
//     instagram1: 'https://www.instagram.com/devpat3l',
//     instagram2: 'https://www.instagram.com/devpatelactor',
//     instagram3: 'https://www.instagram.com/devpatelisprecious',
//     education: 'Penn State University'
//   },
//   { name: 'Ofer Vugman', 
//     email:'vugman.ofer@gmail.com',
//     company:'Lemonade',
//     job: 'Staff Engineer',
//     linkedIn: 'https://www.linkedin.com/in/ofervugman/',
//     instagram1: '',
//     instagram2: '',
//     instagram3: '',
//   },
//   { name: 'Vikesh Dudankar', 
//     email:'vikesh.dudhankar@gmail.com',
//     company:'Morgan Stanley',
//     job: 'Vice President',
//     linkedIn: 'https://www.linkedin.com/in/vikesh-dudhankar',
//     instagram: 'https://www.instagram.com/ofer_vugman',
//   },
//   { name: 'Sohom Chatterjee', 
//     email:'Sohom070994@gmail.com',
//     company:'GE Aerospace Research',
//     job: 'Research Engineer',
//     linkedIn: 'https://www.linkedin.com/in/sohom070994',
//     instagram1: 'https://www.instagram.com/s_for_sohom',
//     instagram2: 'https://www.instagram.com/sohom.chatterjee.334',
//     education: 'Texas A&M University',
//   },
//   { name: 'Nihar Karra', 
//     email:'niharreddy.k@gmail.com',
//     company:'Amazon Web Services',
//     job: 'Cloud Engineer II',
//     linkedIn: 'https://www.linkedin.com/in/niharkarra/',
//     instagram: 'https://www.instagram.com/nihar_kapoor',
//     education: 'University of the Cumberlands',
//   },
//   { name: 'Haoran Chen', 
//     email:'fredchen0331@gmail.com',
//     company:'Connectus Technology Inc',
//     job: 'Bank of America',
//     linkedIn: 'https://www.linkedin.com/in/haoranc1/',
//     instagram1: 'https://www.instagram.com/haoran.chen.7568',
//     instagram2: 'https://www.instagram.com/its_haoran',
//     education1: 'NYU Tandon School of Engineering',
//     education2: 'UC Irvine'
//   },
//   { name: 'Jasdeep Singh Bhalla', 
//     email:'jasdeepbhalla@gmail.com',
//     company:'GoDaddy',
//     job: 'Senior Software Engineer',
//     linkedIn: 'https://www.linkedin.com/in/jsblive/',
//     instagram1: 'https://www.instagram.com/isssa5911',
//     instagram2: 'https://www.instagram.com/jasdeepbhalla',
//     education: 'Arizona State University'
//   },
//   { name: 'Tejas Pravinbhai Patel', 
//     email:'tejas5038@gmail.com',
//     company:'Amazon',
//     job: 'Software Development Engineer II',
//     linkedIn: 'https://www.linkedin.com/in/tejas5038/',
//     instagram1: 'https://www.instagram.com/tejas_304',
//     instagram2: 'https://www.instagram.com/iam.tejaspatel',
//     instagram3: 'https://www.instagram.com/tejaspateldds',
//     education: 'The University of Texas at Arlington'
//   },
//   { name: 'Shubham Kulkarni', 
//     email:'shubhamkulkarni.work@gmail.com',
//     company:'QVC Group',
//     linkedIn: 'https://www.linkedin.com/in/shubhamkulkarni29/',
//     job: 'Product Designer',
//     instagram1: 'https://www.instagram.com/shubham_kulkarni_______',
//     instagram2: 'https://www.instagram.com/shubham_.kulkarni',
//     instagram3: 'https://www.instagram.com/shubhamkulkarni24',
//     education: 'Thomas Jefferson University',
//     phone: '267-910-9022',
//     location: 'Philadelphia, PA'
//   },
//   { name: 'Ishan Shah', 
//     email:'ishanshah301190@gmail.com',
//     company:'PayPal',
//     job: 'Staff Software Engineer',
//     linkedIn: 'http://www.linkedin.com/in/ishandshah',
//     education: 'Cal State LA College of ECST',
//     instagram1: 'https://www.instagram.com/__ishan.shah',
//     instagram2: 'https://www.instagram.com/ishan.shah17',
//     instagram3: 'https://www.instagram.com/ishan.shah__',
//     location: 'San Francisco Bay Area',
//     github: 'https://github.com/Ishandshah'
//   },
//   { name: 'Ajay Kaarthic Jeysree', 
//     email:'ajaykaarthic@gmail.com',
//     company:'Blue Yonder',
//     job: 'Software Engineer',
//     linkedIn: 'https://www.linkedin.com/in/ajaykaarthic/',
//     instagram1: 'https://www.instagram.com/ajaykaarthic',
//     instagram2: 'https://www.instagram.com/ajay_kaarthick',
//     instagram3: 'https://www.instagram.com/ajay.karthic.9',
//     education: 'The University of Texas at Dallas'
//   },
//   { name: 'Prakul Sairaha', 
//     email:'psairaha@microsoft.com',
//     company:'Microsoft',
//     job: 'Senior Cloud Solution Architect',
//     linkedIn: 'https://www.linkedin.com/in/prakulsairaha/',
//     education: 'Jaypee Institute Of Information Technology University',
//     instagram: 'https://www.instagram.com/prakulsairaha',
//   },
//   { name: 'Sean Alcordo', 
//     email:'sjalcordo@gmail.com',
//     company:'Velan Studios',
//     job: 'Gameplay Programmer',
//     linkedIn: 'https://www.linkedin.com/in/sean-jacob-alcordo/',
//     instagram1: 'https://www.instagram.com/unfortunately.seen',
//     instagram2: 'https://www.instagram.com/seanjacobspam',
//     education: 'Rensselaer Polytechnic Institute'
//   },
//   { name: 'Daniel Raj Jeevaguntala', 
//     email:'daniel212@gmail.com',
//     company:'IEEE Schenectady',
//     job: 'Software Engineer',
//     linkedIn: 'https://www.linkedin.com/in/daniel-raj-jeevigunta-9b214080',
//     education: 'SS&N college Narasaraopet'
//   },
//   { name: 'John Krupavaram Pole Bhakthavatsalam', 
//     email:'johnpole555@gmail.com',
//     company:'IEEE Schenectady',
//     job: 'Lead fullstack software developer',
//     linkedIn: 'https://www.linkedin.com/in/john-krupavaram-pole-bhakthavatsalam-5a065912a',
//     education: 'NYS Office of Information Technology Services, IES'
//   }
// ];
__turbopack_context__.s([
    "scrapedData",
    ()=>scrapedData
]);
const scrapedData = [
    {
        name: 'Xenia',
        job: 'Google',
        location: 'DCC',
        rizz: 'has'
    },
    {
        name: 'Matthew',
        job: 'not crashing out',
        location: 'Idk',
        education: 'top tier',
        rizz: 'yup'
    },
    {
        name: 'CJ',
        job: 'survive',
        location: '??',
        hobby: 'hackathons',
        rizz: 'yes'
    },
    {
        name: 'Dakshesh',
        hobbies: 'legos an shi',
        lastVacationTrip: 'beach',
        rizz: 'rizzy'
    },
    {
        name: 'Shankar',
        favoriteFood: 'McDonalds',
        favoriteDance: 'breakdance',
        rizz: 'yur'
    },
    {
        name: 'Devan',
        job: 'McDonalds',
        location: 'McDonalds',
        rizzLevel: 'decent'
    },
    {
        name: 'Aaryan',
        job: 'being a cracked networker',
        money: 'up',
        rizz: 'unfathomable'
    },
    {
        name: 'Ethan',
        job: 'McDonalds',
        location: 'idk bruh this just example data',
        rizz: 'perchance'
    },
    {
        name: 'Tobias',
        job: 'McDonalds',
        location: 'idk bruh this just example data',
        rizz: '7 rizzes'
    },
    {
        name: 'Lala',
        job: 'McDonalds',
        location: 'idk bruh this just example data',
        rizz: 'Ok'
    },
    {
        name: 'Jackson',
        job: 'McDonalds',
        location: 'idk bruh this just example data',
        rizz: 'extra'
    },
    {
        name: 'Caleb',
        job: 'McDonalds',
        location: 'idk bruh this just example data',
        rizz: 'super'
    },
    {
        name: 'Suyash',
        job: 'McDonalds',
        location: 'idk bruh this just example data',
        rizz: 'rizz'
    },
    {
        name: 'Jodie',
        job: 'McDonalds',
        location: 'idk bruh this just example data',
        rizz: 'blizz'
    }
];
}),
"[project]/app/video/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$video$2f$speech$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/video/speech.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$scrapedData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/scrapedData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$FontLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/FontLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$TextGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/geometries/TextGeometry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
;
;
function VideoPage() {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dataList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const infoList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeVelocities = {};
    const ignoreParameters = [
        'id',
        'threeShape',
        'connections',
        'conversation',
        'nameTag'
    ];
    const listenButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { text, listening, awake, startListen, stopListen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$video$2f$speech$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpeechToText"])({
        silenceMs: 2500,
        wakeWord: "hey app"
    });
    let animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let SelectedID = null;
    let monkeyModel = null;
    let profileList = [];
    const scrollData = {
        dataListScroll: 0,
        infoListScroll: 0,
        dataScrollSpeed: 0,
        infoScrollSpeed: 0,
        dataScrollDir: 0,
        infoScrollDir: 0
    };
    const landmarkData = {
        hands: null,
        camera: null,
        smoothing: {
            pinchDist: []
        }
    };
    const three = {
        camera: null,
        scene: null,
        renderer: null,
        objects: []
    };
    function resize() {
        if (videoRef != null && videoRef.current != null && canvasRef != null && canvasRef.current != null) {
            videoRef.current.width = window.innerWidth;
            videoRef.current.height = window.innerHeight;
            const aspectRatio = 640 / 480;
            let width = window.innerWidth;
            let height = width / aspectRatio;
            if (height > window.innerHeight) {
                height = window.innerHeight;
                width = height * aspectRatio;
            }
            videoRef.current.width = width;
            videoRef.current.height = height;
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            videoRef.current.style.width = `${width}px`;
            videoRef.current.style.height = `${height}px`;
            canvasRef.current.style.width = `${width}px`;
            canvasRef.current.style.height = `${height}px`;
        // canvasRef.current.style.width = `${window.innerWidth}px`;
        // canvasRef.current.style.height = `${window.innerHeight}px`;
        }
        if (canvasRef.current && canvasRef.current.children.length > 0 && three.renderer != null && three.camera != null) {
            const canvas = three.renderer.domElement;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            three.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            three.camera.updateProjectionMatrix();
        }
    }
    /*
	function setUpCamera(){

		landmarkData.hands = new window.Hands({
			locateFile: (file: string) =>
				`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
		});

		landmarkData.hands.setOptions({
			maxNumHands: 2,
			modelComplexity: 1,
			minDetectionConfidence: 0.7,
			minTrackingConfidence: 0.5,
		});
		
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext('2d')!;
		let cubeObject = profileList[0].threeShape;

		landmarkData.hands.onResults((results: any) => {
			ctx.save();
			// ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

			if (results.multiHandLandmarks) {

				let chosenHand = 'Left';
				let data = null;
				//asd
				for(let i = 0; i < results.multiHandedness.length; i++)
					if(results.multiHandedness[i].label == chosenHand) data = results.multiHandLandmarks[results.multiHandedness[i].index];

				if(data != null){
					if(profileList.length > 0 && three.camera){
						
						let landmark = results.multiHandLandmarks[0][8]; // index fingertip
						let projectionData = projectLandmark(landmark);
						let landmark2 = results.multiHandLandmarks[0][4];


						let flatLandmarkData = {
							x1: landmark.x*canvas.width, 
							y1: landmark.y*canvas.height,
							x2: landmark2.x*canvas.width, 
							y2: landmark2.y*canvas.height
						}


						ctx.lineWidth = 10;
						ctx.beginPath();
						ctx.moveTo(flatLandmarkData.x1, flatLandmarkData.y1);
						ctx.lineTo(flatLandmarkData.x2, flatLandmarkData.y2);
						ctx.stroke();

						let dist = Math.sqrt((flatLandmarkData.x1-flatLandmarkData.x2)*(flatLandmarkData.x1-flatLandmarkData.x2) + (flatLandmarkData.y1-flatLandmarkData.y2)*(flatLandmarkData.y1-flatLandmarkData.y2));
						landmarkData.smoothing.pinchDist.push(dist);
						let avgDist = listAverage(landmarkData.smoothing.pinchDist);


						cubeObject.rotation.x = avgDist / 100;
						cubeObject.rotation.y = avgDist / 100;
						cubeObject.rotation.z = avgDist / 100;

						//x is 1 to -1 ish
						//y is 1 to -1
						
						let pinchedDist = (100+ ((0.9-projectionData.ndcZ)*720)) + 20;
						if(dist < pinchedDist){
							let newMove = smoothMove(profileList[0].threeShape, projectionData.ndcX, projectionData.ndcY, projectionData.ndcZ);
							let ndc = new THREE.Vector3(newMove.avgX, newMove.avgY, newMove.avgZ);
							ndc.unproject(three.camera);
							cubeObject.position.copy(ndc);
						}

					}
				}

				for (const landmarks of results.multiHandLandmarks) {
					window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
						color: '#00FF00',
						lineWidth: 2,
					});
					window.drawLandmarks(ctx, landmarks, {
						color: '#FF0000',
						lineWidth: 1,
					});
				}
			}
			ctx.restore();
		});

		handsRef.current = landmarkData.hands;

		landmarkData.camera = new window.Camera(videoRef.current!, {
			onFrame: async () => {
				await landmarkData.hands.send({ image: videoRef.current! });
			},
			width: 640,
			height: 480,
		});

		cameraRef.current = landmarkData.camera;
		landmarkData.camera.start();










		// if (!window.FaceMesh || !window.Camera) return;

		// let video = videoRef.current!;

		// let faceMesh = new window.FaceMesh({
		// 	locateFile: (file: string) =>
		// 		`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
		// });

		// faceMesh.setOptions({
		// 	maxNumFaces: 1,
		// 	refineLandmarks: true,
		// 	minDetectionConfidence: 0.5,
		// 	minTrackingConfidence: 0.5,
		// });

		// faceMesh.onResults((results: any) => {
		// 	// ctx.clearRect(0, 0, canvas.width, canvas.height);

		// // Draw mirrored video
		// ctx.save();
		// ctx.scale(-1, 1);
		// ctx.drawImage(results.image, -canvas.width, 0, canvas.width, canvas.height);
		// ctx.restore();

		// // Draw glowing dots
		// if (!results.multiFaceLandmarks?.length) return;

		// let landmarks = results.multiFaceLandmarks[0];

		// landmarks.forEach((lm: any) => {
		// 	const x = canvas.width - lm.x * canvas.width;
		// 	const y = lm.y * canvas.height;

		// 	const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10);
		// 	gradient.addColorStop(0, "rgba(0,255,255,1)");
		// 	gradient.addColorStop(1, "rgba(0,255,255,0)");

		// 	ctx.fillStyle = gradient;
		// 	ctx.beginPath();
		// 	ctx.arc(x, y, 5, 0, Math.PI * 2);
		// 	ctx.fill();
		// });
		// });

		// const camera = new window.Camera(video, {
		// onFrame: async () => {
		// 		await faceMesh.send({ image: video });
		// 	},
		// 	width: 640,
		// 	height: 480,
		// });

		// camera.start();
		

	}
*/ function setUpCamera() {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const video = videoRef.current;
        let cubeObject = profileList[0].threeShape;
        // storage for latest results
        let latestHands = null;
        let latestFace = null;
        // ============================================================
        // 1. HANDS MODEL
        // ============================================================
        const hands = new window.Hands({
            locateFile: (file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        });
        hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.7,
            minTrackingConfidence: 0.5
        });
        hands.onResults((results)=>{
            latestHands = results; // ← store only
        });
        // ============================================================
        // 2. FACE MESH MODEL
        // ============================================================
        const faceMesh = new window.FaceMesh({
            locateFile: (file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
        });
        faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        faceMesh.onResults((results)=>{
            latestFace = results; // ← store only
        });
        // ============================================================
        // 3. ONE CAMERA THAT FEEDS BOTH
        // ============================================================
        const camera = new window.Camera(video, {
            onFrame: async ()=>{
                await hands.send({
                    image: video
                });
                await faceMesh.send({
                    image: video
                });
                drawFrame(); // ← draw everything here
            },
            width: 640,
            height: 480
        });
        camera.start();
        // ============================================================
        // 4. THE RENDER PIPELINE (the FIX)
        // ============================================================
        function drawFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //
            // 1. MIRROR CONTEXT FOR EVERYTHING
            //
            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width, 0);
            //
            // 2. DRAW VIDEO (mirrored!)
            //
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            //
            // 3. DRAW HAND LANDMARKS (mirrored!)
            //
            if (latestHands?.multiHandLandmarks) {
                const results = latestHands;
                // Your pinch + cube logic still works because it's in canvas space
                let chosenHand = "Left";
                let data = null;
                for(let i = 0; i < results.multiHandedness.length; i++){
                    if (results.multiHandedness[i].label === chosenHand) {
                        data = results.multiHandLandmarks[results.multiHandedness[i].index];
                    }
                }
                if (data != null && profileList.length > 0 && three.camera) {
                    let lm = results.multiHandLandmarks[0][8];
                    let lm2 = results.multiHandLandmarks[0][4];
                    // SAME coordinates (canvas now mirrored)
                    const flat = {
                        x1: lm.x * canvas.width,
                        y1: lm.y * canvas.height,
                        x2: lm2.x * canvas.width,
                        y2: lm2.y * canvas.height
                    };
                    ctx.lineWidth = 10;
                    ctx.beginPath();
                    ctx.moveTo(flat.x1, flat.y1);
                    ctx.lineTo(flat.x2, flat.y2);
                    ctx.stroke();
                    let dist = Math.hypot(flat.x1 - flat.x2, flat.y1 - flat.y2);
                    landmarkData.smoothing.pinchDist.push(dist);
                    const avgDist = listAverage(landmarkData.smoothing.pinchDist);
                    cubeObject.rotation.x = avgDist / 100;
                    cubeObject.rotation.y = avgDist / 100;
                    cubeObject.rotation.z = avgDist / 100;
                    const projectionData = projectLandmark(lm);
                    let pinchedDist = 100 + (0.9 - projectionData.ndcZ) * 720 + 20;
                    if (dist < pinchedDist) {
                        let newMove = smoothMove(profileList[0].threeShape, projectionData.ndcX, projectionData.ndcY, projectionData.ndcZ);
                        let ndc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](newMove.avgX, newMove.avgY, newMove.avgZ);
                        ndc.unproject(three.camera);
                        cubeObject.position.copy(ndc);
                    }
                }
                // draw all hands
                for (const lm of results.multiHandLandmarks){
                    window.drawConnectors(ctx, lm, window.HAND_CONNECTIONS, {
                        color: "#00FF00",
                        lineWidth: 2
                    });
                    window.drawLandmarks(ctx, lm, {
                        color: "#FF0000",
                        lineWidth: 1
                    });
                }
            }
            //
            // 4. DRAW FACE LANDMARKS (mirrored!)
            //
            if (latestFace?.multiFaceLandmarks) {
                const landmarks = latestFace.multiFaceLandmarks[0];
                if (landmarks) landmarks.forEach((lm)=>{
                    const x = lm.x * canvas.width; // <— NO canvas.width - x
                    const y = lm.y * canvas.height;
                    const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
                    g.addColorStop(0, "rgba(0,255,255,1)");
                    g.addColorStop(1, "rgba(0,255,255,0)");
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
            //
            // 5. RESTORE (leave canvas normal for next frame)
            //
            ctx.restore();
        }
    }
    function createScene() {
        three.scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        three.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        three.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            alpha: true
        });
        if (containerRef.current && three.renderer) {
            containerRef.current.appendChild(three.renderer.domElement);
            three.renderer.domElement.className = 'absolute';
            three.renderer.setSize(window.innerWidth, window.innerHeight);
            three.renderer.domElement.style.transform = "scaleX(-1)";
        }
        three.camera.position.z = 5;
        three.camera.position.y = 0;
        three.camera.position.x = 0;
    }
    function createCube(size) {
        var tempGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](size, size, size);
        var tempMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
            color: `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
        });
        var tempCube = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](tempGeometry, tempMaterial);
        tempCube.position.x = 0;
        tempCube.zList = [];
        tempCube.xList = [];
        tempCube.yList = [];
        three.objects.push(tempCube);
        if (three.scene) three.scene.add(tempCube);
    }
    function listAverage(list, maxLength = 10) {
        if (list.length > maxLength) list.shift();
        let tempAvg = 0;
        for(let i = 0; i < list.length; i++)tempAvg += list[i];
        tempAvg /= list.length;
        return tempAvg;
    }
    function smoothMove(object, newX, newY, newZ) {
        object.zList.push(newZ);
        object.xList.push(newX);
        object.yList.push(newY);
        let avgZ = listAverage(object.zList);
        let avgX = listAverage(object.xList, 5);
        let avgY = listAverage(object.yList, 5);
        return {
            'avgZ': avgZ,
            'avgX': avgX,
            'avgY': avgY
        };
    }
    function projectLandmark(landmark) {
        // Convert to NDC
        let ndcX = (landmark.x - 0.5) * 2;
        let ndcY = (0.5 - landmark.y) * 2;
        let ndcZ = Math.abs(landmark.z);
        ndcZ = Math.min(0.7, Math.max(0, ndcZ));
        ndcZ = ndcZ * (1 / 0.7);
        ndcZ = 0.995 - ndcZ * 0.195;
        // ndcZ = 0.995;
        // ndcZ = 0.8;
        return {
            "ndcX": ndcX,
            "ndcY": ndcY,
            "ndcZ": ndcZ
        };
    }
    function parseGeminiJSON(text) {
        let startIndex = text.indexOf('{');
        let endIndex = text.lastIndexOf('}');
        if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
            console.error("Could not find valid JSON object delimiters '{' and '}' in the string.");
            return null;
        }
        let jsonString = text.substring(startIndex, endIndex + 1);
        let parsedData = JSON.parse(jsonString);
        return parsedData;
    }
    async function createInfo(tempData, askGemini = false) {
        if (!tempData.phone) {
            tempData.phone = Math.round(Math.random() * 10000000000);
        }
        if (!tempData.connections || tempData.connection.length == 0) {
            tempData.connections = [];
            if (profileList.length > 0) {
                for(let i = 0; i < 3; i++){
                    tempData.connections.push(profileList[Math.floor(Math.random() * profileList.length)]);
                }
            }
        }
        if (askGemini) {
            let dataString = tempData;
            let geminiedObject = await getGemini(`Here is a JSON object:${dataString}. Add some JSON data to this object of the profile of ${tempData.name} (especially identifiable information) based on the following conversation: "${tempData.conversation}". Return only a JSON object.`);
            let parsedJSONObject = parseGeminiJSON(geminiedObject);
            let tempShape = tempData.threeShape;
            // tempData = { ...parsedJSONObject, ...tempData };
            tempData.threeShape = tempShape;
        }
        return tempData;
    }
    function findId(id) {
        for(let i = 0; i < profileList.length; i++){
            if (profileList[i].id == id) {
                return profileList[i];
            }
        }
    }
    function loadInfo(dataID) {
        SelectedID = dataID;
        let tempData = findId(dataID);
        if (!infoList.current) return;
        for(let i = 0; i < infoList.current.children.length; i++){
            infoList.current.children[i].remove();
            i--;
        }
        for(let key in tempData){
            if (!ignoreParameters.includes(key)) addInfoSnippet(key, tempData[key]);
        }
    }
    function addPerson(name) {
        let newItem = document.createElement("div");
        newItem.className = 'dataItem';
        newItem.innerHTML = name;
        if (!newItem.id) newItem.id = crypto.randomUUID();
        newItem.addEventListener('click', function() {
            loadInfo(newItem.id);
        });
        if (dataList.current) dataList.current.appendChild(newItem);
        return newItem.id;
    }
    function addInfoSnippet(keyName, tempData) {
        if (typeof tempData === "string" || typeof tempData === "number") {
            let newItem = document.createElement("div");
            newItem.className = 'infoItem';
            let tempKeyName = keyName.replaceAll('_', ' ').toLowerCase().split(' ').map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
            newItem.innerHTML = `${tempKeyName}: ${tempData}`;
            if (tempKeyName.toLowerCase().includes('linkedin') || tempKeyName.toLowerCase().includes('instagram') || tempKeyName.toLowerCase().includes('github') || tempKeyName.toLowerCase().includes('http')) {
                let linkItem = document.createElement("a");
                linkItem.href = '' + tempData;
                linkItem.target = '_blank';
                linkItem.appendChild(newItem);
                if (infoList.current) infoList.current.appendChild(linkItem);
            } else {
                if (infoList.current) infoList.current.appendChild(newItem);
            }
        } else {
            for(let key in tempData){
                if (!ignoreParameters.includes(key)) addInfoSnippet(key, tempData[key]);
            }
        }
    }
    async function loadErryThang(tempData) {
        await loadModel(tempData);
        if (!three.scene) return;
        let color = 0xFFFFFF;
        let light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](color, 5);
        three.scene.add(light);
        let light2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"](color, 10);
        light2.position.set(0, 1, 3);
        three.scene.add(light2);
    }
    async function loadData(tempData) {
        for(let i = 0; i < tempData.length; i++){
            await createProfile(tempData[i]);
        }
        setUpCamera();
    }
    async function createProfile(data) {
        if (data.conversation) data = await createInfo(data, true);
        else data = await createInfo(data);
        data = await add3dProfile(data);
        if (data.nameTag) {
            data.nameTag.position.x += 0.5;
            data.nameTag.position.y += 0.2;
        }
        data.id = addPerson(data.name);
        profileList.push(data);
    }
    // import * as THREE from 'three';
    // import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
    // import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
    async function add3dProfile(tempData) {
        var tempCube = monkeyModel.clone();
        tempCube.position.x = Math.random();
        tempCube.position.y = Math.random();
        tempCube.position.z = Math.random();
        tempCube.zList = [];
        tempCube.xList = [];
        tempCube.yList = [];
        three.objects.push(tempCube);
        tempData.threeShape = tempCube;
        if (three.scene) three.scene.add(tempData.threeShape);
        let material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: 0xdc24e2
        });
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$FontLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontLoader"]();
        // Wrap loader.load in a Promise
        const font = await new Promise((resolve, reject)=>{
            loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font)=>resolve(font), undefined, (err)=>reject(err));
        });
        // Now the font is fully loaded
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$TextGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextGeometry"](tempData.name, {
            font: font,
            size: 0.1,
            depth: 0.01,
            bevelEnabled: false,
            bevelThickness: 0.01,
            bevelSize: 0.01,
            bevelSegments: 3,
            curveSegments: 12
        });
        let textMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
        geometry.center();
        textMesh.position.set(tempCube.position.x + 0.2, tempCube.position.y, tempCube.position.z);
        textMesh.rotation.set(0, Math.PI, 0);
        tempData.nameTag = textMesh;
        if (three.scene) three.scene.add(tempData.nameTag);
        console.log(tempData.nameTag);
        return tempData;
    }
    function animateThreeShapes(selectedID = null) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const minDistance = 4.0; // minimum distance for repulsion
        const maxAttractDistance = 10; // distance scaling for attraction
        const attractionBase = 0.1; // base attraction factor
        const repulsionBase = 0.2; // base repulsion factor
        const damping = 0.1; // smooth movement factor
        for(let i = 0; i < profileList.length; i++){
            let shape = profileList[i].threeShape;
            let pos = shape.position;
            let forceX = 0;
            let forceY = 0;
            let forceZ = 0;
            // Attraction to connections
            const connections = profileList[i].connections;
            for(let t = 0; t < connections.length; t++){
                const targetShape = findId(connections[t].id).threeShape;
                const targetPos = targetShape.position;
                const dx = targetPos.x - pos.x;
                const dy = targetPos.y - pos.y;
                const dz = targetPos.z - pos.z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;
                // Stronger attraction when farther away
                const attraction = attractionBase * (distance / maxAttractDistance);
                forceX += dx / distance * attraction;
                forceY += dy / distance * attraction;
                forceZ += dz / distance * attraction;
            }
            // Repulsion from all other shapes
            for(let j = 0; j < profileList.length; j++){
                if (i === j) continue;
                const other = profileList[j].threeShape;
                const dx = pos.x - other.position.x;
                const dy = pos.y - other.position.y;
                const dz = pos.z - other.position.z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.001;
                if (distance < minDistance) {
                    // Stronger repulsion when closer
                    const repulse = repulsionBase * ((minDistance - distance) / distance);
                    forceX += dx * repulse;
                    forceY += dy * repulse;
                    forceZ += dz * repulse;
                }
            }
            // Smoothly update position using damping
            pos.x += forceX * damping;
            pos.y += forceY * damping;
            pos.z += forceZ * damping;
            // let avgs = smoothMove(shape, pos.x + forceX * damping, pos.y + forceY * damping, pos.z + forceZ * damping);
            // pos.x = avgs['avgX'];
            // pos.y = avgs['avgY'];
            // pos.z = avgs['avgZ'];
            if (pos.z > 2) pos.z = 2;
            if (profileList[i].nameTag) {
                profileList[i].nameTag.position.x = pos.x;
                profileList[i].nameTag.position.y = pos.y + 1;
                profileList[i].nameTag.position.z = pos.z;
            }
        }
        if (selectedID) {
            let item = findId(selectedID);
            let shape = item.threeShape.position;
            shape.x *= 0.9;
            shape.y *= 0.9;
            shape.z *= 0.9;
        }
    }
    function scrollDataList(e) {
        scrollData.dataScrollSpeed = 2 * Math.abs(e.deltaY);
        scrollData.dataScrollDir = e.deltaY > 0 ? -1 : 1;
    }
    function scrollInfoList(e) {
        scrollData.infoScrollSpeed = 2 * Math.abs(e.deltaY);
        scrollData.infoScrollDir = e.deltaY > 0 ? -1 : 1;
    }
    function handleScrolls() {
        if (dataList.current) {
            let temp = dataList.current.offsetTop + scrollData.dataScrollSpeed * scrollData.dataScrollDir;
            let minTop = 0;
            let maxTop = window.innerHeight + (dataList.current.getBoundingClientRect().top - dataList.current.getBoundingClientRect().bottom);
            if (temp > minTop) temp = minTop;
            if (temp < maxTop) temp = maxTop;
            scrollData.dataScrollSpeed *= 0.9;
            dataList.current.style.top = temp + 'px';
        }
    }
    async function getGemini(prompt) {
        const res = await fetch("/api/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt
            })
        });
        const data = await res.json();
        return data.geminiAnswer;
    // return null;
    }
    function animate() {
        animationId.current = requestAnimationFrame(animate);
        if (three.renderer && three.scene && three.camera) three.renderer.render(three.scene, three.camera);
        // three.objects.forEach((object) => {
        // 	object.rotateX(0.01);
        // 	object.rotateY(0.01);
        // 	object.rotateZ(0.01);
        // });
        animateThreeShapes(SelectedID);
        handleScrolls();
    }
    async function loadModel(tempData) {
        let loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        loader.load('/Monkey.glb', (gltf)=>{
            let model;
            model = gltf.scene;
            model.scale.set(0.7, 0.8, 0.55);
            let box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]();
            box.setFromObject(model);
            let size = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            box.getSize(size);
            model.geometry = {
                parameters: {
                    height: Math.floor(2.87 * 100) / 100,
                    width: Math.floor(size.x * 100) / 100,
                    depth: Math.floor(size.z * 100) / 100,
                    depthOffset: 0.6
                }
            };
            monkeyModel = model;
            loadData(tempData);
        });
    }
    function toggleListen() {
        if (listening) stopListen();
        else startListen();
        console.log(listening);
        console.log(text);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = "hidden";
        window.addEventListener('resize', resize);
        resize();
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        let conversation;
    }, []);
    // voice
    // add lines between connections
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 982,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 986,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 990,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 994,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
                strategy: "beforeInteractive"
            }, void 0, false, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 995,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: dataList,
                        id: "dataList",
                        onWheel: scrollDataList
                    }, void 0, false, {
                        fileName: "[project]/app/video/page.tsx",
                        lineNumber: 998,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "grid justify-center w-full h-full ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                style: {
                                    display: 'none',
                                    transform: 'scaleX(1)'
                                },
                                width: "640",
                                height: "480",
                                playsInline: true
                            }, void 0, false, {
                                fileName: "[project]/app/video/page.tsx",
                                lineNumber: 1000,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                width: "640",
                                height: "480",
                                style: {
                                    transform: 'scaleX(1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/video/page.tsx",
                                lineNumber: 1007,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/video/page.tsx",
                        lineNumber: 999,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: infoList,
                        id: "infoList",
                        onWheel: scrollInfoList
                    }, void 0, false, {
                        fileName: "[project]/app/video/page.tsx",
                        lineNumber: 1016,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "listenButton",
                        ref: listenButton,
                        onClick: toggleListen,
                        children: "Listen"
                    }, void 0, false, {
                        fileName: "[project]/app/video/page.tsx",
                        lineNumber: 1017,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/video/page.tsx",
                lineNumber: 997,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91cde41f._.js.map