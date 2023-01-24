const svgrepoCard = `

<svg width="500px" height="150" x="0" y="0" id="github-repo-card" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="descId">
  <style>
    .github-repo-card {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .header {
      font: 400 18px &apos;Segoe UI&apos;, Ubuntu, Sans-Serif;
      fill: #fff;
    }

    @supports(-moz-appearance: auto) {

      /* Selector detects Firefox */
      .header {
        font-size: 15.5px;
      }
    }

    .description {
      font: 400 13px &apos;Segoe UI&apos;, Ubuntu, Sans-Serif;
      fill: #9f9f9f;
    }

    .gray {
      font: 400 12px &apos;Segoe UI&apos;, Ubuntu, Sans-Serif;
      fill: #9f9f9f
    }

    .icon {
      fill: #f9f9f9
    }

    .icon:hover{
      fill: #3f2f6f
    }

    .badge {
      font: 600 11px &apos;Segoe UI&apos;, Ubuntu, Sans-Serif;
    }
  </style>
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(0)">
      <stop offset="5%" stop-color="#243949"/>
      <stop offset="95%" stop-color="##517fa4"/>
    </linearGradient>
  </defs>
  <rect class="github-repo-card" data-testid="card-bg" x="0" y="0" rx="4.5" stroke="#e4e2e2" fill="url('#myGradient')" stroke-opacity="1"/>
  <g class="github-repo-card" data-testid="card-title" transform="translate(25, 35)">
    <g transform="translate(0, 0)">
      <svg class="icon" x="0" y="-13" viewBox="0 0 16 16" version="1.1" width="16" height="16">
        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
      </svg>
    </g>
    <g transform="translate(25, 0)">
      <text x="0" y="0" class="header" data-testid="header">{title}</text>
    </g>
  </g>
  <g class="github-repo-card" data-testid="main-card-body" transform="translate(0, 55)">
    <text class="description" x="25" y="-5">
      <tspan dy="1.2em" x="25">{description}</tspan>
    </text>
    <g transform="translate(30, 45)">
      <g transform="translate(0, 0)">
        <g data-testid="primary-lang">
          <circle data-testid="lang-color" cx="0" cy="-5" r="6" fill="{lang_color}"/>
          <text data-testid="lang-name" class="gray" x="15">{language}</text>
        </g>
      </g>
      <g transform="translate(80.93125, 0)">
        <g transform="translate(0, 0)">
          <svg class="icon" y="-12" viewBox="0 0 16 16" version="1.1" width="16" height="16">
            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
          </svg>
        </g>
        <g transform="translate(20, 0)">
          <text data-testid="stargazers" class="gray">{starCount}</text>
        </g>
      </g>
      <g transform="translate(141.24375, 0)">
        <g transform="translate(0, 0)">
          <svg class="icon" y="-12" viewBox="0 0 16 16" version="1.1" width="16" height="16">
            <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
          </svg>
        </g>
        <g transform="translate(20, 0)">
          <text data-testid="forkcount" class="gray">{forksCount}</text>
        </g>
      </g>
    </g>
  </g>
</svg>

`

module.exports = svgrepoCard;