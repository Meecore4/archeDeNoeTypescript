interface AnimauxInterface{
    pattes : number;
    couleur : string;
}


class Animals implements AnimauxInterface{
    pattes : number;
    couleur: string;

    constructor(pattes : number, couleur : string){
        this.pattes = pattes;
        this.couleur = couleur;
    }
}


class Cat extends Animals {

}

class ChatEuropeen extends Cat{

}

class ChatChartreux extends Cat{

}




class Dog extends Animals{

}

class ChienTerreNeuve extends Dog{

}

class ChienMoonMoon extends Dog{

}




class Bird extends Animals{

}

class Mesange extends Bird{

}

class Merle extends Bird{

}




class Fish extends Animals{

}
class Thon extends Fish{

}

class Requin extends Fish{

}



class Asticot extends Animals{

}




// ACTIONS //

function photo(animal: Animals){
    console.log("Photo des neufs animaux");
}

function chatQuiMiaule(chat: Cat){
    console.log("Miaouuuu");
}

function aboiement(chien: Dog){
    console.log("Waaaff");
}

function voler(oiseau: Bird){
    console.log("vole vole petit oiseau");
}

function nager(poisson: Fish){
    console.log("les petits poissons nagent nagent comme les gros");
}

function caresserLesAnimauxAQuatrePattes(animal: Animals){
    if(animal.pattes === 4){
      console.log("Câlin mes amis à 4 pattes :D");  
    }
    else{
        console.log('Pas de caresse');
    }
    
}

function nourrir(animal : Animals){
    if(animal.couleur === "noir"){
        console.log("Mange mange !");
    }else{
        console.log("Ne mange pas");
    }
    
}

const rex = new ChienTerreNeuve(4, "noir");

caresserLesAnimauxAQuatrePattes(rex);
nourrir(rex);
