/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   helloSomeone.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: nkim <nkim@student.42seoul.kr>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/08/16 19:05:26 by nkim              #+#    #+#             */
/*   Updated: 2021/08/16 19:32:33 by nkim             ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const helloSomeone = (someOne) => {
	if (typeof(someOne) === "string") {
		if (someOne === "")
			console.log("Who are you?");
		else
			console.log(`Hello ${someOne}!`);
	} else if (typeof(someOne) === "number") {	
		if (isNaN(someOne))
			console.log("Age is just a number");
		else if (someOne <= 0)
			console.log("I am Benjamin Button!");
		else
			console.log(`My age is ${someOne}`);
	} else if (typeof(someOne) === "undefined")
		console.log("Nobody can define me!");
	else if (someOne === null)
		console.log("I am null and void");
}

export default helloSomeone;