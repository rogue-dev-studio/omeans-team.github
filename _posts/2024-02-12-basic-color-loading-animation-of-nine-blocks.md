---
layout: post
title:  "Basic animation nine block"
date:   2024-02-12 09:41:09
author: Aris Hadisopiyan
# categories: Personal
# categories: [Tech, Personal]
categories: [CSS, HTML, Animation]
---

[![Watch the video](https://raw.githubusercontent.com/omeans-team/img/main/previ.png)](https://youtu.be/de0j_FO4vwE){:target="_blank"} 

It is ideal for Open Source projects to publish under [Repository](https://github.com/omeans-team/omeans-color-loading-animation-of-nine-blocks){:target="_blank"} . [Check Demo](https://youtu.be/de0j_FO4vwE){:target="_blank"}

<!-- tag -->
<!-- {% for post in site.categories.Personal %}
 <li><a href="{{ post.url }}">{{ post.categories }}</a></li>
{% endfor %} -->

 
<div class="post-categories">
  {% if post %}
    {% assign categories = post.categories %}
  {% else %}
    {% assign categories = page.categories %}
  {% endif %}
  {% for category in categories %}
  <a href="{{site.baseurl}}/categories/{{category|slugize}}">{{category}}</a>
  {% unless forloop.last %}&nbsp;{% endunless %}
  {% endfor %}
</div>