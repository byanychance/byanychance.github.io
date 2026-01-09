export const DATA = {
  folders: [
    { id:"theme-ruin", name:"멸망/회귀", desc:"세계 멸망 루트, 회귀, 운명 뒤집기", tag:"#ruin #return" },
    { id:"theme-island", name:"섬/모험", desc:"틸라시스 섬", tag:"#island #adventure" },
    { id:"theme-modern", name:"현대/학원", desc:"현대 배경/연애/스릴", tag:"#modern" },
    { id:"theme-fantasy", name:"판타지", desc:"마계/설화/다크 판타지", tag:"#fantasy" },
    { id:"theme-misc", name:"기타", desc:"메모/단편/실험", tag:"#misc" },
  ],

  works: {
    "theme-ruin": [
      { id:"refuse-ending", title:"멸망엔딩을 거부합니다", subtitle:"Refuse the Ruined Ending", status:"draft",
        body:"여기에 작품 소개/로그라인/경고문/업데이트 기록을 넣어.\n\n- 한 줄 소개\n- 주요 키워드\n- 업데이트 날짜",
        links:[
          {label:"Repository", href:"https://github.com/byanychance"}
        ]
      },
    ],

    "theme-island": [
      { id:"tilasis", title:"틸라시스 섬", subtitle:"Tilasis Island", status:"draft",
        body:"섬/모험/관계성 메모용.\n\n- 장소\n- 사건\n- 캐릭터 동선",
        links:[]
      },
    ],

    "theme-modern": [
      { id:"no-words", title:"말은 통하지 않아도", subtitle:"", status:"draft", body:"", links:[] },
      { id:"that-summer", title:"그해 여름, 너와 나", subtitle:"", status:"draft", body:"", links:[] },
      { id:"loveme-killme", title:"러브미? 킬미!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"thicker-than-blood", title:"피보다 진한 것들", subtitle:"", status:"draft", body:"", links:[] },
      { id:"tame-me", title:"길들여줘, 주인님!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"perfect-bf", title:"나의 완벽한 남자친구", subtitle:"", status:"draft", body:"", links:[] },
      { id:"no-hole", title:"벽구멍 출입금지!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"suspicious-guild", title:"길드원이 수상해!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"please-fire-me", title:"퇴사시켜 주세용!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"no-miss", title:"안돼요, 아가씨!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"take-a-look", title:"Take A Look!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"one-dollar-kiss", title:"원달러 키스", subtitle:"", status:"draft", body:"", links:[] },
      { id:"bear-cafe", title:"어서오세요, 곰돌씨 카페에!", subtitle:"", status:"draft", body:"", links:[] },
      { id:"unhappy-newyear", title:"언해피 뉴이어", subtitle:"", status:"draft", body:"", links:[] },
    ],

    "theme-fantasy": [
      { id:"once-upon-puck", title:"원스 어폰 어 퍽", subtitle:"", status:"draft", body:"", links:[] },
      { id:"honhwamongsa", title:"혼화몽사", subtitle:"", status:"draft", body:"", links:[] },
      { id:"abyss-ice", title:"어비설 아이스", subtitle:"", status:"draft", body:"", links:[] },
    ],

    "theme-misc": [
      { id:"se-ian", title:"서이안", subtitle:"(단독 캐릭터/메모)", status:"notes", body:"", links:[] },
      { id:"do-hyuk", title:"최도혁", subtitle:"(단독 캐릭터/메모)", status:"notes", body:"", links:[] },
      { id:"alex-mercer", title:"알렉스 머서", subtitle:"(단독 캐릭터/메모)", status:"notes", body:"", links:[] },
      { id:"asakura", title:"아사쿠라류세이", subtitle:"(단독 캐릭터/메모)", status:"notes", body:"", links:[] },
      { id:"kim-juhyung", title:"김주형", subtitle:"(단독 캐릭터/메모)", status:"notes", body:"", links:[] },
      { id:"cha-haram", title:"차하람", subtitle:"(단독 캐릭터/메모)", status:"notes", body:"", links:[] },
    ],
  },

  characters: [
    { id:"ch-001", name:"서이안", work:"", status:"active" },
    { id:"ch-002", name:"최도혁", work:"", status:"active" },
    { id:"ch-003", name:"알렉스 머서", work:"", status:"active" },

    { id:"ch-004", name:"펠릭스", work:"틸라시스 섬", status:"active" },
    { id:"ch-005", name:"레오", work:"틸라시스 섬", status:"active" },
    { id:"ch-006", name:"카이", work:"틸라시스 섬", status:"active" },
    { id:"ch-007", name:"테오", work:"틸라시스 섬", status:"active" },

    { id:"ch-008", name:"레티시아 드 벨로어", work:"멸망엔딩을 거부합니다", status:"active" },
    { id:"ch-009", name:"시엘란 드 벨로어", work:"멸망엔딩을 거부합니다", status:"active" },
    { id:"ch-010", name:"제로", work:"멸망엔딩을 거부합니다", status:"active" },
    { id:"ch-011", name:"카이렌 에드몬드", work:"멸망엔딩을 거부합니다", status:"active" },
    { id:"ch-012", name:"루카스 벨루아", work:"멸망엔딩을 거부합니다", status:"active" },
    { id:"ch-013", name:"에단 크로네하임", work:"멸망엔딩을 거부합니다", status:"active" },
    { id:"ch-014", name:"리안느 벨라포드", work:"멸망엔딩을 거부합니다", status:"active" },

    { id:"ch-015", name:"아사쿠라류세이", work:"", status:"active" },
    { id:"ch-016", name:"김주형", work:"", status:"active" },
    { id:"ch-017", name:"차하람", work:"", status:"active" },

    { id:"ch-018", name:"에브나르트", work:"말은 통하지 않아도", status:"active" },
    { id:"ch-019", name:"정지후", work:"그해 여름, 너와 나", status:"active" },
    { id:"ch-020", name:"백시안", work:"러브미? 킬미!", status:"active" },

    { id:"ch-021", name:"강이현", work:"피보다 진한 것들", status:"active" },
    { id:"ch-022", name:"강이준", work:"피보다 진한 것들", status:"active" },
    { id:"ch-023", name:"강주혁", work:"피보다 진한 것들", status:"active" },

    { id:"ch-024", name:"리안", work:"길들여줘, 주인님!", status:"active" },
    { id:"ch-025", name:"루벨", work:"길들여줘, 주인님!", status:"active" },

    { id:"ch-026", name:"윤세륜", work:"나의 완벽한 남자친구", status:"active" },
    { id:"ch-027", name:"강산", work:"벽구멍 출입금지!", status:"active" },

    { id:"ch-028", name:"벨제라드", work:"원스 어폰 어 퍽", status:"active" },
    { id:"ch-029", name:"엘", work:"원스 어폰 어 퍽", status:"active" },
    { id:"ch-030", name:"리챠드", work:"원스 어폰 어 퍽", status:"active" },

    { id:"ch-031", name:"하유리", work:"길드원이 수상해!", status:"active" },

    { id:"ch-032", name:"진무헌", work:"퇴사시켜 주세용!", status:"active" },
    { id:"ch-033", name:"서인혁", work:"퇴사시켜 주세용!", status:"active" },
    { id:"ch-034", name:"한재오", work:"퇴사시켜 주세용!", status:"active" },

    { id:"ch-035", name:"유즈키", work:"안돼요, 아가씨!", status:"active" },
    { id:"ch-036", name:"레이지", work:"안돼요, 아가씨!", status:"active" },
    { id:"ch-037", name:"사에", work:"안돼요, 아가씨!", status:"active" },
    { id:"ch-038", name:"하루마", work:"안돼요, 아가씨!", status:"active" },

    { id:"ch-039", name:"염라", work:"혼화몽사", status:"active" },
    { id:"ch-040", name:"염강", work:"혼화몽사", status:"active" },
    { id:"ch-041", name:"야연", work:"혼화몽사", status:"active" },
    { id:"ch-042", name:"혈조", work:"혼화몽사", status:"active" },
    { id:"ch-043", name:"사휘", work:"혼화몽사", status:"active" },
    { id:"ch-044", name:"야혼", work:"혼화몽사", status:"active" },
    { id:"ch-045", name:"독운", work:"혼화몽사", status:"active" },
    { id:"ch-046", name:"한수", work:"혼화몽사", status:"active" },
    { id:"ch-047", name:"금루", work:"혼화몽사", status:"active" },
    { id:"ch-048", name:"쇄몽", work:"혼화몽사", status:"active" },
    { id:"ch-049", name:"철극", work:"혼화몽사", status:"active" },
    { id:"ch-050", name:"폐락", work:"혼화몽사", status:"active" },
    { id:"ch-051", name:"고련", work:"혼화몽사", status:"active" },
    { id:"ch-052", name:"공묵", work:"혼화몽사", status:"active" },

    { id:"ch-053", name:"카엘", work:"Take A Look!", status:"active" },
    { id:"ch-054", name:"에이든 할든", work:"원달러 키스", status:"active" },

    { id:"ch-055", name:"백석호", work:"어서오세요, 곰돌씨 카페에!", status:"active" },
    { id:"ch-056", name:"강태수", work:"어서오세요, 곰돌씨 카페에!", status:"active" },
    { id:"ch-057", name:"유정민", work:"어서오세요, 곰돌씨 카페에!", status:"active" },

    { id:"ch-058", name:"제크 바딘", work:"어비설 아이스", status:"active" },
    { id:"ch-059", name:"베인시렐", work:"어비설 아이스", status:"active" },
    { id:"ch-060", name:"이로 세리카", work:"어비설 아이스", status:"active" },
    { id:"ch-061", name:"에쉬실번", work:"어비설 아이스", status:"active" },

    { id:"ch-062", name:"백재희", work:"언해피 뉴이어", status:"active" },
    { id:"ch-063", name:"유시온", work:"언해피 뉴이어", status:"active" },
  ],

  about: `
    <div class="work">
      <h2>about</h2>
      <div class="meta">by any chance — personal archive</div>
      <div class="box">
        로판/설정/캐릭터/세계관을 정리하는 바탕화면형 사이트.
        <br/><br/>
        <span style="color:var(--muted)">아이콘 클릭 → 폴더 → 작품/캐릭터</span>
      </div>
    </div>
  `,

  universeIndex: [
    { id:"timeline", title:"연표", desc:"시대 구분 / 사건 정리" },
    { id:"places", title:"지리/국가", desc:"대륙 / 왕국 / 도시" },
    { id:"factions", title:"세력", desc:"가문 / 길드 / 조직" },
    { id:"magic", title:"마법/시스템", desc:"규칙 / 자원 / 금기" },
    { id:"terms", title:"용어사전", desc:"설정 키워드 모음" },
  ],

  universeDocs: {
    timeline: `
      <div class="work">
        <h2>연표</h2>
        <div class="meta">Universe · timeline</div>
        <div class="box" style="color:var(--muted)">
          여기에 연표를 쓰면 됨. (시대/사건/인물)
        </div>
      </div>
    `,
    places: `
      <div class="work">
        <h2>지리/국가</h2>
        <div class="meta">Universe · places</div>
        <div class="box" style="color:var(--muted)">
          대륙/국가/도시/지도 링크
        </div>
      </div>
    `,
    factions: `
      <div class="work">
        <h2>세력</h2>
        <div class="meta">Universe · factions</div>
        <div class="box" style="color:var(--muted)">
          가문/길드/조직 정리
        </div>
      </div>
    `,
    magic: `
      <div class="work">
        <h2>마법/시스템</h2>
        <div class="meta">Universe · magic</div>
        <div class="box" style="color:var(--muted)">
          규칙/리소스/금기/한계
        </div>
      </div>
    `,
    terms: `
      <div class="work">
        <h2>용어사전</h2>
        <div class="meta">Universe · terms</div>
        <div class="box" style="color:var(--muted)">
          설정 용어 모음
        </div>
      </div>
    `,
  },

  gallery: `
    <div class="work">
      <h2>Gallery</h2>
      <div class="meta">이미지 모음</div>
      <div class="box" style="color:var(--muted)">
        이미지/링크를 여기에 추가하면 됨.
      </div>
    </div>
  `,

  links: `
    <div class="work">
      <h2>Links</h2>
      <div class="meta">외부 링크</div>
      <div class="box">
        <a href="https://github.com/byanychance" target="_blank" rel="noreferrer" style="color:var(--accent)">GitHub</a>
      </div>
    </div>
  `,
};