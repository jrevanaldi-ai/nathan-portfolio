---
title: 'Inventory Management System'
status: 1
description: 'A prototype for the inventory system in Astralune MMORPG.'
date: 2024-07-25T16:30:00.000Z
language: en
tags:
  - prototype
  - game-development
  - inventory
  - game-systems
linkDemo: https://astralune-inventory-prototype.com
code: |-
  const filterItems = (playerInventory, criteria) => {
    return playerInventory.items.filter(item => {
      return Object.keys(criteria).every(key => 
        item[key].toString().toLowerCase().includes(criteria[key].toLowerCase())
      );
    });
  };
---
