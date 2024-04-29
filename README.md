# CHALLENGE
## Research about flag mode: Dev, Prod, Common

### Mode Dev (development)

- Focused on compilation speed and ease of debugging
- No extensive optimizations are performed
- Source maps are included for easy debugging
- Warning and error messages may be included

### Mode Prod (production)

- Significant optimization in code, dead code removal minification
- Output is optimized for loading speed and production efficiency
- Source maps are usually disabled to reduce the size of the final packet
- Shorter file names are generated and comments are removed

### Mode Common (none o common)

- This mode disables any default settings provided by webpack
- Useful mode to set manually without any default optimization

# Configure dev, prod, common mode, and create npm scripts for dev and prod mode

"scripts": {
  "build:dev": "webpack --mode development",
  "build:prod": "webpack --mode production",
  "build:custom": "webpack --mode none"
}
