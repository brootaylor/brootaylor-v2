# Abstracts

The `abstracts/` folder gathers all the Sass tools and helpers used across the project. Every **global** variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass and CSS helpers.

## Design tokens

The `abstracts/` folder also contains the *generated* `tokens.scss` file. This Sass file is created from the `tokens.json` file in the `src/_data/` directory.

The idea behind this is to use a '[design token workflow](https://www.smashingmagazine.com/2019/11/smashing-podcast-episode-3/)' to supply key website values (eg. brand colours, font stacks, sizes etc.) to the various development teams (eg. iOS, Android and Web). The shared format is agnostic (eg. JSON) - that can then be converted to their own native coding language.

