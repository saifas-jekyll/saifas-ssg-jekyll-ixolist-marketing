---
layout: items
title: Items page
permalink: /items/
---
{% for item_hash in site.data.items %}
{% assign item = item_hash[1] %}
  {% include item.html %}
{% endfor %}