---
layout: post
title:  "Basic animation nine block"
date:   2024-02-12 09:00:00
author: Aris Hadisopiyan
categories: [css,html,animation]
---

[![Watch the video](https://raw.githubusercontent.com/omeans-team/public_assets/master/assets/img/project/other/animasi_loading/prev.png)](https://youtu.be/de0j_FO4vwE){:target="_blank"} 

It is ideal for Open Source projects to publish under [Repository](https://github.com/omeans-team/omeans-color-loading-animation-of-nine-blocks){:target="_blank"} . [Check Demo](https://youtu.be/de0j_FO4vwE){:target="_blank"}

<!-- tag -->
<!-- {% for post in site.categories.Personal %}
 <li><a href="{{ post.url }}">{{ post.categories }}</a></li>
{% endfor %} -->

 <!-- <img src="https://img.shields.io/badge/any%20text-you%20like-blue?logo=medium&logoColor=white" alt="omeans-team" />
 <img src="https://img.shields.io/badge/any%20text-you%20like-blue?logo=linkedin&logoColor=white" alt="omeans-team" />
 <img src="https://img.shields.io/badge/%20-you%20like-blue?logo=linkedin&logoColor=white" alt="omeans-team" />
 <img src="https://img.shields.io/badge/any%20text-you%20like-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="omeans-team" /> -->
<div class="post-categories">
  {% if post %}
    {% assign categories = post.categories %}
  {% else %}
    {% assign categories = page.categories %}
  {% endif %}
  {% for category in categories %}
  <a href="{{site.baseurl}}/categories/{{category|slugize}}">
 <img src="https://img.shields.io/badge/{{category}}-{% if category == "css" %}{{ site.categories.css | size }}{% elsif category == "html" %}{{ site.categories.html | size }}{% elsif category == "animation" %}{{ site.categories.animation | size }}{% else %}{{ 0 }}{% endif %}-blue?logo={% if category == "css" %}{{ "css3" }}{% elsif category == "html" %}{{ "html5" }}{% elsif category == "animation" %}{{ "animation" }}{% else %}{{ "" }}{% endif %}&logoColor=white"/>
  </a>
  <!-- <a href="{{site.baseurl}}/categories/{{category|slugize}}">{{category}}</a> -->
  <!-- <a href="{{site.baseurl}}/categories/{{category|slugize}}">{{category}}
    {% if category == "css" %}
      ({{ site.categories.css | size }})
    {% elsif category == "html" %}
      ({{ site.categories.html | size }})
    {% else %}
      ({{ 0 }})
    {% endif %}
  </a> -->
  <!-- ({{ site.categories.animation | size }}) -->
  {% unless forloop.last %}&nbsp;{% endunless %}
  {% endfor %}
  
</div>