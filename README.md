	PUT /consumer_blog
	{
	  "settings": {
	    "analysis": {
	      "analyzer": {
	        "edgengramAnalyzer": {
	          "tokenizer": "edge_ngram_tokenizer",
	          "filter": [
	            "uppercase"
	          ]
	        },
	        "nickNameSynonym": {
	          "tokenizer": "standard",
	          "filter": [
	            "nickNameSynonym","long_names","uppercase"
	          ]
	        },
	        "dbl_metaphone": {
	          "tokenizer": "standard",
	          "filter": "dbl_metaphone"
	        },
	        "uax_url_email": {
	          "type": "custom",
	          "tokenizer": "uax_url_email"
	        }
	      },
	      "tokenizer": {
	        "edge_ngram_tokenizer": {
	          "type": "edge_ngram",
	          "min_gram": 2,
	          "max_gram": 10,
	          "token_chars": [
	            "letter",
	            "digit"
	          ]
	        }
	      },
	      "filter": {
	        "dbl_metaphone": {
	          "type": "phonetic",
	          "encoder": "double_metaphone"
	        },
	        "nickNameSynonym": {
	          "type": "synonym",
	          "synonyms_path": "analysis/nickNameSynonym.txt"
	        },
	        "long_names": {
	          "type": "pattern_capture",
	          "patterns": ["(\\w{1,10})"]
	        }
	      }
	    }
	  }
	}
