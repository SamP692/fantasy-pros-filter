# Fantasy Pros Cheat Sheet Filter

This repo creates a local chrome extension that augments Fantasy Pros' cheat sheet expert filtering.

When the extension is installed, the user will be able to more granularly filter the experts they want contributing
to the cheat sheet rankings.

- [Supported Features](#supported-features)
  - [Current Year Expert Ranks](#current-year-expert-ranks)
  - [Prior Year Expert Ranks](#prior-year-expert-ranks)
  - [Days Old](#days-old)
  - [Rookies Only](#rookies-only)
- [Contributing](#contributing)
  - [Tools](#tools)
    - [Node](#node)
    - [TypeScript](#typescript)
    - [RequireJS and AMD Modules](#requirejs-and-amd-modules)
  - [Building the Project](#building-the-project)
    - [Executing the Build](#executing-the-build)
    - [Shell Script Permissions Issues](#shell-script-permissions-issues)
    - [Convenience Tip](#convenience-tip)
- [Polishing](#polishing)
- [Edge Cases](#edge-cases)

## Supported Features

This extension allows the user to programmatically select a list experts so that they don't have to do it by hand.

For instance, perhaps it's Week 3 of the NFL season. The user may want to see any experts who were among the top 50 most accurate
for the entirety of the prior season, but additionally include the top 10 most accurate experts from the current season. This
can be annoying to do by hand.

**Limitation Note:** At the moment, this extension only supports inclusive selections when accuracy ranking thresholds are set for both the current
year, as well as the prior year. This means that if the user includes the top 50 ranked experts from the prior year, for instance, an expert
falling into that group will be selected, even if the user selected, for instance, the top 20 experts from teh current year and the expert in
question falls outside of that group.

### Current Year Expert Ranks

The user can select an accuracy rank for the current year that will include all experts who are that good or better.

### Prior Year Expert Ranks

The user can select an accuracy rank for the prior year that will include all epxerts who are that good or better.

### Days Old

The user can select how many days old an expert's opinion can be for that expert to be included in the selection.

**Example:** A user may want to see what experts think about players for the remainder of the season after a particularly injury has occured.
In this case, they'll likely want to ensure no expert opinions are included that were registered with Fantasy Pros prior to today, given that
those opinions likely don't take this particular injury into account.

### Rookies Only

The user can select whether or not they only want "rookie" experts to be included for the "Current Year Expert Rank" selection. This means that
when evaluating how an expert has performed this year, the extension will ignore experts who registered opinions with Fantasy Pros in the prior year.

**Note:** Because this extension only supports inclusive selections, any expert who acheives the prior year rank threshold set by the user,
regardless of how they've performed in the current year, will still be included. That's to say, won't remove any experts who are included in
the prior year group, it'll simply ignore current year experts who don't meet the prior year threshold.

## Contributing

### Tools

#### Node

This project requires your system to have the Node.js runtime available. If you don't have it, head over to the [installer]<https://nodejs.org/en/>

#### TypeScript

This project uses TypeScript for all functional code and is configured to require strict typing. Additionally, the project requires the
TypeScript compiler in order to prepare functional code for deployment.

If you don't have TypeScript on your machine, install it with:
`npm install --global typescript`

#### RequireJS and AMD Modules

For simplicity, this project accesses the DOM using "vanilla TS" and to keep things relatively painless, it uses AMD modules and RequireJS to compile each
project into a simple single-file application.

### Building the Project

You'll notice this project does not have a `package.json` file. This package only uses RequireJS as a runtime dependency and subsequently really has no real need for a file
dedicated to Node.js declarations.

Moreover, because the project uses a raw `index.html` file which needs to be included in the final extension package, some
external tooling was needed. Subsequently, this project only uses a bash script to do everything it needs to do to execute the build processes.

#### Executing the Build

Simply run `sh build.sh` in order to trigger the build. You'll see some rudimentary printouts describing the processes being executed by the build script.

#### Shell Script Permissions Issues

If you get a `permissions denied` response the first time you attempt to run the build, simply execute `chmod +x ./build.sh` while in the project directory.

#### Convenience Tip

You can clean up the build command by adding the following to your bash or zshell profile:

```sh
function run() {
    sh $1.sh
}
```

At this point you can simply execute `run build` from your terminal, while within the project directory.

## Polishing

[] Add URL checking to popup
    [] Don't show filter if not on right page
[] Validate filter configuration on script side
[] Send responses from content script to popup
    [] Send confirmation of receipt
    [] Trigger loading indication in UI upon confirmation of receipt
    [] Throw error if loading process takes too long
    [] Send confirmation of success
    [] Send errors
    [] Complete loading indication if success message is received
    [] Display errors in UI
[] Remove semantic-ui for performance reasons
[] Cache last configuration and load upon opening popup
[x] Stop opening expert modal

## Edge Cases

[x] Expert modal is not sorted by published at
[] ~~Filter popup is opened while modal is already open~~
    [] ~~Skip step to open modal~~
