const questions = [

"위험한 상황에서도 침착하게 행동할 수 있다.",
"체력 활동을 좋아한다.",
"사람을 돕는 일에 보람을 느낀다.",
"규칙과 질서를 중요하게 생각한다.",
"위기 상황에서 빠른 판단을 내릴 수 있다.",
"국가와 사회에 기여하고 싶다.",
"책임감이 강한 편이다.",
"팀워크를 중요하게 생각한다.",
"응급상황에 관심이 있다.",
"리더십이 있다고 생각한다.",

"체력 단련을 꾸준히 할 자신이 있다.",
"범죄 예방에 관심이 있다.",
"재난 구조 활동에 관심이 있다.",
"군사 분야에 관심이 있다.",
"응급의료 분야에 관심이 있다.",
"국가 안보에 관심이 있다.",
"교정 및 재활 업무에 관심이 있다.",
"해양 구조 활동에 관심이 있다.",
"도전적인 일을 선호한다.",
"공무원 직업에 관심이 있다."

];

let current = 0;

let jobs = {
    firefighter: 0,
    police: 0,
    soldier: 0,
    paramedic: 0,
    intelligence: 0,
    correction: 0,
    coastguard: 0
};

const questionEl = document.getElementById("question");
const progressEl = document.getElementById("progress");

function loadQuestion(){

    questionEl.innerText = questions[current];

    progressEl.innerText =
    `${current + 1} / ${questions.length}`;
}

function answer(value){

    if(value){

        switch(current){

            case 0:
                jobs.firefighter += 3;
                jobs.police += 2;
                break;

            case 1:
                jobs.firefighter += 2;
                jobs.soldier += 3;
                jobs.coastguard += 2;
                break;

            case 2:
                jobs.firefighter += 2;
                jobs.paramedic += 3;
                break;

            case 3:
                jobs.police += 3;
                jobs.correction += 3;
                break;

            case 4:
                jobs.firefighter += 2;
                jobs.police += 2;
                break;

            case 5:
                jobs.soldier += 2;
                jobs.police += 2;
                jobs.firefighter += 2;
                break;

            case 6:
                jobs.police += 2;
                jobs.correction += 2;
                break;

            case 7:
                jobs.firefighter += 1;
                jobs.police += 1;
                jobs.soldier += 1;
                break;

            case 8:
                jobs.paramedic += 5;
                jobs.firefighter += 2;
                break;

            case 9:
                jobs.police += 2;
                jobs.soldier += 2;
                break;

            case 10:
                jobs.soldier += 3;
                jobs.firefighter += 2;
                break;

            case 11:
                jobs.police += 5;
                break;

            case 12:
                jobs.firefighter += 5;
                break;

            case 13:
                jobs.soldier += 5;
                break;

            case 14:
                jobs.paramedic += 5;
                break;

            case 15:
                jobs.intelligence += 5;
                jobs.soldier += 2;
                break;

            case 16:
                jobs.correction += 5;
                break;

            case 17:
                jobs.coastguard += 5;
                break;

            case 18:
                jobs.soldier += 2;
                jobs.police += 2;
                break;

            case 19:
                jobs.firefighter += 1;
                jobs.police += 1;
                jobs.correction += 1;
                break;
        }
    }

    current++;

    if(current < questions.length){
        loadQuestion();
    }else{
        showResult();
    }
}

function showResult(){

    document.getElementById("testCard").style.display = "none";
    document.getElementById("resultCard").style.display = "block";

    let results = [

        ["🚒 소방관", jobs.firefighter],
        ["🚓 경찰관", jobs.police],
        ["⚔️ 군인", jobs.soldier],
        ["🚑 응급구조사", jobs.paramedic],
        ["🕵️ 정보기관", jobs.intelligence],
        ["🔒 교정직", jobs.correction],
        ["⚓ 해양경찰", jobs.coastguard]

    ];

    results.sort((a,b)=>b[1]-a[1]);

    let description = "";

switch(results[0][0]){

    case "🚒 소방관":
        description =
        "당신은 책임감이 강하고 위기 상황에서 침착하게 대처하는 능력이 뛰어나 소방관 직무와 잘 어울립니다.";
        break;

    case "🚓 경찰관":
        description =
        "당신은 정의감과 규칙 의식이 강하며 시민의 안전을 지키는 경찰관 직무에 적합합니다.";
        break;

    case "⚔️ 군인":
        description =
        "당신은 국가 안보와 조직 생활에 대한 관심이 높고 강한 체력과 도전 정신을 갖추고 있습니다.";
        break;

    case "🚑 응급구조사":
        description =
        "당신은 타인을 돕는 마음이 강하고 응급상황에서 신속하게 대응할 수 있는 자질을 갖추고 있습니다.";
        break;

    case "🕵️ 정보기관":
        description =
        "당신은 분석력과 국가 안보에 대한 관심이 높으며 정보 수집 및 판단 업무에 적합합니다.";
        break;

    case "🔒 교정직":
        description =
        "당신은 책임감과 인내심이 뛰어나며 수용자의 교정과 사회 복귀를 지원하는 직무에 적합합니다.";
        break;

    case "⚓ 해양경찰":
        description =
        "당신은 해양 안전과 구조 활동에 관심이 높으며 현장 대응 능력을 갖춘 인재입니다.";
        break;
}

let html = `
<h3 style="color:#ef4444;">
🥇 추천 직업 : ${results[0][0]}
</h3>

<p style="
margin-top:15px;
margin-bottom:30px;
line-height:1.8;
font-size:18px;
">
${description}
</p>
`;

    results.forEach(job=>{

    let percent = Math.round((job[1] / 15) * 100);

    if(percent > 100){
        percent = 100;
    }

    html += `${job[0]} 적합도 : ${percent}%<br><br>`;
});

    document.getElementById("resultText").innerHTML = html;
}
function restartTest(){

    current = 0;

    jobs = {
        firefighter: 0,
        police: 0,
        soldier: 0,
        paramedic: 0,
        intelligence: 0,
        correction: 0,
        coastguard: 0
    };

    document.getElementById("resultCard").style.display = "none";

    document.getElementById("testCard").style.display = "block";

    loadQuestion();
}
loadQuestion();