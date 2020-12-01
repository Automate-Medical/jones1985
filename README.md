# jones1985

A TypeScript implementation of the Jones (1985) equations for predicted VO2 max in cycle-ergometer exercise testing [Normal Standards for an Incremental Progressive Cycle Ergometer Test](https://pubmed.ncbi.nlm.nih.gov/3923878/) (doi:10.1164/arrd.1985.131.5.700)

## Background

> One hundred healthy subjects (50 male and 50 female), selected to provide an even distribution of age (15 to 71 yr) and height (165 to 194 cm in males and 152 to 176 cm in females), underwent a progressively incremental (100 kpm/min each min) exercise test to a symptom-limited maximum.

In 2001 the [ATS recommended continuing use](https://www.atsjournals.org/doi/full/10.1164/rccm.167.2.211) of the Jones (1985) and [Hansen/Wasserman (1985)](https://www.github.com/Automate-Medical/hansen1984) reference values:

> In the interim and until a new set of “optimal” reference values are available, the committee considers that the two most widely used sets of references values—Jones and coworkers (427) (Table 14) and Hansen and coworkers (235) (Table 15)—should continue to be used clinically.

This module implements the reference values as they originally appeared in N. L. Jones, L. Makrides, C. Hitchcock, T. Chypchar, and N. McCartney, “Normal standards for an incremental progressive
cycle ergometer test,” American Review of Respiratory Disease, vol. 131, no. 5, pp. 700–708, 1985. (doi:10.1164/arrd.1985.131.5.700) and later in the 2001 ATS recommendation.

## Installation

`npm install @automate-medical/jones1985`

Please note: 

* `@automate-medical/jones1985` is packaged as a **native ES module** only. Your runtime must support native modules (i.e. Node >= 13). 
* `@automate-medical/jones1985` is written in **TypeScript**, declarations are packaged with the build.

## Usage

This module exports one function `vo2Max` accepting age, sex (Male or Female), and height (in cm) which returns a number denominated in L/min.

```
import { vo2Peak } from '@automate-medical/jones1985';

const predicted = vo2Max({ age: 30, sex: "Male", height: 165 });
console.log(predicted);
```

## Notice

This repository is provided for educational purposes only, it has not been reviewed and cannot be used in a clinical practice. The software is provided "as is", without any express or implied warranty, and no implication of fitness for a particular use.
