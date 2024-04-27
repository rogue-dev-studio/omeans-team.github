---
layout: contents
title:  "How To Use Icon shields.io"
date:   2021-12-15 11:00:00
author: Aris Hadisopiyan
categories: [icon,tutorial,shieldsdotio]
---
<!--
<a href="https://raw.githubusercontent.com/omeans-team/omeans-team/master/license.txt"><img src="https://img.shields.io/github/license/jaid/action-npm-install?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/omeans-team"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor omeans-team"/></a>  
<a href="https://actions-badge.atrox.dev/omeans-team/omeans-team/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Faction-npm-install%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/action-npm-install/commits"><img src="https://img.shields.io/github/commits-since/jaid/action-npm-install/v1.2.4?style=flat-square&logo=github" alt="Commits since v1.2.4"/></a> <a href="https://github.com/jaid/action-npm-install/commits"><img src="https://img.shields.io/github/last-commit/jaid/action-npm-install?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/action-npm-install/issues"><img src="https://img.shields.io/github/issues/jaid/action-npm-install?style=flat-square&logo=github" alt="Issues"/></a>  

**GitHub Action for installing Node dependencies from package.json with the correct package manager automatically selected.**


This is usually needed to prepare for other steps in a GitHub Actions workflow.
-->

<!-- Intro  -->
<h3 align="center">
    <samp>&gt; Hey There!, I am
            <b><a target="_blank" href="https://omeans-team.github.io">Omeans Team</a></b>
    </samp>
</h3>


<p align="center"> 
  <samp>
    <a href="https://www.google.com/search?q=omeans_team">「 Google Me 」</a>
    <br>
    「 I am a full stack web application developer from <b>Indonesia</b> 」
    <br>
    <br>
  </samp>
</p>

<p align="center" style="display: block ruby;">
 <a href="https://omeans-team.github.io" target="blank">
  <img src="https://img.shields.io/badge/Website-DC143C?style=for-the-badge&logo=medium&logoColor=white" alt="omeans-team" />
 </a>
 <a href="https://linkedin.com/in/arishadisopiyan" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="omeans-team"/>
 </a>
 <!-- <a href="https://dev.to/omeans-team" target="_blank">
  <img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" alt="omeans-team" />
 </a> -->
 <a href="https://twitter.com/omeans_team" target="_blank">
  <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
 </a>
 <a href="https://instagram.com/omeans_team" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-fe4164?style=for-the-badge&logo=instagram&logoColor=white" alt="omeans-team" />
 </a> 
 <a href="https://facebook.com/omeans-team.dev" target="_blank">
  <img src="https://img.shields.io/badge/Facebook-20BEFF?&style=for-the-badge&logo=facebook&logoColor=white" alt="omeans-team"  />
  </a> 
</p>
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-me">About me</a>
    </li>
    <li>
      <a href="#how-to-ask-or-request">How To Ask or Request</a>
      <ul>
        <li><a href="#1-for-omeans-teamgithubio">For omeans-team.github.io</a></li>
        <li><a href="#2-for-anything">For Anything</a></li>
      </ul>
    </li>
    <li><a href="#use-to-code">Use To Code</a></li>
    <li><a href="#top-open-source">Top Open Source</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- About Section -->
 # About me
 
<p>
 <!-- <img align="right" width="350" src="/assets/programmer.gif" alt="Coding gif" /> -->
  
 📧 &emsp; How to use icon: <a href="https://simpleicons.org/?q=" target="_blank">click here</a><br/><br/>
 ✌️ &emsp; Enjoy to do programming and sharing knowledge <br/><br/>
 ❤️ &emsp; Love to writing code and learning new features<br/><br/>
 📧 &emsp; Reach me anytime: [comment in here](https://github.com/omeans-team/omeans-team/issues/1)<br/><br/>
 💬 &emsp; Ask or request me about the github page [omeans-team.github.io](https://omeans-team.github.io/). Click this [link](https://github.com/omeans-team/omeans-team.github.io/issues)

</p>

<br>

categories: [icon,tutorial,shieldsdotio]
<div class="post-categories">
  {% if post %}
    {% assign categories = post.categories %}
  {% else %}
    {% assign categories = page.categories %}
  {% endif %}
  {% for category in categories %}
  <!-- <a href="{{site.baseurl}}/categories/{{category|slugize}}">{{category}}</a> -->
  <a href="{{site.baseurl}}/categories/{{category|slugize}}">
 <img src="https://img.shields.io/badge/{{category}}-{% if category == "icon" %}{{ site.categories.icon | size }}{% elsif category == "tutorial" %}{{ site.categories.tutorial | size }}{% elsif category == "shieldsdotio" %}{{ site.categories.shieldsdotio | size }}{% else %}{{ 0 }}{% endif %}-blue?logo={% if category == "icon" %}{{ "icon" }}{% elsif category == "tutorial" %}{{ "tutorial" }}{% elsif category == "shieldsdotio" %}{{ "shieldsdotio" }}{% else %}{{ "" }}{% endif %}&logoColor=white"/>
  </a>
  {% unless forloop.last %}&nbsp;{% endunless %}
  {% endfor %}
</div>