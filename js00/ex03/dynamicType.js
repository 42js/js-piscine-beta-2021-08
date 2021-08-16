/* ************************************************************************** */
/*  */
/* :::      :::::::: */
/* dynamicType.js                                     :+:      :+:    :+: */
/* +:+ +:+         +:+ */
/* By: nkim <nkim@student.42seoul.kr>             +#+  +:+       +#+ */
/* +#+#+#+#+#+   +#+ */
/* Created: 2021/08/16 23:19:47 by nkim              #+#    #+# */
/* Updated: 2021/08/16 23:19:49 by nkim             ###   ########.fr */
/*  */
/* ************************************************************************** */

const dynamicType = {
    init_val: undefined,
    ch_val: undefined,
    put: (init_val) => {
        if (typeof init_val === "number") 
            this.init_val = init_val;
        else 
            console.log("WrongInputError: input type is not a Number");
        }
    ,
    change: (type) => {
        if (type === "String") {
            ch_val = "\"" + String(this.init_val) + "\"";
        } else if (type === "Number") {
            ch_val = Number(this.init_val);
        } else if (type === "Array") {
            ch_val = [this.init_val];
        } else if (type === "Object") {
            ch_val = Object(this.init_val);
        }
    },
    printType: () => {
        console.log(ch_val);
    }
}