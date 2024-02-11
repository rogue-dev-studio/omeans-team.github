---
layout: post
title:  "Loading animation nine block"
date:   2024-02-10 09:41:09
author: Aris Hadisopiyan
# categories: Personal
# categories: [Tech, Personal]
categories: [CSS, HTML, ANIMATION]
tags: [CSS, HTML, ANIMATION]
---

[![Watch the video](https://raw.githubusercontent.com/omeans-team/img/main/previ.png)](https://youtu.be/de0j_FO4vwE){:target="_blank"} 

It is ideal for Open Source projects to publish under [Repository](https://github.com/omeans-team/omeans-color-loading-animation-of-nine-blocks){:target="_blank"} . [Check Demo](https://youtu.be/de0j_FO4vwE){:target="_blank"}

<!-- tag -->
<!-- {% for post in site.categories.Personal %}
 <li><a href="{{ post.url }}">{{ post.categories }}</a></li>
{% endfor %} -->

 
<hr />
<div class="post-categories">
    <span><b>Category : </b></span>
    {% for category in site.categories %}
        {% capture category_slug %}{{ category | first }}{% endcapture %}
        {% for c_slug in category_slug %}
            {% if c_slug == page.categories %}
                <button class="btn btn-sm btn-primary btn-raised">{{ c_slug }}</button>
            {% else %}
                <a href="{{ site.baseurl }}/categories/{{ c_slug }}" class="btn btn-sm btn-default btn-raised">{{ c_slug }}</a>
                <!-- <a href="{{ site.baseurl }}/categories/{{ c_slug }}" class="btn btn-sm btn-default btn-raised">{{ c_slug }}</a> -->
            {% endif %}
        {% endfor %}
    {% endfor %}
    <!-- {% if post %}
        {% assign categories = post.categories %}
    {% else %}
    {% assign categories = page.categories %}
    {% endif %}
    {% for category in categories %}
        <a href="{{site.baseurl}}/categories/#{{category|slugize}}">{{category}}</a>
        {% unless forloop.last %}&nbsp;,&nbsp;{% endunless %}
    {% endfor %} -->
    
</div>

<!-- {% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %} -->

<!-- {% for tag in post.tags %}
    { % assign tag_slug = tag | slugify: "raw"  % }
    <a class="tag-link" href='{{ site.baseurl | append : "/tags/" | append : tag_slug | append : "/"   }}' rel="category tag">#{{ tag }}</a>
{% endfor %} -->