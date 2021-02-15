<template>

    <v-text-field
    outlined
    label="password"
    v-model="password"
    >

    </v-text-field>

  
</template>
   

<script>
export default {
props : {
    password: {
      type: String,
      default: 'text'
    },
    type: {
      type: String,
      default: 'text'
    },
    
    size: {
      type: String,
      default: '32'
    },
    characters: {
      type: String,
      default: 'a-z,A-Z,0-9,#'
    },
    placeholder: {
      type: String,
      default: 'Password'
    },
    auto: [String, Boolean],
    value: ''
  },
  data() {
    return {
      
    }
  },
  mounted: function() {
    if(this.auto == 'true' || this.auto == 1) {
      this.generate();
    }
  },
  methods: {
    
    generate () {
      let charactersArray = this.characters.split(',');  
      let CharacterSet = '';
      let password = '';
      
      if( charactersArray.indexOf('a-z') >= 0) {
        CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
      }
      if( charactersArray.indexOf('A-Z') >= 0) {
        CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      if( charactersArray.indexOf('0-9') >= 0) {
        CharacterSet += '0123456789';
      }
      if( charactersArray.indexOf('#') >= 0) {
        CharacterSet += '![]{}()%&*$#^<>~@|';
      }
      for(let i=0; i < this.size; i++) {
        password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
      }
      this.password = password;
    }
    
}
}
</script>