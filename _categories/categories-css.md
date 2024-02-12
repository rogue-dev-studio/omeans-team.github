---
layout: post
permalink: /categories/css/
title: Categories
---

  {% for post in site.categories["css"] %}
  {% unless forloop.last %}<hr>{% endunless %}
      {% unless forloop.first %}<hr>{% endunless %}
      <h1>
          <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </h1>
      <div>
        <p class="post_date">{{ post.date | date: "%B %e, %Y" }}{% if post.author %} • <a href="https://omeans-team.github.io">{{ post.author }}</a>{% endif %}</p>
      </div>
      <div class="entry">
        {{ post.excerpt }}
      </div>
      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">
          Read More
      </a>
  {% endfor %}


<div class="related">
  <h3>Related Posts</h3>
  {% assign firstCategory = page.categories | first %}
  {% assign relatedCount = 0 %}
  {% for related in site.categories[firstCategory] %}
      {% unless page.permalink == related.permalink %}
          {% assign relatedCount = relatedCount | plus: 1 %}
          <a href="{{related.permalink}}">{{ related.title }}</a>
      {% endunless %}

      {% if relatedCount == 3 %}
          {% break %}
      {% endif %}
  {% endfor %}
</div>