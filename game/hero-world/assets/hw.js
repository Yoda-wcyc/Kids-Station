(()=>{var Pg=Object.defineProperty;var yi=(n,t)=>{for(var e in t)Pg(n,e,{get:t[e],enumerable:!0})};var Hd=0,Ch=1,Gd=2;var uo=1,Wd=2,fr=3,ps=0,Rn=1,Jn=2,Ci=0,dr=1,Rh=2,Ih=3,Ph=4,Xd=5;var Ds=100,qd=101,Yd=102,$d=103,Zd=104,Jd=200,Kd=201,jd=202,Qd=203,Lh=204,Dh=205,tp=206,ep=207,np=208,ip=209,sp=210,rp=211,op=212,ap=213,lp=214,Pa=0,La=1,Da=2,or=3,Na=4,Ua=5,Fa=6,Oa=7,Nh=0,cp=1,hp=2,ci=0,Uh=1,Fh=2,Oh=3,Bh=4,zh=5,kh=6,Vh=7;var Hh=300,ms=301,Ns=302,dl=303,pl=304,fo=306,Ba=1e3,Si=1001,za=1002,un=1003,up=1004;var po=1005;var rn=1006,ml=1007;var gs=1008;var kn=1009,Gh=1010,Wh=1011,pr=1012,gl=1013,hi=1014,ui=1015,fi=1016,xl=1017,_l=1018,mr=1020,Xh=35902,qh=35899,Yh=1021,$h=1022,Kn=1023,wi=1026,xs=1027,Zh=1028,yl=1029,_s=1030,vl=1031;var Ml=1033,mo=33776,go=33777,xo=33778,_o=33779,bl=35840,Sl=35841,wl=35842,Al=35843,El=36196,Tl=37492,Cl=37496,Rl=37488,Il=37489,yo=37490,Pl=37491,Ll=37808,Dl=37809,Nl=37810,Ul=37811,Fl=37812,Ol=37813,Bl=37814,zl=37815,kl=37816,Vl=37817,Hl=37818,Gl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,$l=36495,Zl=36283,Jl=36284,vo=36285,Kl=36286;var Wr=2300,ka=2301,Ca=2302,Mh=2303,bh=2400,Sh=2401,wh=2402;var fp=3200;var Jh=0,dp=1,Gi="",sn="srgb",Xr="srgb-linear",qr="linear",Fe="srgb";var Ra=7680;var pp=519,mp=512,gp=513,xp=514,jl=515,_p=516,yp=517,Ql=518,vp=519,Kh=35044;var jh="300 es",li=2e3,Yr=2001;function Lg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Dg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mp(){let n=$r("canvas");return n.style.display="block",n}var md={},ar=null;function Zr(...n){let t="THREE."+n.shift();ar?ar("log",t,...n):console.log(t,...n)}function bp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ae(...n){n=bp(n);let t="THREE."+n.shift();if(ar)ar("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function le(...n){n=bp(n);let t="THREE."+n.shift();if(ar)ar("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rs(...n){let t=n.join(" ");t in md||(md[t]=!0,ae(...n))}function Sp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var wp={[Pa]:La,[Da]:Fa,[Na]:Oa,[or]:Ua,[La]:Pa,[Fa]:Da,[Oa]:Na,[Ua]:or},Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ia=Math.PI/180,Va=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function Ng(n,t){return(n%t+t)%t}function Kc(n,t,e){return(1-e)*n+e*t}function Mi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var iu=class iu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};iu.prototype.isVector2=!0;var _e=iu,Ei=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],p=i[s+2],d=i[s+3],m=r[o+0],f=r[o+1],_=r[o+2],y=r[o+3];if(d!==y||l!==m||c!==f||p!==_){let g=l*m+c*f+p*_+d*y;g<0&&(m=-m,f=-f,_=-_,y=-y,g=-g);let x=1-a;if(g<.9995){let C=Math.acos(g),L=Math.sin(C);x=Math.sin(x*C)/L,a=Math.sin(a*C)/L,l=l*x+m*a,c=c*x+f*a,p=p*x+_*a,d=d*x+y*a}else{l=l*x+m*a,c=c*x+f*a,p=p*x+_*a,d=d*x+y*a;let C=1/Math.sqrt(l*l+c*c+p*p+d*d);l*=C,c*=C,p*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],p=i[s+3],d=r[o],m=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+p*d+l*f-c*m,t[e+1]=l*_+p*m+c*d-a*f,t[e+2]=c*_+p*f+a*m-l*d,t[e+3]=p*_-a*d-l*m-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),p=a(s/2),d=a(r/2),m=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=m*p*d+c*f*_,this._y=c*f*d-m*p*_,this._z=c*p*_+m*f*d,this._w=c*p*d-m*f*_;break;case"YXZ":this._x=m*p*d+c*f*_,this._y=c*f*d-m*p*_,this._z=c*p*_-m*f*d,this._w=c*p*d+m*f*_;break;case"ZXY":this._x=m*p*d-c*f*_,this._y=c*f*d+m*p*_,this._z=c*p*_+m*f*d,this._w=c*p*d-m*f*_;break;case"ZYX":this._x=m*p*d-c*f*_,this._y=c*f*d+m*p*_,this._z=c*p*_-m*f*d,this._w=c*p*d+m*f*_;break;case"YZX":this._x=m*p*d+c*f*_,this._y=c*f*d+m*p*_,this._z=c*p*_-m*f*d,this._w=c*p*d-m*f*_;break;case"XZY":this._x=m*p*d-c*f*_,this._y=c*f*d-m*p*_,this._z=c*p*_+m*f*d,this._w=c*p*d+m*f*_;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],p=e[6],d=e[10],m=i+a+d;if(m>0){let f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(p-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(p-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+p)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,p=e._w;return this._x=i*p+o*a+s*c-r*l,this._y=s*p+o*l+r*a-i*c,this._z=r*p+o*c+i*l-s*a,this._w=o*p-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),p=Math.sin(c);l=Math.sin(l*c)/p,e=Math.sin(e*c)/p,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},su=class su{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),p=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*p,this.y=i+l*p+a*c-r*d,this.z=s+l*d+r*p-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jc.copy(this).projectOnVector(t),this.sub(jc)}reflect(t){return this.sub(jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};su.prototype.isVector3=!0;var j=su,jc=new j,gd=new Ei,ru=class ru{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let p=this.elements;return p[0]=t,p[1]=s,p[2]=a,p[3]=e,p[4]=r,p[5]=l,p[6]=i,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],p=i[4],d=i[7],m=i[2],f=i[5],_=i[8],y=s[0],g=s[3],x=s[6],C=s[1],L=s[4],T=s[7],S=s[2],R=s[5],N=s[8];return r[0]=o*y+a*C+l*S,r[3]=o*g+a*L+l*R,r[6]=o*x+a*T+l*N,r[1]=c*y+p*C+d*S,r[4]=c*g+p*L+d*R,r[7]=c*x+p*T+d*N,r[2]=m*y+f*C+_*S,r[5]=m*g+f*L+_*R,r[8]=m*x+f*T+_*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8];return e*o*p-e*a*c-i*r*p+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8],d=p*o-a*c,m=a*l-p*r,f=c*r-o*l,_=e*d+i*m+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(s*c-p*i)*y,t[2]=(a*i-s*o)*y,t[3]=m*y,t[4]=(p*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ru.prototype.isMatrix3=!0;var fe=ru,Qc=new fe,xd=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_d=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ug(){let n={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fe&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fe&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xr]:{primaries:t,whitePoint:i,transfer:qr,toXYZ:xd,fromXYZ:_d,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:i,transfer:Fe,toXYZ:xd,fromXYZ:_d,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}var be=Ug();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hs,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hs===void 0&&(Hs=$r("canvas")),Hs.width=t.width,Hs.height=t.height;let s=Hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$r("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fg=0,lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(th(s[o].image)):r.push(th(s[o]))}else r=th(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ha.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var Og=0,eh=new j,mn=class n extends Ai{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Si,s=Si,r=rn,o=gs,a=Kn,l=kn,c=n.DEFAULT_ANISOTROPY,p=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=rs(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ba:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ba:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Hh;mn.DEFAULT_ANISOTROPY=1;var ou=class ou{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],p=l[4],d=l[8],m=l[1],f=l[5],_=l[9],y=l[2],g=l[6],x=l[10];if(Math.abs(p-m)<.01&&Math.abs(d-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(p+m)<.1&&Math.abs(d+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,T=(f+1)/2,S=(x+1)/2,R=(p+m)/4,N=(d+y)/4,b=(_+g)/4;return L>T&&L>S?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=R/i,r=N/i):T>S?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=R/s,r=b/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=N/r,s=b/r),this.set(i,s,r,e),this}let C=Math.sqrt((g-_)*(g-_)+(d-y)*(d-y)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(g-_)/C,this.y=(d-y)/C,this.z=(m-p)/C,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ae(this.x,t.x,e.x),this.y=Ae(this.y,t.y,e.y),this.z=Ae(this.z,t.z,e.z),this.w=Ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ae(this.x,t,e),this.y=Ae(this.y,t,e),this.z=Ae(this.z,t,e),this.w=Ae(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;var Ze=ou,Ga=class extends Ai{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new mn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Ga{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Jr=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fl=class fl{constructor(t,e,i,s,r,o,a,l,c,p,d,m,f,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,p,d,m,f,_,y,g)}set(t,e,i,s,r,o,a,l,c,p,d,m,f,_,y,g){let x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=p,x[10]=d,x[14]=m,x[3]=f,x[7]=_,x[11]=y,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),o=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),p=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let m=o*p,f=o*d,_=a*p,y=a*d;e[0]=l*p,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=m-y*c,e[9]=-a*l,e[2]=y-m*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let m=l*p,f=l*d,_=c*p,y=c*d;e[0]=m+y*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*p,e[9]=-a,e[2]=f*a-_,e[6]=y+m*a,e[10]=o*l}else if(t.order==="ZXY"){let m=l*p,f=l*d,_=c*p,y=c*d;e[0]=m-y*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*p,e[9]=y-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let m=o*p,f=o*d,_=a*p,y=a*d;e[0]=l*p,e[4]=_*c-f,e[8]=m*c+y,e[1]=l*d,e[5]=y*c+m,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let m=o*l,f=o*c,_=a*l,y=a*c;e[0]=l*p,e[4]=y-m*d,e[8]=_*d+f,e[1]=d,e[5]=o*p,e[9]=-a*p,e[2]=-c*p,e[6]=f*d+_,e[10]=m-y*d}else if(t.order==="XZY"){let m=o*l,f=o*c,_=a*l,y=a*c;e[0]=l*p,e[4]=-d,e[8]=c*p,e[1]=m*d+y,e[5]=o*p,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*p,e[10]=y*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bg,t,zg)}lookAt(t,e,i){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),ts.crossVectors(i,On),ts.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),ts.crossVectors(i,On)),ts.normalize(),Qo.crossVectors(On,ts),s[0]=ts.x,s[4]=Qo.x,s[8]=On.x,s[1]=ts.y,s[5]=Qo.y,s[9]=On.y,s[2]=ts.z,s[6]=Qo.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],p=i[1],d=i[5],m=i[9],f=i[13],_=i[2],y=i[6],g=i[10],x=i[14],C=i[3],L=i[7],T=i[11],S=i[15],R=s[0],N=s[4],b=s[8],A=s[12],F=s[1],B=s[5],K=s[9],J=s[13],O=s[2],z=s[6],q=s[10],$=s[14],rt=s[3],Y=s[7],et=s[11],ot=s[15];return r[0]=o*R+a*F+l*O+c*rt,r[4]=o*N+a*B+l*z+c*Y,r[8]=o*b+a*K+l*q+c*et,r[12]=o*A+a*J+l*$+c*ot,r[1]=p*R+d*F+m*O+f*rt,r[5]=p*N+d*B+m*z+f*Y,r[9]=p*b+d*K+m*q+f*et,r[13]=p*A+d*J+m*$+f*ot,r[2]=_*R+y*F+g*O+x*rt,r[6]=_*N+y*B+g*z+x*Y,r[10]=_*b+y*K+g*q+x*et,r[14]=_*A+y*J+g*$+x*ot,r[3]=C*R+L*F+T*O+S*rt,r[7]=C*N+L*B+T*z+S*Y,r[11]=C*b+L*K+T*q+S*et,r[15]=C*A+L*J+T*$+S*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],p=t[2],d=t[6],m=t[10],f=t[14],_=t[3],y=t[7],g=t[11],x=t[15],C=l*f-c*m,L=a*f-c*d,T=a*m-l*d,S=o*f-c*p,R=o*m-l*p,N=o*d-a*p;return e*(y*C-g*L+x*T)-i*(_*C-g*S+x*R)+s*(_*L-y*S+x*N)-r*(_*T-y*R+g*N)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],p=t[10];return e*(o*p-a*c)-i*(r*p-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8],d=t[9],m=t[10],f=t[11],_=t[12],y=t[13],g=t[14],x=t[15],C=e*a-i*o,L=e*l-s*o,T=e*c-r*o,S=i*l-s*a,R=i*c-r*a,N=s*c-r*l,b=p*y-d*_,A=p*g-m*_,F=p*x-f*_,B=d*g-m*y,K=d*x-f*y,J=m*x-f*g,O=C*J-L*K+T*B+S*F-R*A+N*b;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/O;return t[0]=(a*J-l*K+c*B)*z,t[1]=(s*K-i*J-r*B)*z,t[2]=(y*N-g*R+x*S)*z,t[3]=(m*R-d*N-f*S)*z,t[4]=(l*F-o*J-c*A)*z,t[5]=(e*J-s*F+r*A)*z,t[6]=(g*T-_*N-x*L)*z,t[7]=(p*N-m*T+f*L)*z,t[8]=(o*K-a*F+c*b)*z,t[9]=(i*F-e*K-r*b)*z,t[10]=(_*R-y*T+x*C)*z,t[11]=(d*T-p*R-f*C)*z,t[12]=(a*A-o*B-l*b)*z,t[13]=(e*B-i*A+s*b)*z,t[14]=(y*L-_*S-g*C)*z,t[15]=(p*S-d*L+m*C)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,p=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,p*a+i,p*l-s*o,0,c*l-s*a,p*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,p=o+o,d=a+a,m=r*c,f=r*p,_=r*d,y=o*p,g=o*d,x=a*d,C=l*c,L=l*p,T=l*d,S=i.x,R=i.y,N=i.z;return s[0]=(1-(y+x))*S,s[1]=(f+T)*S,s[2]=(_-L)*S,s[3]=0,s[4]=(f-T)*R,s[5]=(1-(m+x))*R,s[6]=(g+C)*R,s[7]=0,s[8]=(_+L)*N,s[9]=(g-C)*N,s[10]=(1-(m+y))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Gs.set(s[0],s[1],s[2]).length(),a=Gs.set(s[4],s[5],s[6]).length(),l=Gs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let c=1/o,p=1/a,d=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=p,si.elements[5]*=p,si.elements[6]*=p,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,e.setFromRotationMatrix(si),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=li,l=!1){let c=this.elements,p=2*r/(e-t),d=2*r/(i-s),m=(e+t)/(e-t),f=(i+s)/(i-s),_,y;if(l)_=r/(o-r),y=o*r/(o-r);else if(a===li)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Yr)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=li,l=!1){let c=this.elements,p=2/(e-t),d=2/(i-s),m=-(e+t)/(e-t),f=-(i+s)/(i-s),_,y;if(l)_=1/(o-r),y=o/(o-r);else if(a===li)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===Yr)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fl.prototype.isMatrix4=!0;var qe=fl,Gs=new j,si=new qe,Bg=new j(0,0,0),zg=new j(1,1,1),ts=new j,Qo=new j,On=new j,yd=new qe,vd=new Ei,os=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],p=s[9],d=s[2],m=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,f),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vd.setFromEuler(this),this.setFromQuaternion(vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kg=0,Md=new j,Ws=new Ei,Oi=new qe,ta=new j,Fr=new j,Vg=new j,Hg=new Ei,bd=new j(1,0,0),Sd=new j(0,1,0),wd=new j(0,0,1),Ad={type:"added"},Gg={type:"removed"},Xs={type:"childadded",child:null},nh={type:"childremoved",child:null},Cn=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new j,e=new os,i=new Ei,s=new j(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(bd,t)}rotateY(t){return this.rotateOnAxis(Sd,t)}rotateZ(t){return this.rotateOnAxis(wd,t)}translateOnAxis(t,e){return Md.copy(t).applyQuaternion(this.quaternion),this.position.add(Md.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bd,t)}translateY(t){return this.translateOnAxis(Sd,t)}translateZ(t){return this.translateOnAxis(wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ta.copy(t):ta.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Fr,ta,this.up):Oi.lookAt(ta,Fr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gg),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,Vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Hg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),p=o(t.images),d=o(t.shapes),m=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let p=a[c];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Cn.DEFAULT_UP=new j(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wg={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),x=this._getHandJoint(c,y);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let p=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=p.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&m>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},ea={h:0,s:0,l:0};function ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ce=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=Ng(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ih(o,r,t+1/3),this.g=ih(o,r,t),this.b=ih(o,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function i(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let i=Ap[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return be.workingToColorSpace(_n.copy(this),t),Math.round(Ae(_n.r*255,0,255))*65536+Math.round(Ae(_n.g*255,0,255))*256+Math.round(Ae(_n.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(_n.copy(this),e);let i=_n.r,s=_n.g,r=_n.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,p=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=p<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=p,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=sn){be.workingToColorSpace(_n.copy(this),t);let e=_n.r,i=_n.g,s=_n.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(ea);let i=Kc(es.h,ea.h,e),s=Kc(es.s,ea.s,e),r=Kc(es.l,ea.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ce;ce.NAMES=Ap;var jr=class extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new j,Bi=new j,sh=new j,zi=new j,qs=new j,Ys=new j,Ed=new j,rh=new j,oh=new j,ah=new j,lh=new Ze,ch=new Ze,hh=new Ze,bi=class n{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Bi.subVectors(i,e),sh.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Bi),l=ri.dot(sh),c=Bi.dot(Bi),p=Bi.dot(sh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,f=(c*l-a*p)*m,_=(o*p-a*l)*m;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Bi.subVectors(t,e),ri.cross(Bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,i),Ys.subVectors(r,i),rh.subVectors(t,i);let l=qs.dot(rh),c=Ys.dot(rh);if(l<=0&&c<=0)return e.copy(i);oh.subVectors(t,s);let p=qs.dot(oh),d=Ys.dot(oh);if(p>=0&&d<=p)return e.copy(s);let m=l*d-p*c;if(m<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(qs,o);ah.subVectors(t,r);let f=qs.dot(ah),_=Ys.dot(ah);if(_>=0&&f<=_)return e.copy(r);let y=f*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ys,a);let g=p*_-f*d;if(g<=0&&d-p>=0&&f-_>=0)return Ed.subVectors(r,s),a=(d-p)/(d-p+(f-_)),e.copy(s).addScaledVector(Ed,a);let x=1/(g+y+m);return o=y*x,a=m*x,e.copy(i).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},as=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),ia.subVectors(this.max,Or),$s.subVectors(t.a,Or),Zs.subVectors(t.b,Or),Js.subVectors(t.c,Or),ns.subVectors(Zs,$s),is.subVectors(Js,Zs),As.subVectors($s,Js);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-As.z,As.y,ns.z,0,-ns.x,is.z,0,-is.x,As.z,0,-As.x,-ns.y,ns.x,0,-is.y,is.x,0,-As.y,As.x,0];return!uh(e,$s,Zs,Js,ia)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,$s,Zs,Js,ia))?!1:(sa.crossVectors(ns,is),e=[sa.x,sa.y,sa.z],uh(e,$s,Zs,Js,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ki=[new j,new j,new j,new j,new j,new j,new j,new j],oi=new j,na=new as,$s=new j,Zs=new j,Js=new j,ns=new j,is=new j,As=new j,Or=new j,ia=new j,sa=new j,Es=new j;function uh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),p=i.dot(Es);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>a)return!1}return!0}var nn=new j,ra=new _e,Xg=0,Ke=class extends Ai{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var to=class extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Tn=class extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},qg=new as,Br=new j,fh=new j,ls=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):qg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(fh)),this.expandByPoint(Br.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yg=0,$n=new qe,dh=new Cn,Ks=new j,Bn=new as,zr=new as,hn=new j,an=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lg(t)?to:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new fe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Bn.min,zr.min),Bn.expandByPoint(hn),hn.addVectors(Bn.max,zr.max),Bn.expandByPoint(hn)):(Bn.expandByPoint(zr.min),Bn.expandByPoint(zr.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)hn.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),hn.add(Ks)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new j,l[b]=new j;let c=new j,p=new j,d=new j,m=new _e,f=new _e,_=new _e,y=new j,g=new j;function x(b,A,F){c.fromBufferAttribute(i,b),p.fromBufferAttribute(i,A),d.fromBufferAttribute(i,F),m.fromBufferAttribute(r,b),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,F),p.sub(c),d.sub(c),f.sub(m),_.sub(m);let B=1/(f.x*_.y-_.x*f.y);isFinite(B)&&(y.copy(p).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(B),g.copy(d).multiplyScalar(f.x).addScaledVector(p,-_.x).multiplyScalar(B),a[b].add(y),a[A].add(y),a[F].add(y),l[b].add(g),l[A].add(g),l[F].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,A=C.length;b<A;++b){let F=C[b],B=F.start,K=F.count;for(let J=B,O=B+K;J<O;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let L=new j,T=new j,S=new j,R=new j;function N(b){S.fromBufferAttribute(s,b),R.copy(S);let A=a[b];L.copy(A),L.sub(S.multiplyScalar(S.dot(A))).normalize(),T.crossVectors(R,A);let B=T.dot(l[b])<0?-1:1;o.setXYZW(b,L.x,L.y,L.z,B)}for(let b=0,A=C.length;b<A;++b){let F=C[b],B=F.start,K=F.count;for(let J=B,O=B+K;J<O;J+=3)N(t.getX(J+0)),N(t.getX(J+1)),N(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);let s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,p=new j,d=new j;if(t)for(let m=0,f=t.count;m<f;m+=3){let _=t.getX(m+0),y=t.getX(m+1),g=t.getX(m+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(p),l.add(p),c.add(p),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let m=0,f=e.count;m<f;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,p=a.itemSize,d=a.normalized,m=new c.constructor(l.length*p),f=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*p;for(let x=0;x<p;x++)m[_++]=c[f++]}return new Ke(m,p,d)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let p=0,d=c.length;p<d;p++){let m=c[p],f=t(m,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],p=[];for(let d=0,m=c.length;d<m;d++){let f=c[d];p.push(f.toJSON(t.data))}p.length>0&&(s[l]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let p=s[c];this.setAttribute(c,p.clone(e))}let r=t.morphAttributes;for(let c in r){let p=[],d=r[c];for(let m=0,f=d.length;m<f;m++)p.push(d[m].clone(e));this.morphAttributes[c]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,p=o.length;c<p;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=rs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},En=new j,eo=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ph=new j,$g=new j,Zg=new fe,ai=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ph.subVectors(i,e).cross($g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ph),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zg.getNormalMatrix(t),s=this.coplanarPoint(ph).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Jg=0,Ti=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=dr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ai().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cs=class extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},js,kr=new j,Qs=new j,tr=new j,er=new _e,Vr=new _e,Ep=new qe,oa=new j,Hr=new j,aa=new j,Td=new _e,mh=new _e,Cd=new _e,Is=class extends Cn{constructor(t=new cs){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new an;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xa(e,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new eo(i,3,0,!1)),js.setAttribute("uv",new eo(i,2,3,!1))}this.geometry=js,this.material=t,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),Ep.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-tr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;la(oa.set(-.5,-.5,0),tr,o,Qs,s,r),la(Hr.set(.5,-.5,0),tr,o,Qs,s,r),la(aa.set(.5,.5,0),tr,o,Qs,s,r),Td.set(0,0),mh.set(1,0),Cd.set(1,1);let a=t.ray.intersectTriangle(oa,Hr,aa,!1,kr);if(a===null&&(la(Hr.set(-.5,.5,0),tr,o,Qs,s,r),mh.set(0,1),a=t.ray.intersectTriangle(oa,aa,Hr,!1,kr),a===null))return;let l=t.ray.origin.distanceTo(kr);l<t.near||l>t.far||e.push({distance:l,point:kr.clone(),uv:bi.getInterpolation(kr,oa,Hr,aa,Td,mh,Cd,new _e),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function la(n,t,e,i,s,r){er.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Vr.x=r*er.x-s*er.y,Vr.y=s*er.x+r*er.y):Vr.copy(er),n.copy(t),n.x+=Vr.x,n.y+=Vr.y,n.applyMatrix4(Ep)}var Vi=new j,gh=new j,ca=new j,ha=new j,hr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){gh.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(gh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ca),a=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),p=Math.abs(1-o*o),d,m,f,_;if(p>0)if(d=o*l-a,m=o*a-l,_=r*p,d>=0)if(m>=-_)if(m<=_){let y=1/p;d*=y,m*=y,f=d*(d+o*m+2*a)+m*(o*d+m+2*l)+c}else m=r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*l)+c;else m=-r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*l)+c;else m<=-_?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+m*(m+2*l)+c):m<=_?(d=0,m=Math.min(Math.max(-r,-l),r),f=m*(m+2*l)+c):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+m*(m+2*l)+c);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gh).addScaledVector(ca,m),f}intersectSphere(t,e){if(t.radius<0)return null;Vi.subVectors(t.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(i=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(i=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),p>=0?(r=(t.min.y-m.y)*p,o=(t.max.y-m.y)*p):(r=(t.max.y-m.y)*p,o=(t.min.y-m.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,p=a.z,d=t.x-o.x,m=t.y-o.y,f=t.z-o.z,_=e.x-o.x,y=e.y-o.y,g=e.z-o.z,x=i.x-o.x,C=i.y-o.y,L=i.z-o.z,T=Math.abs(l),S=Math.abs(c),R=Math.abs(p),N,b,A,F,B,K,J,O,z,q,$,rt;if(T>=S&&T>=R?(A=l,K=d,z=_,rt=x,l>=0?(N=c,b=p,F=m,B=f,J=y,O=g,q=C,$=L):(N=p,b=c,F=f,B=m,J=g,O=y,q=L,$=C)):S>=R?(A=c,K=m,z=y,rt=C,c>=0?(N=p,b=l,F=f,B=d,J=g,O=_,q=L,$=x):(N=l,b=p,F=d,B=f,J=_,O=g,q=x,$=L)):(A=p,K=f,z=g,rt=L,p>=0?(N=l,b=c,F=d,B=m,J=_,O=y,q=x,$=C):(N=c,b=l,F=m,B=d,J=y,O=_,q=C,$=x)),A===0)return null;let Y=N/A,et=b/A,ot=1/A,wt=F-Y*K,bt=B-et*K,Ut=J-Y*z,Mt=O-et*z,At=q-Y*rt,k=$-et*rt,Q=At*Mt-k*Ut,ft=wt*k-bt*At,Pt=Ut*bt-Mt*wt;if(s){if(Q<0||ft<0||Pt<0)return null}else if((Q<0||ft<0||Pt<0)&&(Q>0||ft>0||Pt>0))return null;let xt=Q+ft+Pt;if(xt===0)return null;let Lt=ot*(Q*K+ft*z+Pt*rt);return(xt>0?Lt<0:Lt>0)?null:this.at(Lt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rd=new qe,Ts=new hr,ua=new ls,Id=new j,fa=new j,da=new j,pa=new j,xh=new j,ma=new j,Pd=new j,ga=new j,Oe=class extends Cn{constructor(t=new an,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let p=a[l],d=r[l];p!==0&&(xh.fromBufferAttribute(d,t),o?ma.addScaledVector(xh,p):ma.addScaledVector(xh.sub(e),p))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(ua.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ua,Id)===null||Ts.origin.distanceToSquared(Id)>(t.far-t.near)**2))&&(Rd.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Rd),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,p=r.attributes.uv1,d=r.attributes.normal,m=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=m.length;_<y;_++){let g=m[_],x=o[g.materialIndex],C=Math.max(g.start,f.start),L=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let T=C,S=L;T<S;T+=3){let R=a.getX(T),N=a.getX(T+1),b=a.getX(T+2);s=xa(this,x,t,i,c,p,d,R,N,b),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=_,x=y;g<x;g+=3){let C=a.getX(g),L=a.getX(g+1),T=a.getX(g+2);s=xa(this,o,t,i,c,p,d,C,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=m.length;_<y;_++){let g=m[_],x=o[g.materialIndex],C=Math.max(g.start,f.start),L=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let T=C,S=L;T<S;T+=3){let R=T,N=T+1,b=T+2;s=xa(this,x,t,i,c,p,d,R,N,b),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=_,x=y;g<x;g+=3){let C=g,L=g+1,T=g+2;s=xa(this,o,t,i,c,p,d,C,L,T),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Kg(n,t,e,i,s,r,o,a){let l;if(t.side===Rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ps,a),l===null)return null;ga.copy(a),ga.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:n}}function xa(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,fa),n.getVertexPosition(l,da),n.getVertexPosition(c,pa);let p=Kg(n,t,e,i,fa,da,pa,Pd);if(p){let d=new j;bi.getBarycoord(Pd,fa,da,pa,d),s&&(p.uv=bi.getInterpolatedAttribute(s,a,l,c,d,new _e)),r&&(p.uv1=bi.getInterpolatedAttribute(r,a,l,c,d,new _e)),o&&(p.normal=bi.getInterpolatedAttribute(o,a,l,c,d,new j),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new j,materialIndex:0};bi.getNormal(fa,da,pa,m.normal),p.face=m,p.barycoord=d}return p}var qa=class extends mn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=un,p=un,d,m){super(null,o,a,l,c,p,s,r,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=new ls,jg=new _e(.5,.5),_a=new j,no=class{constructor(t=new ai,e=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],p=r[4],d=r[5],m=r[6],f=r[7],_=r[8],y=r[9],g=r[10],x=r[11],C=r[12],L=r[13],T=r[14],S=r[15];if(s[0].setComponents(c-o,f-p,x-_,S-C).normalize(),s[1].setComponents(c+o,f+p,x+_,S+C).normalize(),s[2].setComponents(c+a,f+d,x+y,S+L).normalize(),s[3].setComponents(c-a,f-d,x-y,S-L).normalize(),i)s[4].setComponents(l,m,g,T).normalize(),s[5].setComponents(c-l,f-m,x-g,S-T).normalize();else if(s[4].setComponents(c-l,f-m,x-g,S-T).normalize(),e===li)s[5].setComponents(c+l,f+m,x+g,S+T).normalize();else if(e===Yr)s[5].setComponents(l,m,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=jg.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(_a.x=s.normal.x>0?t.max.x:t.min.x,_a.y=s.normal.y>0?t.max.y:t.min.y,_a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ya=new j,$a=new j,Ld=new qe,Gr=new hr,ya=new ls,_h=new j,Dd=new j,Za=class extends Cn{constructor(t=new an,e=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ya.fromBufferAttribute(e,s-1),$a.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ya.distanceTo($a);t.setAttribute("lineDistance",new Tn(i,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;Ld.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(Ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){let f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let y=f,g=_-1;y<g;y+=c){let x=p.getX(y),C=p.getX(y+1),L=va(this,t,Gr,l,x,C,y);L&&e.push(L)}if(this.isLineLoop){let y=p.getX(_-1),g=p.getX(f),x=va(this,t,Gr,l,y,g,_-1);x&&e.push(x)}}else{let f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=f,g=_-1;y<g;y+=c){let x=va(this,t,Gr,l,y,y+1,y);x&&e.push(x)}if(this.isLineLoop){let y=va(this,t,Gr,l,_-1,f,_-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function va(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Ya.fromBufferAttribute(a,s),$a.fromBufferAttribute(a,r),e.distanceSqToSegment(Ya,$a,_h,Dd)>i)return;_h.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_h);if(!(c<t.near||c>t.far))return{distance:c,point:Dd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Nd=new j,Ud=new j,Ls=class extends Za{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Nd.fromBufferAttribute(e,s),Ud.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nd.distanceTo(Ud);t.setAttribute("lineDistance",new Tn(i,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fd=new qe,Ah=new hr,Ma=new ls,ba=new j,io=class extends Cn{constructor(t=new an,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;Fd.copy(s).invert(),Ah.copy(t.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let m=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=m,y=f;_<y;_++){let g=c.getX(_);ba.fromBufferAttribute(d,g),Od(ba,g,l,s,t,e,this)}}else{let m=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=m,y=f;_<y;_++)ba.fromBufferAttribute(d,_),Od(ba,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Od(n,t,e,i,s,r,o){let a=Ah.distanceSqToPoint(n);if(a<e){let l=new j;Ah.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var so=class extends mn{constructor(t=[],e=ms,i,s,r,o,a,l,c,p){super(t,e,i,s,r,o,a,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zn=class extends mn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends mn{constructor(t,e,i=hi,s,r,o,a=un,l=un,c,p=wi,d=1){if(p!==wi&&p!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:d};super(m,s,r,o,a,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ja=class extends hs{constructor(t,e=hi,i=ms,s,r,o=un,a=un,l,c=wi){let p={width:t,height:t,depth:1},d=[p,p,p,p,p,p];super(t,t,e,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ro=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},tn=class n extends an{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],p=[],d=[],m=0,f=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(p,3)),this.setAttribute("uv",new Tn(d,2));function _(y,g,x,C,L,T,S,R,N,b,A){let F=T/N,B=S/b,K=T/2,J=S/2,O=R/2,z=N+1,q=b+1,$=0,rt=0,Y=new j;for(let et=0;et<q;et++){let ot=et*B-J;for(let wt=0;wt<z;wt++){let bt=wt*F-K;Y[y]=bt*C,Y[g]=ot*L,Y[x]=O,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[g]=0,Y[x]=R>0?1:-1,p.push(Y.x,Y.y,Y.z),d.push(wt/N),d.push(1-et/b),$+=1}}for(let et=0;et<b;et++)for(let ot=0;ot<N;ot++){let wt=m+ot+z*et,bt=m+ot+z*(et+1),Ut=m+(ot+1)+z*(et+1),Mt=m+(ot+1)+z*et;l.push(wt,bt,Mt),l.push(bt,Ut,Mt),rt+=6}a.addGroup(f,rt,A),f+=rt,m+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Sa=new j,wa=new j,yh=new j,Aa=new bi,oo=class extends an{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ia*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],p=["a","b","c"],d=new Array(3),m={},f=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);let{a:y,b:g,c:x}=Aa;if(y.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),Aa.getNormal(yh),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){let L=(C+1)%3,T=d[C],S=d[L],R=Aa[p[C]],N=Aa[p[L]],b=`${T}_${S}`,A=`${S}_${T}`;A in m&&m[A]?(yh.dot(m[A].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(N.x,N.y,N.z)),m[A]=null):b in m||(m[b]={index0:c[C],index1:c[L],normal:yh.clone()})}}for(let _ in m)if(m[_]){let{index0:y,index1:g}=m[_];Sa.fromBufferAttribute(a,y),wa.fromBufferAttribute(a,g),f.push(Sa.x,Sa.y,Sa.z),f.push(wa.x,wa.y,wa.z)}this.setAttribute("position",new Tn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var ao=class n extends an{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,p=l+1,d=t/a,m=e/l,f=[],_=[],y=[],g=[];for(let x=0;x<p;x++){let C=x*m-o;for(let L=0;L<c;L++){let T=L*d-r;_.push(T,-C,0),y.push(0,0,1),g.push(L/a),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let C=0;C<a;C++){let L=C+c*x,T=C+c*(x+1),S=C+1+c*(x+1),R=C+1+c*x;f.push(L,T,R),f.push(T,S,R)}this.setIndex(f),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Us(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Bd(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Bd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=Us(n[e]);for(let s in i)t[s]=i[s]}return t}function Bd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Qg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var Tp={clone:Us,merge:bn},tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Qg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ce().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new j().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ka=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ja=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qa=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function nr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function vh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var us=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends us{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sh:r=t,a=2*e-i;break;case wh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:o=t,l=2*i-e;break;case wh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,p=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,p=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,f=this._weightNext,_=(i-e)/(s-e),y=_*_,g=y*_,x=-m*g+2*m*y-m*_,C=(1+m)*g+(-1.5-2*m)*y+(-.5+m)*_+1,L=(-1-f)*g+(1.5+f)*y+.5*_,T=f*g-f*y;for(let S=0;S!==a;++S)r[S]=x*o[p+S]+C*o[c+S]+L*o[l+S]+T*o[d+S];return r}},el=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,p=(i-e)/(s-e),d=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*d+o[l+m]*p;return r}},nl=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends us{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,p=this.inTangents,d=this.outTangents;if(!p||!d){let _=(i-e)/(s-e),y=1-_;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*_;return r}let m=a*2,f=t-1;for(let _=0;_!==a;++_){let y=o[c+_],g=o[l+_],x=f*m+_*2,C=d[x],L=d[x+1],T=t*m+_*2,S=p[T],R=p[T+1],N=ix(i,e,C,S,s);r[_]=Cp(N,y,L,R,g)}return r}};function Cp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function nx(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ix(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Cp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=nx(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nr(e,this.TimeBufferType),this.values=nr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:nr(t.times,Array),values:nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),vh(t.settings)&&(i.settings={inTangents:nr(t.settings.inTangents,Array),outTangents:nr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ae("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;vh(this.settings)&&(zd(this.settings.inTangents,t),zd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){le("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Dg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],p=t[a+1];if(c!==p&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,m=d-i,f=d+i;for(let _=0;_!==i;++_){let y=e[d+_];if(y!==e[m+_]||y!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,m=o*i;for(let f=0;f!==i;++f)e[m+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,vh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ka;var fs=class extends zn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Wr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};sl.prototype.ValueTypeName="color";var rl=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};rl.prototype.ValueTypeName="number";var ol=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let p=c+a;c!==p;c+=4)Ei.slerpFlat(r,0,o,c-a,o,c,l);return r}},lo=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}};lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends zn{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Wr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};al.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,d){return c.push(p,d),this},this.removeHandler=function(p){let d=c.indexOf(p);return d!==-1&&c.splice(d,2),this},this.getHandler=function(p){for(let d=0,m=c.length;d<m;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(p))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rp=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ea=new j,Ta=new Ei,vi=new j,co=class extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ea,Ta,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ea,Ta,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,Ta,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new j,kd=new _e,Vd=new _e,yn=class extends co{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,kd,Vd),e.subVectors(Vd,kd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ho=class extends co{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ir=-90,sr=1,hl=class extends Cn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new yn(ir,sr,t,e);r.layers=this.layers,this.add(r);let o=new yn(ir,sr,t,e);o.layers=this.layers,this.add(o);let a=new yn(ir,sr,t,e);a.layers=this.layers,this.add(a);let l=new yn(ir,sr,t,e);l.layers=this.layers,this.add(l);let c=new yn(ir,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,p]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(d,m,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ul=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var tu="\\[\\]\\.:\\/",sx=new RegExp("["+tu+"]","g"),eu="[^"+tu+"]",rx="[^"+tu.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",eu),ax=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),hx=new RegExp("^"+ox+ax+lx+cx+"$"),ux=["material","materials","bones","map"],Eh=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(t){let e=hx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===c){c=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Eh;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nS=new Float32Array(1);var au=class au{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};au.prototype.isMatrix2=!0;var Th=au;function nu(n,t,e,i){let s=fx(i);switch(e){case Yh:return n*t;case Zh:return n*t/s.components*s.byteLength;case yl:return n*t/s.components*s.byteLength;case _s:return n*t*2/s.components*s.byteLength;case vl:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case Kn:return n*t*4/s.components*s.byteLength;case Ml:return n*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:case Al:return Math.max(n,16)*Math.max(t,8)/4;case bl:case wl:return Math.max(n,8)*Math.max(t,8)/2;case El:case Tl:case Rl:case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cl:case yo:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ql:case Yl:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vo:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fx(n){switch(n){case kn:case Gh:return{byteLength:1,components:1};case pr:case Wh:case fi:return{byteLength:2,components:1};case xl:case _l:return{byteLength:2,components:4};case hi:case gl:case ui:return{byteLength:4,components:1};case Xh:case qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function px(n){let t=new WeakMap;function e(a,l){let c=a.array,p=a.usage,d=c.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,c,p),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let p=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,p);else{d.sort((f,_)=>f.start-_.start);let m=0;for(let f=1;f<d.length;f++){let _=d[m],y=d[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++m,d[m]=y)}d.length=m+1;for(let f=0,_=d.length;f<_;f++){let y=d[f];n.bufferSubData(c,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ax=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,a_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ty=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,by=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ny=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Oy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,By=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:xx,alphamap_pars_fragment:_x,alphatest_fragment:yx,alphatest_pars_fragment:vx,aomap_fragment:Mx,aomap_pars_fragment:bx,batching_pars_vertex:Sx,batching_vertex:wx,begin_vertex:Ax,beginnormal_vertex:Ex,bsdfs:Tx,iridescence_fragment:Cx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Ix,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Lx,clipping_planes_vertex:Dx,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:kx,displacementmap_pars_vertex:Vx,displacementmap_vertex:Hx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:Xx,colorspace_pars_fragment:qx,envmap_fragment:Yx,envmap_common_pars_fragment:$x,envmap_pars_fragment:Zx,envmap_pars_vertex:Jx,envmap_physical_pars_fragment:a_,envmap_vertex:Kx,fog_vertex:jx,fog_pars_vertex:Qx,fog_fragment:t_,fog_pars_fragment:e_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:h_,lights_phong_pars_fragment:u_,lights_physical_fragment:f_,lights_physical_pars_fragment:d_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,lightprobes_pars_fragment:x_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:M_,map_fragment:b_,map_pars_fragment:S_,map_particle_fragment:w_,map_particle_pars_fragment:A_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphinstance_vertex:C_,morphcolor_vertex:R_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:D_,normal_fragment_maps:N_,normal_pars_fragment:U_,normal_pars_vertex:F_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:H_,opaque_fragment:G_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:$_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:j_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ty,skinbase_vertex:ey,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:sy,specularmap_fragment:ry,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:hy,uv_pars_fragment:uy,uv_pars_vertex:fy,uv_vertex:dy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:xy,backgroundCube_frag:_y,cube_vert:yy,cube_frag:vy,depth_vert:My,depth_frag:by,distance_vert:Sy,distance_frag:wy,equirect_vert:Ay,equirect_frag:Ey,linedashed_vert:Ty,linedashed_frag:Cy,meshbasic_vert:Ry,meshbasic_frag:Iy,meshlambert_vert:Py,meshlambert_frag:Ly,meshmatcap_vert:Dy,meshmatcap_frag:Ny,meshnormal_vert:Uy,meshnormal_frag:Fy,meshphong_vert:Oy,meshphong_frag:By,meshphysical_vert:zy,meshphysical_frag:ky,meshtoon_vert:Vy,meshtoon_frag:Hy,points_vert:Gy,points_frag:Wy,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:$y},kt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ii={basic:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:bn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:bn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ce(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:bn([kt.points,kt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:bn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:bn([kt.common,kt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:bn([kt.sprite,kt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:bn([kt.common,kt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:bn([kt.lights,kt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Ii.physical={uniforms:bn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var tc={r:0,b:0,g:0},Zy=new qe,jp=new fe;jp.set(-1,0,0,0,1,0,0,0,1);function Jy(n,t,e,i,s,r){let o=new ce(0),a=s===!0?0:1,l,c,p=null,d=0,m=null;function f(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){let T=C.backgroundBlurriness>0;L=t.get(L,T)}return L}function _(C){let L=!1,T=f(C);T===null?g(o,a):T&&T.isColor&&(g(T,1),L=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(C,L){let T=f(L);T&&(T.isCubeTexture||T.mapping===fo)?(c===void 0&&(c=new Oe(new tn(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Us(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jp),c.material.toneMapped=be.getTransfer(T.colorSpace)!==Fe,(p!==T||d!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=T,d=T.version,m=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Oe(new ao(2,2),new Mn({name:"BackgroundMaterial",uniforms:Us(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=be.getTransfer(T.colorSpace)!==Fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||d!==T.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,p=T,d=T.version,m=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function g(C,L){C.getRGB(tc,Qh(n)),e.buffers.color.setClear(tc.r,tc.g,tc.b,L,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,L=1){o.set(C),a=L,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,g(o,a)},render:_,addToRenderList:y,dispose:x}}function Ky(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null),r=s,o=!1;function a(B,K,J,O,z){let q=!1,$=d(B,O,J,K);r!==$&&(r=$,c(r.object)),q=f(B,O,J,z),q&&_(B,O,J,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,T(B,K,J,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(B){return n.bindVertexArray(B)}function p(B){return n.deleteVertexArray(B)}function d(B,K,J,O){let z=O.wireframe===!0,q=i[K.id];q===void 0&&(q={},i[K.id]=q);let $=B.isInstancedMesh===!0?B.id:0,rt=q[$];rt===void 0&&(rt={},q[$]=rt);let Y=rt[J.id];Y===void 0&&(Y={},rt[J.id]=Y);let et=Y[z];return et===void 0&&(et=m(l()),Y[z]=et),et}function m(B){let K=[],J=[],O=[];for(let z=0;z<e;z++)K[z]=0,J[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:J,attributeDivisors:O,object:B,attributes:{},index:null}}function f(B,K,J,O){let z=r.attributes,q=K.attributes,$=0,rt=J.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let ot=z[Y],wt=q[Y];if(wt===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(wt=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(wt=B.instanceColor)),ot===void 0||ot.attribute!==wt||wt&&ot.data!==wt.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function _(B,K,J,O){let z={},q=K.attributes,$=0,rt=J.getAttributes();for(let Y in rt)if(rt[Y].location>=0){let ot=q[Y];ot===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(ot=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(ot=B.instanceColor));let wt={};wt.attribute=ot,ot&&ot.data&&(wt.data=ot.data),z[Y]=wt,$++}r.attributes=z,r.attributesNum=$,r.index=O}function y(){let B=r.newAttributes;for(let K=0,J=B.length;K<J;K++)B[K]=0}function g(B){x(B,0)}function x(B,K){let J=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;J[B]=1,O[B]===0&&(n.enableVertexAttribArray(B),O[B]=1),z[B]!==K&&(n.vertexAttribDivisor(B,K),z[B]=K)}function C(){let B=r.newAttributes,K=r.enabledAttributes;for(let J=0,O=K.length;J<O;J++)K[J]!==B[J]&&(n.disableVertexAttribArray(J),K[J]=0)}function L(B,K,J,O,z,q,$){$===!0?n.vertexAttribIPointer(B,K,J,z,q):n.vertexAttribPointer(B,K,J,O,z,q)}function T(B,K,J,O){y();let z=O.attributes,q=J.getAttributes(),$=K.defaultAttributeValues;for(let rt in q){let Y=q[rt];if(Y.location>=0){let et=z[rt];if(et===void 0&&(rt==="instanceMatrix"&&B.instanceMatrix&&(et=B.instanceMatrix),rt==="instanceColor"&&B.instanceColor&&(et=B.instanceColor)),et!==void 0){let ot=et.normalized,wt=et.itemSize,bt=t.get(et);if(bt===void 0)continue;let Ut=bt.buffer,Mt=bt.type,At=bt.bytesPerElement,k=Mt===n.INT||Mt===n.UNSIGNED_INT||et.gpuType===gl;if(et.isInterleavedBufferAttribute){let Q=et.data,ft=Q.stride,Pt=et.offset;if(Q.isInstancedInterleavedBuffer){for(let xt=0;xt<Y.locationSize;xt++)x(Y.location+xt,Q.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xt=0;xt<Y.locationSize;xt++)g(Y.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let xt=0;xt<Y.locationSize;xt++)L(Y.location+xt,wt/Y.locationSize,Mt,ot,ft*At,(Pt+wt/Y.locationSize*xt)*At,k)}else{if(et.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)x(Y.location+Q,et.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Q=0;Q<Y.locationSize;Q++)g(Y.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let Q=0;Q<Y.locationSize;Q++)L(Y.location+Q,wt/Y.locationSize,Mt,ot,wt*At,wt/Y.locationSize*Q*At,k)}}else if($!==void 0){let ot=$[rt];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(Y.location,ot);break;case 3:n.vertexAttrib3fv(Y.location,ot);break;case 4:n.vertexAttrib4fv(Y.location,ot);break;default:n.vertexAttrib1fv(Y.location,ot)}}}}C()}function S(){A();for(let B in i){let K=i[B];for(let J in K){let O=K[J];for(let z in O){let q=O[z];for(let $ in q)p(q[$].object),delete q[$];delete O[z]}}delete i[B]}}function R(B){if(i[B.id]===void 0)return;let K=i[B.id];for(let J in K){let O=K[J];for(let z in O){let q=O[z];for(let $ in q)p(q[$].object),delete q[$];delete O[z]}}delete i[B.id]}function N(B){for(let K in i){let J=i[K];for(let O in J){let z=J[O];if(z[B.id]===void 0)continue;let q=z[B.id];for(let $ in q)p(q[$].object),delete q[$];delete z[B.id]}}}function b(B){for(let K in i){let J=i[K],O=B.isInstancedMesh===!0?B.id:0,z=J[O];if(z!==void 0){for(let q in z){let $=z[q];for(let rt in $)p($[rt].object),delete $[rt];delete z[q]}delete J[O],Object.keys(J).length===0&&delete i[K]}}}function A(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:F,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:g,disableUnusedAttributes:C}}function jy(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,p){p!==0&&(n.drawArraysInstanced(i,l,c,p),e.update(c,i,p))}function a(l,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let m=0;for(let f=0;f<p;f++)m+=c[f];e.update(m,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Kn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let b=N===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==kn&&N!==ui&&!b&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",p=l(c);p!==c&&(ae("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);let d=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:T,maxSamples:S,samples:R}}function tv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ai,a=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let f=d.length!==0||m||i!==0||s;return s=m,i=d.length,f},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){e=p(d,m,0)},this.setState=function(d,m,f){let _=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,x=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?p(null):c();else{let C=r?0:i,L=C*4,T=x.clippingState||null;l.value=T,T=p(_,m,L,f);for(let S=0;S!==L;++S)T[S]=e[S];x.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(d,m,f,_){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,_!==!0||g===null){let x=f+y*4,C=m.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<x)&&(g=new Float32Array(x));for(let L=0,T=f;L!==y;++L,T+=4)o.copy(d[L]).applyMatrix4(C,a),o.normal.toArray(g,T),g[T+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var xr=4,ev=6,nv=20,iv=256,Mo=new ho,Ip=new ce,lu=null,cu=0,hu=0,uu=!1,sv=new j,Fs=new j,nc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=sv}=r;lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lu,cu,hu),this._renderer.xr.enabled=uu,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:fi,format:Kn,colorSpace:Xr,depthBuffer:!1},s=Pp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rv(r)),this._blurMaterial=av(r,t,e),this._ggxMaterial=ov(r,t,e)}return s}_compileMaterial(t){let e=new Oe(new an,t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,i,s,r){let l=new yn(90,1,e,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,f=d.toneMapping;d.getClearColor(Ip),d.toneMapping=ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new tn,new vn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,x=!1,C=t.background;C?C.isColor&&(g.color.copy(C),t.background=null,x=!0):(g.color.copy(Ip),x=!0);for(let L=0;L<6;L++){let T=L%3;T===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+p[L],r.y,r.z)):T===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+p[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+p[L]));let S=this._cubeSize;gr(s,T*S,L>2?S:0,S,S),d.setRenderTarget(s),x&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=m,t.background=C}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ms||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;gr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Mo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-p*p),m=c*1.25,f=d*m,{_lodMax:_}=this,y=this._sizeLods[i],g=3*y*(i>_-xr?i-_+xr:0),x=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,gr(r,g,x,3*y,2*y),s.setRenderTarget(r),s.render(a,Mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,gr(t,g,x,3*y,2*y),s.setRenderTarget(t),s.render(a,Mo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],d=3*p*(s>this._lodMax-xr?s-this._lodMax+xr:0),m=4*(this._cubeSize-p);gr(e,d,m,3*p,2*p),o.setRenderTarget(e),o.render(l,Mo)}};function rv(n){let t=[],e=[],i=n,s=n-xr+1+ev;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,p=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,m=6,f=3,_=new Float32Array(f*m*d),y=new Float32Array(f*m*d);for(let x=0;x<d;x++){let C=x%3*2/3-1,L=x>2?0:-1,T=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];_.set(T,f*m*x);for(let S=0;S<m;S++){let R=p[S*2]*2-1,N=p[S*2+1]*2-1;x===0?Fs.set(1,N,R):x===1?Fs.set(-R,1,-N):x===2?Fs.set(-R,N,1):x===3?Fs.set(-1,N,-R):x===4?Fs.set(-R,-1,N):Fs.set(R,N,-1),Fs.toArray(y,(x*m+S)*f)}}let g=new an;g.setAttribute("position",new Ke(_,f)),g.setAttribute("outputDirection",new Ke(y,f)),e.push(new Oe(g,null)),i>xr&&i--}return{lodMeshes:e,sizeLods:t}}function Pp(n,t,e){let i=new Ln(n,t,e);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ov(n,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function av(n,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Lp(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Dp(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ic=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new so(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Ci});r.uniforms.tEquirect.value=e;let o=new Oe(s,r),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=rn),new hl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function lv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(m,f=!1){return m==null?null:f?o(m):r(m)}function r(m){if(m&&m.isTexture){let f=m.mapping;if(f===dl||f===pl)if(t.has(m)){let _=t.get(m).texture;return a(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let y=new ic(_.height);return y.fromEquirectangularTexture(n,m),t.set(m,y),m.addEventListener("dispose",c),a(y.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){let f=m.mapping,_=f===dl||f===pl,y=f===ms||f===Ns;if(_||y){let g=e.get(m),x=g!==void 0?g.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return i===null&&(i=new nc(n)),g=_?i.fromEquirectangular(m,g):i.fromCubemap(m,g),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),g.texture;if(g!==void 0)return g.texture;{let C=m.image;return _&&C&&C.height>0||y&&C&&l(C)?(i===null&&(i=new nc(n)),g=_?i.fromEquirectangular(m):i.fromCubemap(m),g.texture.pmremVersion=m.pmremVersion,e.set(m,g),m.addEventListener("dispose",p),g.texture):null}}}return m}function a(m,f){return f===dl?m.mapping=ms:f===pl&&(m.mapping=Ns),m}function l(m){let f=0,_=6;for(let y=0;y<_;y++)m[y]!==void 0&&f++;return f===_}function c(m){let f=m.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function p(m){let f=m.target;f.removeEventListener("dispose",p);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function cv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function hv(n,t,e,i){let s={},r=new WeakMap;function o(d){let m=d.target;m.index!==null&&t.remove(m.index);for(let _ in m.attributes)t.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete s[m.id];let f=r.get(m);f&&(t.remove(f),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(d){let m=d.attributes;for(let f in m)t.update(m[f],n.ARRAY_BUFFER)}function c(d){let m=[],f=d.index,_=d.attributes.position,y=0;if(_===void 0)return;if(f!==null){let C=f.array;y=f.version;for(let L=0,T=C.length;L<T;L+=3){let S=C[L+0],R=C[L+1],N=C[L+2];m.push(S,R,R,N,N,S)}}else{let C=_.array;y=_.version;for(let L=0,T=C.length/3-1;L<T;L+=3){let S=L+0,R=L+1,N=L+2;m.push(S,R,R,N,N,S)}}let g=new(_.count>=65535?to:Qr)(m,1);g.version=y;let x=r.get(d);x&&t.remove(x),r.set(d,g)}function p(d){let m=r.get(d);if(m){let f=d.index;f!==null&&m.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:p}}function uv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function c(d,m,f){f!==0&&(n.drawElementsInstanced(i,m,r,d*o,f),e.update(m,i,f))}function p(d,m,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=m[g];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function fv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function dv(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,l){let c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=p!==void 0?p.length:0,m=i.get(a);if(m===void 0||m.count!==d){let A=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",A)};m!==void 0&&m.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],L=0;f===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let T=a.attributes.position.count*L,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let R=new Float32Array(T*S*4*d),N=new Jr(R,T,S,d);N.type=ui,N.needsUpdate=!0;let b=L*4;for(let F=0;F<d;F++){let B=g[F],K=x[F],J=C[F],O=T*S*4*F;for(let z=0;z<B.count;z++){let q=z*b;f===!0&&(s.fromBufferAttribute(B,z),R[O+q+0]=s.x,R[O+q+1]=s.y,R[O+q+2]=s.z,R[O+q+3]=0),_===!0&&(s.fromBufferAttribute(K,z),R[O+q+4]=s.x,R[O+q+5]=s.y,R[O+q+6]=s.z,R[O+q+7]=0),y===!0&&(s.fromBufferAttribute(J,z),R[O+q+8]=s.x,R[O+q+9]=s.y,R[O+q+10]=s.z,R[O+q+11]=J.itemSize===4?s.w:1)}}m={count:d,texture:N,size:new _e(T,S)},i.set(a,m),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function pv(n,t,e,i,s){let r=new WeakMap;function o(c){let p=s.render.frame,d=c.geometry,m=t.get(c,d);if(r.get(m)!==p&&(t.update(m),r.set(m,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==p&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==p&&(f.update(),r.set(f,p))}return m}function a(){r=new WeakMap}function l(c){let p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:a}}var mv={[Uh]:"LINEAR_TONE_MAPPING",[Fh]:"REINHARD_TONE_MAPPING",[Oh]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[kh]:"AGX_TONE_MAPPING",[Vh]:"NEUTRAL_TONE_MAPPING",[zh]:"CUSTOM_TONE_MAPPING"};function gv(n,t,e,i,s,r){let o=new Ln(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new an;c.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Tn([0,2,0,0,2,0],2));let p=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(c,p),m=new ho(-1,1,1,-1,0,1),f=null,_=null,y=!1,g,x=null,C=[],L=!1;this.setSize=function(T,S){o.setSize(T,S),a!==null&&a.setSize(T,S),l!==null&&l.setSize(T,S);for(let R=0;R<C.length;R++){let N=C[R];N.setSize&&N.setSize(T,S)}},this.setEffects=function(T){C=T,L=C.length>0&&C[0].isRenderPass===!0;let S=o.width,R=o.height;C.length>0&&a===null&&(a=new Ln(S,R,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(S,R,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<C.length;N++){let b=C[N];b.setSize&&b.setSize(S,R)}},this.begin=function(T,S){if(y||T.toneMapping===ci&&C.length===0)return!1;if(x=S,S!==null){let R=S.width,N=S.height;(o.width!==R||o.height!==N)&&this.setSize(R,N)}return L===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=ci,!0},this.hasRenderPass=function(){return L},this.end=function(T,S){T.toneMapping=g,y=!0;let R=o,N=a;for(let b=0;b<C.length;b++){let A=C[b];A.enabled!==!1&&(A.render(T,N,R,S),A.needsSwap!==!1&&(R=N,N=N===a?l:a))}if(f!==T.outputColorSpace||_!==T.toneMapping){f=T.outputColorSpace,_=T.toneMapping,p.defines={},be.getTransfer(f)===Fe&&(p.defines.SRGB_TRANSFER="");let b=mv[_];b&&(p.defines[b]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(x),T.render(d,m),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),p.dispose()}}var Qp=new mn,pu=new hs(1,1),tm=new Jr,em=new Wa,nm=new so,Np=[],Up=[],Fp=new Float32Array(16),Op=new Float32Array(9),Bp=new Float32Array(4);function yr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Np[s];if(r===void 0&&(r=new Float32Array(s),Np[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ln(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function oc(n,t){let e=Up[t];e===void 0&&(e=new Int32Array(t),Up[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function xv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function yv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function vv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function Mv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Bp.set(i),n.uniformMatrix2fv(this.addr,!1,Bp),cn(e,i)}}function bv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Op.set(i),n.uniformMatrix3fv(this.addr,!1,Op),cn(e,i)}}function Sv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ln(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,i))return;Fp.set(i),n.uniformMatrix4fv(this.addr,!1,Fp),cn(e,i)}}function wv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function Ev(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function Tv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function Cv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Rv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function Iv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function Pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function Lv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pu.compareFunction=e.isReversedDepthBuffer()?Ql:jl,r=pu):r=Qp,e.setTexture2D(t||r,s)}function Dv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||em,s)}function Nv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nm,s)}function Uv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tm,s)}function Fv(n){switch(n){case 5126:return xv;case 35664:return _v;case 35665:return yv;case 35666:return vv;case 35674:return Mv;case 35675:return bv;case 35676:return Sv;case 5124:case 35670:return wv;case 35667:case 35671:return Av;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return Cv;case 36294:return Rv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(n,t){n.uniform1fv(this.addr,t)}function Bv(n,t){let e=yr(t,this.size,2);n.uniform2fv(this.addr,e)}function zv(n,t){let e=yr(t,this.size,3);n.uniform3fv(this.addr,e)}function kv(n,t){let e=yr(t,this.size,4);n.uniform4fv(this.addr,e)}function Vv(n,t){let e=yr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hv(n,t){let e=yr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gv(n,t){let e=yr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wv(n,t){n.uniform1iv(this.addr,t)}function Xv(n,t){n.uniform2iv(this.addr,t)}function qv(n,t){n.uniform3iv(this.addr,t)}function Yv(n,t){n.uniform4iv(this.addr,t)}function $v(n,t){n.uniform1uiv(this.addr,t)}function Zv(n,t){n.uniform2uiv(this.addr,t)}function Jv(n,t){n.uniform3uiv(this.addr,t)}function Kv(n,t){n.uniform4uiv(this.addr,t)}function jv(n,t,e){let i=this.cache,s=t.length,r=oc(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=pu:o=Qp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Qv(n,t,e){let i=this.cache,s=t.length,r=oc(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||em,r[o])}function tM(n,t,e){let i=this.cache,s=t.length,r=oc(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nm,r[o])}function eM(n,t,e){let i=this.cache,s=t.length,r=oc(e,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tm,r[o])}function nM(n){switch(n){case 5126:return Ov;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Vv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return $v;case 36294:return Zv;case 36295:return Jv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}var mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fv(e.type)}},gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}},xu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;function zp(n,t){n.seq.push(t),n.map[t.id]=t}function iM(n,t,e){let i=n.name,s=i.length;for(fu.lastIndex=0;;){let r=fu.exec(i),o=fu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zp(e,c===void 0?new mu(a,n,t):new gu(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new xu(a),zp(e,d)),e=d}}}var _r=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);iM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function kp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var sM=37297,rM=0;function oM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Vp=new fe;function aM(n){be._getMatrix(Vp,be.workingColorSpace,n);let t=`mat3( ${Vp.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(n)){case qr:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+oM(n.getShaderSource(t),a)}else return r}function lM(n,t){let e=aM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var cM={[Uh]:"Linear",[Fh]:"Reinhard",[Oh]:"Cineon",[Bh]:"ACESFilmic",[kh]:"AgX",[Vh]:"Neutral",[zh]:"Custom"};function hM(n,t){let e=cM[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ec=new j;function uM(){be.getLuminanceCoefficients(ec);let n=ec.x.toFixed(4),t=ec.y.toFixed(4),e=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function dM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function So(n){return n!==""}function Gp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(n){return n.replace(mM,xM)}var gM=new Map;function xM(n,t){let e=xe[t];if(e===void 0){let i=gM.get(t);if(i!==void 0)e=xe[i],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _u(e)}var _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(n){return n.replace(_M,yM)}function yM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var vM={[uo]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function MM(n){return vM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bM={[ms]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function SM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var wM={[Ns]:"ENVMAP_MODE_REFRACTION"};function AM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var EM={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function TM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":EM[n.combine]||"ENVMAP_BLENDING_NONE"}function CM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function RM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=MM(e),c=SM(e),p=AM(e),d=TM(e),m=CM(e),f=fM(e),_=dM(r),y=s.createProgram(),g,x,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(So).join(`
`),g.length>0&&(g+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(So).join(`
`),x.length>0&&(x+=`
`)):(g=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),x=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?xe.tonemapping_pars_fragment:"",e.toneMapping!==ci?hM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,lM("linearToOutputTexel",e.outputColorSpace),uM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(So).join(`
`)),o=_u(o),o=Gp(o,e),o=Wp(o,e),a=_u(a),a=Gp(a,e),a=Wp(a,e),o=Xp(o),a=Xp(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let L=C+g+o,T=C+x+a,S=kp(s,s.VERTEX_SHADER,L),R=kp(s,s.FRAGMENT_SHADER,T);s.attachShader(y,S),s.attachShader(y,R),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function N(B){if(n.debug.checkShaderErrors){let K=s.getProgramInfoLog(y)||"",J=s.getShaderInfoLog(S)||"",O=s.getShaderInfoLog(R)||"",z=K.trim(),q=J.trim(),$=O.trim(),rt=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,R);else{let et=Hp(s,S,"vertex"),ot=Hp(s,R,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+z+`
`+et+`
`+ot)}else z!==""?ae("WebGLProgram: Program Info Log:",z):(q===""||$==="")&&(Y=!1);Y&&(B.diagnostics={runnable:rt,programLog:z,vertexShader:{log:q,prefix:g},fragmentShader:{log:$,prefix:x}})}s.deleteShader(S),s.deleteShader(R),b=new _r(s,y),A=pM(s,y)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(y,sM)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rM++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=R,this}var IM=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vu(t),e.set(t,i)),i}},vu=class{constructor(t){this.id=IM++,this.code=t,this.usedTimes=0}};function PM(n){return n===_s||n===yo||n===vo}function LM(n,t,e,i,s,r){let o=new Kr,a=new yu,l=new Set,c=[],p=new Map,d=i.logarithmicDepthBuffer,m=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function y(b,A,F,B,K,J){let O=B.fog,z=K.geometry,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,$=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,rt=t.get(b.envMap||q,$),Y=rt&&rt.mapping===fo?rt.image.height:null,et=f[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&ae("WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,wt=ot!==void 0?ot.length:0,bt=0;z.morphAttributes.position!==void 0&&(bt=1),z.morphAttributes.normal!==void 0&&(bt=2),z.morphAttributes.color!==void 0&&(bt=3);let Ut,Mt,At,k;if(et){let Te=Ii[et];Ut=Te.vertexShader,Mt=Te.fragmentShader}else{Ut=b.vertexShader,Mt=b.fragmentShader;let Te=a.getVertexShaderStage(b),Ee=a.getFragmentShaderStage(b);a.update(b,Te,Ee),At=Te.id,k=Ee.id}let Q=n.getRenderTarget(),ft=n.state.buffers.depth.getReversed(),Pt=K.isInstancedMesh===!0,xt=K.isBatchedMesh===!0,Lt=!!b.map,se=!!b.matcap,lt=!!rt,ee=!!b.aoMap,qt=!!b.lightMap,Qt=!!b.bumpMap&&b.wireframe===!1,te=!!b.normalMap,ye=!!b.displacementMap,Ne=!!b.emissiveMap,Re=!!b.metalnessMap,Ue=!!b.roughnessMap,H=b.anisotropy>0,Ve=b.clearcoat>0,me=b.dispersion>0,U=b.retroreflectivity>0,v=b.iridescence>0,Z=b.sheen>0,nt=b.transmission>0,at=H&&!!b.anisotropyMap,Et=Ve&&!!b.clearcoatMap,Rt=Ve&&!!b.clearcoatNormalMap,ut=Ve&&!!b.clearcoatRoughnessMap,dt=v&&!!b.iridescenceMap,Ct=v&&!!b.iridescenceThicknessMap,Jt=Z&&!!b.sheenColorMap,Nt=Z&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,Kt=!!b.specularColorMap,ne=!!b.specularIntensityMap,de=nt&&!!b.transmissionMap,V=nt&&!!b.thicknessMap,It=!!b.gradientMap,ht=!!b.alphaMap,Tt=b.alphaTest>0,Ft=!!b.alphaHash,gt=!!b.extensions,Zt=ci;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Zt=n.toneMapping);let $t={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:Ut,fragmentShader:Mt,defines:b.defines,customVertexShaderID:At,customFragmentShaderID:k,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:xt,batchingColor:xt&&K._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&K.instanceColor!==null,instancingMorph:Pt&&K.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:se,envMap:lt,envMapMode:lt&&rt.mapping,envMapCubeUVHeight:Y,aoMap:ee,lightMap:qt,bumpMap:Qt,normalMap:te,displacementMap:ye,emissiveMap:Ne,normalMapObjectSpace:te&&b.normalMapType===dp,normalMapTangentSpace:te&&b.normalMapType===Jh,packedNormalMap:te&&b.normalMapType===Jh&&PM(b.normalMap.format),metalnessMap:Re,roughnessMap:Ue,anisotropy:H,anisotropyMap:at,clearcoat:Ve,clearcoatMap:Et,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ut,dispersion:me,retroreflection:U,iridescence:v,iridescenceMap:dt,iridescenceThicknessMap:Ct,sheen:Z,sheenColorMap:Jt,sheenRoughnessMap:Nt,specularMap:Dt,specularColorMap:Kt,specularIntensityMap:ne,transmission:nt,transmissionMap:de,thicknessMap:V,gradientMap:It,opaque:b.transparent===!1&&b.blending===dr&&b.alphaToCoverage===!1,alphaMap:ht,alphaTest:Tt,alphaHash:Ft,combine:b.combine,mapUv:Lt&&_(b.map.channel),aoMapUv:ee&&_(b.aoMap.channel),lightMapUv:qt&&_(b.lightMap.channel),bumpMapUv:Qt&&_(b.bumpMap.channel),normalMapUv:te&&_(b.normalMap.channel),displacementMapUv:ye&&_(b.displacementMap.channel),emissiveMapUv:Ne&&_(b.emissiveMap.channel),metalnessMapUv:Re&&_(b.metalnessMap.channel),roughnessMapUv:Ue&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:Et&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(b.sheenRoughnessMap.channel),specularMapUv:Dt&&_(b.specularMap.channel),specularColorMapUv:Kt&&_(b.specularColorMap.channel),specularIntensityMapUv:ne&&_(b.specularIntensityMap.channel),transmissionMapUv:de&&_(b.transmissionMap.channel),thicknessMapUv:V&&_(b.thicknessMap.channel),alphaMapUv:ht&&_(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(te||H),vertexNormals:!!z.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!z.attributes.uv&&(Lt||ht),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||z.attributes.normal===void 0&&te===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:bt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:Ne&&b.emissiveMap.isVideoTexture===!0&&be.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Jn,flipSided:b.side===Rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:gt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&b.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function g(b){let A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(let F in b.defines)A.push(F),A.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(A,b),C(A,b),A.push(n.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function x(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numSunLights),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numSunLightShadows),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function C(b,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function L(b){let A=f[b.type],F;if(A){let B=Ii[A];F=Tp.clone(B.uniforms)}else F=b.uniforms;return F}function T(b,A){let F=p.get(A);return F!==void 0?++F.usedTimes:(F=new RM(n,A,b,s),c.push(F),p.set(A,F)),F}function S(b){if(--b.usedTimes===0){let A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),p.delete(b.cacheKey),b.destroy()}}function R(b){a.remove(b)}function N(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:L,acquireProgram:T,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:N}}function DM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function NM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $p(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(m){let f=0;return m.isInstancedMesh&&(f+=2),m.isSkinnedMesh&&(f+=1),f}function a(m,f,_,y,g,x){let C=n[t];return C===void 0?(C={id:m.id,object:m,geometry:f,material:_,materialVariant:o(m),groupOrder:y,renderOrder:m.renderOrder,z:g,group:x},n[t]=C):(C.id=m.id,C.object=m,C.geometry=f,C.material=_,C.materialVariant=o(m),C.groupOrder=y,C.renderOrder=m.renderOrder,C.z=g,C.group=x),t++,C}function l(m,f,_,y,g,x,C){C.reversedDepth===!0&&(g=-g);let L=a(m,f,_,y,g,x);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):e.push(L)}function c(m,f,_,y,g,x){let C=a(m,f,_,y,g,x);_.transmission>0?i.unshift(C):_.transparent===!0?s.unshift(C):e.unshift(C)}function p(m,f){e.length>1&&e.sort(m||NM),i.length>1&&i.sort(f||Yp),s.length>1&&s.sort(f||Yp)}function d(){for(let m=t,f=n.length;m<f;m++){let _=n[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:p}}function UM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new $p,n.set(i,[o])):s>=r.length?(o=new $p,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function FM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new ce};break;case"SpotLight":e={position:new j,direction:new j,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function OM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var BM=0;function zM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kM(n){let t=new FM,e=OM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);let s=new j,r=new qe,o=new qe;function a(c){let p=0,d=0,m=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let f=0,_=0,y=0,g=0,x=0,C=0,L=0,T=0,S=0,R=0,N=0,b=0,A=0,F=0;c.sort(zM);for(let K=0,J=c.length;K<J;K++){let O=c[K],z=O.color,q=O.intensity,$=O.distance,rt=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===_s?rt=O.shadow.map.texture:rt=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)p+=z.r*q,d+=z.g*q,m+=z.b*q;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],q);F++}else if(O.isSunLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[_]=ot,i.sunShadowMap[_]=rt;let wt=et.getViewportCount();for(let bt=0;bt<wt;bt++)i.sunShadowMatrix[y+bt]=et.getMatrix(bt),i.sunShadowCascade[y+bt]=et._cascadeData[bt];y+=wt,_++}i.sun[f]=Y,f++}else if(O.isDirectionalLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,i.directionalShadow[g]=ot,i.directionalShadowMap[g]=rt,i.directionalShadowMatrix[g]=O.shadow.matrix,S++}i.directional[g]=Y,g++}else if(O.isSpotLight){let Y=t.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(z).multiplyScalar(q),Y.distance=$,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[C]=Y;let et=O.shadow;if(O.map&&(i.spotLightMap[b]=O.map,b++,et.updateMatrices(O),O.castShadow&&A++),i.spotLightMatrix[C]=et.matrix,O.castShadow){let ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,i.spotShadow[C]=ot,i.spotShadowMap[C]=rt,N++}C++}else if(O.isRectAreaLight){let Y=t.get(O);Y.color.copy(z).multiplyScalar(q),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[L]=Y,L++}else if(O.isPointLight){let Y=t.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){let et=O.shadow,ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,ot.shadowCameraNear=et.camera.near,ot.shadowCameraFar=et.camera.far,i.pointShadow[x]=ot,i.pointShadowMap[x]=rt,i.pointShadowMatrix[x]=O.shadow.matrix,R++}i.point[x]=Y,x++}else if(O.isHemisphereLight){let Y=t.get(O);Y.skyColor.copy(O.color).multiplyScalar(q),Y.groundColor.copy(O.groundColor).multiplyScalar(q),i.hemi[T]=Y,T++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=m;let B=i.hash;(B.sunLength!==f||B.directionalLength!==g||B.pointLength!==x||B.spotLength!==C||B.rectAreaLength!==L||B.hemiLength!==T||B.numSunShadows!==_||B.numDirectionalShadows!==S||B.numPointShadows!==R||B.numSpotShadows!==N||B.numSpotMaps!==b||B.numLightProbes!==F)&&(i.sun.length=f,i.directional.length=g,i.spot.length=C,i.rectArea.length=L,i.point.length=x,i.hemi.length=T,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=F,B.sunLength=f,B.directionalLength=g,B.pointLength=x,B.spotLength=C,B.rectAreaLength=L,B.hemiLength=T,B.numSunShadows=_,B.numDirectionalShadows=S,B.numPointShadows=R,B.numSpotShadows=N,B.numSpotMaps=b,B.numLightProbes=F,i.version=BM++)}function l(c,p){let d=0,m=0,f=0,_=0,y=0,g=0,x=p.matrixWorldInverse;for(let C=0,L=c.length;C<L;C++){let T=c[C];if(T.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),d++}else if(T.isDirectionalLight){let S=i.directional[m];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),m++}else if(T.isSpotLight){let S=i.spot[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),_++}else if(T.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(T.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(T.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(x),f++}else if(T.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(x),g++}}}return{setup:a,setupView:l,state:i}}function Zp(n){let t=new kM(n),e=[],i=[],s=[];function r(m){d.camera=m,e.length=0,i.length=0,s.length=0}function o(m){e.push(m)}function a(m){i.push(m)}function l(m){s.push(m)}function c(){t.setup(e)}function p(m){t.setupView(e,m)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function VM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Zp(n),t.set(s,[a])):r>=o.length?(a=new Zp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WM=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],XM=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Jp=new qe,bo=new j,du=new j;function qM(n,t,e){let i=new no,s=new _e,r=new _e,o=new Ze,a=new ja,l=new Qa,c={},p=e.maxTextureSize,d={[ps]:Rn,[Rn]:ps,[Jn]:Jn},m=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:HM,fragmentShader:GM}),f=m.clone();f.defines.HORIZONTAL_PASS=1;let _=new an;_.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Oe(_,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let x=this.type;this.render=function(R,N,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===Wd&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let A=n.getRenderTarget(),F=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Ci),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let J=x!==this.type;J&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(z=>z.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,z=R.length;O<z;O++){let q=R[O],$=q.shadow;if($===void 0){ae("WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let rt=$.getFrameExtents();s.multiply(rt),r.copy($.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/rt.x),s.x=r.x*rt.x,$.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/rt.y),s.y=r.y*rt.y,$.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=Y,$.map===null||J===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===fr){if(q.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ln(s.x,s.y,{format:_s,type:fi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),$.map.texture.name=q.name+".shadowMap",$.map.depthTexture=new hs(s.x,s.y,ui),$.map.depthTexture.name=q.name+".shadowMapDepth",$.map.depthTexture.format=wi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un}else q.isPointLight?($.map=new ic(s.x),$.map.depthTexture=new Ja(s.x,hi)):($.map=new Ln(s.x,s.y),$.map.depthTexture=new hs(s.x,s.y,hi)),$.map.depthTexture.name=q.name+".shadowMap",$.map.depthTexture.format=wi,this.type===uo?($.map.depthTexture.compareFunction=Y?Ql:jl,$.map.depthTexture.minFilter=rn,$.map.depthTexture.magFilter=rn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=un,$.map.depthTexture.magFilter=un);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let et=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();q.isPointLight!==!0&&$.updateMatrices(q,b);for(let ot=0;ot<et;ot++){let wt=$.getCamera(ot);if(q.isPointLight){let bt=$.camera,Ut=$.matrix,Mt=q.distance||bt.far;Mt!==bt.far&&(bt.far=Mt,bt.updateProjectionMatrix()),bo.setFromMatrixPosition(q.matrixWorld),bt.position.copy(bo),du.copy(bt.position),du.add(WM[ot]),bt.up.copy(XM[ot]),bt.lookAt(du),bt.updateMatrixWorld(),Ut.makeTranslation(-bo.x,-bo.y,-bo.z),Jp.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Jp,bt.coordinateSystem,bt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ot),n.clear();else{ot===0&&(n.setRenderTarget($.map),n.clear());let bt=$.getViewport(ot);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),K.viewport(o)}i=$.getFrustum(ot),T(N,b,wt,q,this.type)}$.isPointLightShadow!==!0&&this.type===fr&&C($,b),$.needsUpdate=!1}x=this.type,g.needsUpdate=!1,n.setRenderTarget(A,F,B)};function C(R,N){let b=t.update(y);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Ln(s.x,s.y,{format:_s,type:fi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(N,null,b,m,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(N,null,b,f,y,null)}function L(R,N,b,A){let F=null,B=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)F=B;else if(F=b.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let K=F.uuid,J=N.uuid,O=c[K];O===void 0&&(O={},c[K]=O);let z=O[J];z===void 0&&(z=F.clone(),O[J]=z,N.addEventListener("dispose",S)),F=z}if(F.visible=N.visible,F.wireframe=N.wireframe,A===fr?F.side=N.shadowSide!==null?N.shadowSide:N.side:F.side=N.shadowSide!==null?N.shadowSide:d[N.side],F.alphaMap=N.alphaMap,F.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,F.map=N.map,F.clipShadows=N.clipShadows,F.clippingPlanes=N.clippingPlanes,F.clipIntersection=N.clipIntersection,F.displacementMap=N.displacementMap,F.displacementScale=N.displacementScale,F.displacementBias=N.displacementBias,F.wireframeLinewidth=N.wireframeLinewidth,F.linewidth=N.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let K=n.properties.get(F);K.light=b}return F}function T(R,N,b,A,F){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&F===fr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);let J=t.update(R),O=R.material;if(Array.isArray(O)){let z=J.groups;for(let q=0,$=z.length;q<$;q++){let rt=z[q],Y=O[rt.materialIndex];if(Y&&Y.visible){let et=L(R,Y,A,F);R.onBeforeShadow(n,R,N,b,J,et,rt),n.renderBufferDirect(b,null,J,et,R,rt),R.onAfterShadow(n,R,N,b,J,et,rt)}}}else if(O.visible){let z=L(R,O,A,F);R.onBeforeShadow(n,R,N,b,J,z,null),n.renderBufferDirect(b,null,J,z,R,null),R.onAfterShadow(n,R,N,b,J,z,null)}}let K=R.children;for(let J=0,O=K.length;J<O;J++)T(K[J],N,b,A,F)}function S(R){R.target.removeEventListener("dispose",S);for(let b in c){let A=c[b],F=R.target.uuid;F in A&&(A[F].dispose(),delete A[F])}}}function YM(n,t){function e(){let V=!1,It=new Ze,ht=null,Tt=new Ze(0,0,0,0);return{setMask:function(Ft){ht!==Ft&&!V&&(n.colorMask(Ft,Ft,Ft,Ft),ht=Ft)},setLocked:function(Ft){V=Ft},setClear:function(Ft,gt,Zt,$t,Te){Te===!0&&(Ft*=$t,gt*=$t,Zt*=$t),It.set(Ft,gt,Zt,$t),Tt.equals(It)===!1&&(n.clearColor(Ft,gt,Zt,$t),Tt.copy(It))},reset:function(){V=!1,ht=null,Tt.set(-1,0,0,0)}}}function i(){let V=!1,It=!1,ht=null,Tt=null,Ft=null;return{setReversed:function(gt){if(It!==gt){let Zt=t.get("EXT_clip_control");gt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),It=gt;let $t=Ft;Ft=null,this.setClear($t)}},getReversed:function(){return It},setTest:function(gt){gt?Q(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(gt){ht!==gt&&!V&&(n.depthMask(gt),ht=gt)},setFunc:function(gt){if(It&&(gt=wp[gt]),Tt!==gt){switch(gt){case Pa:n.depthFunc(n.NEVER);break;case La:n.depthFunc(n.ALWAYS);break;case Da:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case Na:n.depthFunc(n.EQUAL);break;case Ua:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Tt=gt}},setLocked:function(gt){V=gt},setClear:function(gt){Ft!==gt&&(Ft=gt,It&&(gt=1-gt),n.clearDepth(gt))},reset:function(){V=!1,ht=null,Tt=null,Ft=null,It=!1}}}function s(){let V=!1,It=null,ht=null,Tt=null,Ft=null,gt=null,Zt=null,$t=null,Te=null;return{setTest:function(Ee){V||(Ee?Q(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(Ee){It!==Ee&&!V&&(n.stencilMask(Ee),It=Ee)},setFunc:function(Ee,In,Wn){(ht!==Ee||Tt!==In||Ft!==Wn)&&(n.stencilFunc(Ee,In,Wn),ht=Ee,Tt=In,Ft=Wn)},setOp:function(Ee,In,Wn){(gt!==Ee||Zt!==In||$t!==Wn)&&(n.stencilOp(Ee,In,Wn),gt=Ee,Zt=In,$t=Wn)},setLocked:function(Ee){V=Ee},setClear:function(Ee){Te!==Ee&&(n.clearStencil(Ee),Te=Ee)},reset:function(){V=!1,It=null,ht=null,Tt=null,Ft=null,gt=null,Zt=null,$t=null,Te=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,p={},d={},m={},f=new WeakMap,_=[],y=null,g=!1,x=null,C=null,L=null,T=null,S=null,R=null,N=null,b=new ce(0,0,0),A=0,F=!1,B=null,K=null,J=null,O=null,z=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,rt=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=rt>=2);let et=null,ot={},wt=n.getParameter(n.SCISSOR_BOX),bt=n.getParameter(n.VIEWPORT),Ut=new Ze().fromArray(wt),Mt=new Ze().fromArray(bt);function At(V,It,ht,Tt){let Ft=new Uint8Array(4),gt=n.createTexture();n.bindTexture(V,gt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<ht;Zt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,Tt,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(It+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return gt}let k={};k[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),o.setFunc(or),Qt(!1),te(Ch),Q(n.CULL_FACE),ee(Ci);function Q(V){p[V]!==!0&&(n.enable(V),p[V]=!0)}function ft(V){p[V]!==!1&&(n.disable(V),p[V]=!1)}function Pt(V,It){return m[V]!==It?(n.bindFramebuffer(V,It),m[V]=It,V===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=It),V===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=It),!0):!1}function xt(V,It){let ht=_,Tt=!1;if(V){ht=f.get(It),ht===void 0&&(ht=[],f.set(It,ht));let Ft=V.textures;if(ht.length!==Ft.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Zt=Ft.length;gt<Zt;gt++)ht[gt]=n.COLOR_ATTACHMENT0+gt;ht.length=Ft.length,Tt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,Tt=!0);Tt&&n.drawBuffers(ht)}function Lt(V){return y!==V?(n.useProgram(V),y=V,!0):!1}let se={[Ds]:n.FUNC_ADD,[qd]:n.FUNC_SUBTRACT,[Yd]:n.FUNC_REVERSE_SUBTRACT};se[$d]=n.MIN,se[Zd]=n.MAX;let lt={[Jd]:n.ZERO,[Kd]:n.ONE,[jd]:n.SRC_COLOR,[Lh]:n.SRC_ALPHA,[sp]:n.SRC_ALPHA_SATURATE,[np]:n.DST_COLOR,[tp]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[ep]:n.ONE_MINUS_DST_ALPHA,[rp]:n.CONSTANT_COLOR,[op]:n.ONE_MINUS_CONSTANT_COLOR,[ap]:n.CONSTANT_ALPHA,[lp]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(V,It,ht,Tt,Ft,gt,Zt,$t,Te,Ee){if(V===Ci){g===!0&&(ft(n.BLEND),g=!1);return}if(g===!1&&(Q(n.BLEND),g=!0),V!==Xd){if(V!==x||Ee!==F){if((C!==Ds||S!==Ds)&&(n.blendEquation(n.FUNC_ADD),C=Ds,S=Ds),Ee)switch(V){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:le("WebGLState: Invalid blending: ",V);break}else switch(V){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ih:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",V);break}L=null,T=null,R=null,N=null,b.set(0,0,0),A=0,x=V,F=Ee}return}Ft=Ft||It,gt=gt||ht,Zt=Zt||Tt,(It!==C||Ft!==S)&&(n.blendEquationSeparate(se[It],se[Ft]),C=It,S=Ft),(ht!==L||Tt!==T||gt!==R||Zt!==N)&&(n.blendFuncSeparate(lt[ht],lt[Tt],lt[gt],lt[Zt]),L=ht,T=Tt,R=gt,N=Zt),($t.equals(b)===!1||Te!==A)&&(n.blendColor($t.r,$t.g,$t.b,Te),b.copy($t),A=Te),x=V,F=!1}function qt(V,It){V.side===Jn?ft(n.CULL_FACE):Q(n.CULL_FACE);let ht=V.side===Rn;It&&(ht=!ht),Qt(ht),V.blending===dr&&V.transparent===!1?ee(Ci):ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Tt=V.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ne(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(V){B!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),B=V)}function te(V){V!==Hd?(Q(n.CULL_FACE),V!==K&&(V===Ch?n.cullFace(n.BACK):V===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),K=V}function ye(V){V!==J&&($&&n.lineWidth(V),J=V)}function Ne(V,It,ht){V?(Q(n.POLYGON_OFFSET_FILL),(O!==It||z!==ht)&&(O=It,z=ht,o.getReversed()&&(It=-It),n.polygonOffset(It,ht))):ft(n.POLYGON_OFFSET_FILL)}function Re(V){V?Q(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function Ue(V){V===void 0&&(V=n.TEXTURE0+q-1),et!==V&&(n.activeTexture(V),et=V)}function H(V,It,ht){ht===void 0&&(et===null?ht=n.TEXTURE0+q-1:ht=et);let Tt=ot[ht];Tt===void 0&&(Tt={type:void 0,texture:void 0},ot[ht]=Tt),(Tt.type!==V||Tt.texture!==It)&&(et!==ht&&(n.activeTexture(ht),et=ht),n.bindTexture(V,It||k[V]),Tt.type=V,Tt.texture=It)}function Ve(){let V=ot[et];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function v(){try{n.texSubImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function Z(){try{n.texSubImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function at(){try{n.compressedTexSubImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function Et(){try{n.texStorage2D(...arguments)}catch(V){le("WebGLState:",V)}}function Rt(){try{n.texStorage3D(...arguments)}catch(V){le("WebGLState:",V)}}function ut(){try{n.texImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function dt(){try{n.texImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function Ct(V){return d[V]!==void 0?d[V]:n.getParameter(V)}function Jt(V,It){d[V]!==It&&(n.pixelStorei(V,It),d[V]=It)}function Nt(V){Ut.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ut.copy(V))}function Dt(V){Mt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Mt.copy(V))}function Kt(V,It){let ht=c.get(It);ht===void 0&&(ht=new WeakMap,c.set(It,ht));let Tt=ht.get(V);Tt===void 0&&(Tt=n.getUniformBlockIndex(It,V.name),ht.set(V,Tt))}function ne(V,It){let Tt=c.get(It).get(V);l.get(It)!==Tt&&(n.uniformBlockBinding(It,Tt,V.__bindingPointIndex),l.set(It,Tt))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},d={},et=null,ot={},m={},f=new WeakMap,_=[],y=null,g=!1,x=null,C=null,L=null,T=null,S=null,R=null,N=null,b=new ce(0,0,0),A=0,F=!1,B=null,K=null,J=null,O=null,z=null,Ut.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ft,bindFramebuffer:Pt,drawBuffers:xt,useProgram:Lt,setBlending:ee,setMaterial:qt,setFlipSided:Qt,setCullFace:te,setLineWidth:ye,setPolygonOffset:Ne,setScissorTest:Re,activeTexture:Ue,bindTexture:H,unbindTexture:Ve,compressedTexImage2D:me,compressedTexImage3D:U,texImage2D:ut,texImage3D:dt,pixelStorei:Jt,getParameter:Ct,updateUBOMapping:Kt,uniformBlockBinding:ne,texStorage2D:Et,texStorage3D:Rt,texSubImage2D:v,texSubImage3D:Z,compressedTexSubImage2D:nt,compressedTexSubImage3D:at,scissor:Nt,viewport:Dt,reset:de}}function $M(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,p=new WeakMap,d=new Set,m,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,v){return _?new OffscreenCanvas(U,v):$r("canvas")}function g(U,v,Z){let nt=1,at=me(U);if((at.width>Z||at.height>Z)&&(nt=Z/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Et=Math.floor(nt*at.width),Rt=Math.floor(nt*at.height);m===void 0&&(m=y(Et,Rt));let ut=v?y(Et,Rt):m;return ut.width=Et,ut.height=Rt,ut.getContext("2d").drawImage(U,0,0,Et,Rt),ae("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Et+"x"+Rt+")."),ut}else return"data"in U&&ae("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),U;return U}function x(U){return U.generateMipmaps}function C(U){n.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(U,v,Z,nt,at,Et=!1){if(U!==null){if(n[U]!==void 0)return n[U];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Rt;nt&&(Rt=t.get("EXT_texture_norm16"),Rt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=v;if(v===n.RED&&(Z===n.FLOAT&&(ut=n.R32F),Z===n.HALF_FLOAT&&(ut=n.R16F),Z===n.UNSIGNED_BYTE&&(ut=n.R8),Z===n.UNSIGNED_SHORT&&Rt&&(ut=Rt.R16_EXT),Z===n.SHORT&&Rt&&(ut=Rt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ut=n.R8UI),Z===n.UNSIGNED_SHORT&&(ut=n.R16UI),Z===n.UNSIGNED_INT&&(ut=n.R32UI),Z===n.BYTE&&(ut=n.R8I),Z===n.SHORT&&(ut=n.R16I),Z===n.INT&&(ut=n.R32I)),v===n.RG&&(Z===n.FLOAT&&(ut=n.RG32F),Z===n.HALF_FLOAT&&(ut=n.RG16F),Z===n.UNSIGNED_BYTE&&(ut=n.RG8),Z===n.UNSIGNED_SHORT&&Rt&&(ut=Rt.RG16_EXT),Z===n.SHORT&&Rt&&(ut=Rt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ut=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ut=n.RG16UI),Z===n.UNSIGNED_INT&&(ut=n.RG32UI),Z===n.BYTE&&(ut=n.RG8I),Z===n.SHORT&&(ut=n.RG16I),Z===n.INT&&(ut=n.RG32I)),v===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ut=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ut=n.RGB16UI),Z===n.UNSIGNED_INT&&(ut=n.RGB32UI),Z===n.BYTE&&(ut=n.RGB8I),Z===n.SHORT&&(ut=n.RGB16I),Z===n.INT&&(ut=n.RGB32I)),v===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ut=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ut=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ut=n.RGBA32UI),Z===n.BYTE&&(ut=n.RGBA8I),Z===n.SHORT&&(ut=n.RGBA16I),Z===n.INT&&(ut=n.RGBA32I)),v===n.RGB&&(Z===n.UNSIGNED_SHORT&&Rt&&(ut=Rt.RGB16_EXT),Z===n.SHORT&&Rt&&(ut=Rt.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ut=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ut=n.R11F_G11F_B10F)),v===n.RGBA){let dt=Et?qr:be.getTransfer(at);Z===n.FLOAT&&(ut=n.RGBA32F),Z===n.HALF_FLOAT&&(ut=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ut=dt===Fe?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Rt&&(ut=Rt.RGBA16_EXT),Z===n.SHORT&&Rt&&(ut=Rt.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ut=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ut=n.RGB5_A1)}return(ut===n.R16F||ut===n.R32F||ut===n.RG16F||ut===n.RG32F||ut===n.RGBA16F||ut===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function S(U,v){let Z;return U?v===null||v===hi||v===mr?Z=n.DEPTH24_STENCIL8:v===ui?Z=n.DEPTH32F_STENCIL8:v===pr&&(Z=n.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hi||v===mr?Z=n.DEPTH_COMPONENT24:v===ui?Z=n.DEPTH_COMPONENT32F:v===pr&&(Z=n.DEPTH_COMPONENT16),Z}function R(U,v){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==un&&U.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?v.mipmaps.length:1}function N(U){let v=U.target;v.removeEventListener("dispose",N),A(v),v.isVideoTexture&&p.delete(v),v.isHTMLTexture&&d.delete(v)}function b(U){let v=U.target;v.removeEventListener("dispose",b),B(v)}function A(U){let v=i.get(U);if(v.__webglInit===void 0)return;let Z=U.source,nt=f.get(Z);if(nt){let at=nt[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&F(U),Object.keys(nt).length===0&&f.delete(Z)}i.remove(U)}function F(U){let v=i.get(U);n.deleteTexture(v.__webglTexture);let Z=U.source,nt=f.get(Z);delete nt[v.__cacheKey],o.memory.textures--}function B(U){let v=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let at=0;at<v.__webglFramebuffer[nt].length;at++)n.deleteFramebuffer(v.__webglFramebuffer[nt][at]);else n.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)n.deleteFramebuffer(v.__webglFramebuffer[nt]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=U.textures;for(let nt=0,at=Z.length;nt<at;nt++){let Et=i.get(Z[nt]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(Z[nt])}i.remove(U)}let K=0;function J(){K=0}function O(){return K}function z(U){K=U}function q(){let U=K;return U>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,U}function $(U){let v=[];return v.push(U.wrapS),v.push(U.wrapT),v.push(U.wrapR||0),v.push(U.magFilter),v.push(U.minFilter),v.push(U.anisotropy),v.push(U.internalFormat),v.push(U.format),v.push(U.type),v.push(U.generateMipmaps),v.push(U.premultiplyAlpha),v.push(U.flipY),v.push(U.unpackAlignment),v.push(U.colorSpace),v.join()}function rt(U,v){let Z=i.get(U);if(U.isVideoTexture&&H(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){let nt=U.image;if(nt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(Z,U,v);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+v)}function Y(U,v){let Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){ft(Z,U,v);return}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+v)}function et(U,v){let Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){ft(Z,U,v);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+v)}function ot(U,v){let Z=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Z.__version!==U.version){Pt(Z,U,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+v)}let wt={[Ba]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},bt={[un]:n.NEAREST,[up]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[ml]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},Ut={[mp]:n.NEVER,[vp]:n.ALWAYS,[gp]:n.LESS,[jl]:n.LEQUAL,[xp]:n.EQUAL,[Ql]:n.GEQUAL,[_p]:n.GREATER,[yp]:n.NOTEQUAL};function Mt(U,v){if(v.type===ui&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===ml||v.magFilter===po||v.magFilter===gs||v.minFilter===rn||v.minFilter===ml||v.minFilter===po||v.minFilter===gs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,wt[v.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,wt[v.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,wt[v.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,bt[v.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,bt[v.minFilter]),v.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==po&&v.minFilter!==gs||v.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function At(U,v){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,v.addEventListener("dispose",N));let nt=v.source,at=f.get(nt);at===void 0&&(at={},f.set(nt,at));let Et=$(v);if(Et!==U.__cacheKey){at[Et]===void 0&&(at[Et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),at[Et].usedTimes++;let Rt=at[U.__cacheKey];Rt!==void 0&&(at[U.__cacheKey].usedTimes--,Rt.usedTimes===0&&F(v)),U.__cacheKey=Et,U.__webglTexture=at[Et].texture}return Z}function k(U,v,Z){return Math.floor(Math.floor(U/Z)/v)}function Q(U,v,Z,nt){let Et=U.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Z,nt,v.data);else{Et.sort((Jt,Nt)=>Jt.start-Nt.start);let Rt=0;for(let Jt=1;Jt<Et.length;Jt++){let Nt=Et[Rt],Dt=Et[Jt],Kt=Nt.start+Nt.count,ne=k(Dt.start,v.width,4),de=k(Nt.start,v.width,4);Dt.start<=Kt+1&&ne===de&&k(Dt.start+Dt.count-1,v.width,4)===ne?Nt.count=Math.max(Nt.count,Dt.start+Dt.count-Nt.start):(++Rt,Et[Rt]=Dt)}Et.length=Rt+1;let ut=e.getParameter(n.UNPACK_ROW_LENGTH),dt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Jt=0,Nt=Et.length;Jt<Nt;Jt++){let Dt=Et[Jt],Kt=Math.floor(Dt.start/4),ne=Math.ceil(Dt.count/4),de=Kt%v.width,V=Math.floor(Kt/v.width),It=ne,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,de),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,de,V,It,ht,Z,nt,v.data)}U.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ut),e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function ft(U,v,Z){let nt=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=n.TEXTURE_3D);let at=At(U,v),Et=v.source;e.bindTexture(nt,U.__webglTexture,n.TEXTURE0+Z);let Rt=i.get(Et);if(Et.version!==Rt.__version||at===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ht=be.getPrimaries(be.workingColorSpace),Tt=v.colorSpace===Gi?null:be.getPrimaries(v.colorSpace),Ft=v.colorSpace===Gi||ht===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let dt=g(v.image,!1,s.maxTextureSize);dt=Ve(v,dt);let Ct=r.convert(v.format,v.colorSpace),Jt=r.convert(v.type),Nt=T(v.internalFormat,Ct,Jt,v.normalized,v.colorSpace,v.isVideoTexture);Mt(nt,v);let Dt,Kt=v.mipmaps,ne=v.isVideoTexture!==!0,de=Rt.__version===void 0||at===!0,V=Et.dataReady,It=R(v,dt);if(v.isDepthTexture)Nt=S(v.format===xs,v.type),de&&(ne?e.texStorage2D(n.TEXTURE_2D,1,Nt,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Ct,Jt,null));else if(v.isDataTexture)if(Kt.length>0){ne&&de&&e.texStorage2D(n.TEXTURE_2D,It,Nt,Kt[0].width,Kt[0].height);for(let ht=0,Tt=Kt.length;ht<Tt;ht++)Dt=Kt[ht],ne?V&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Ct,Jt,Dt.data):e.texImage2D(n.TEXTURE_2D,ht,Nt,Dt.width,Dt.height,0,Ct,Jt,Dt.data);v.generateMipmaps=!1}else ne?(de&&e.texStorage2D(n.TEXTURE_2D,It,Nt,dt.width,dt.height),V&&Q(v,dt,Ct,Jt)):e.texImage2D(n.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Ct,Jt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ne&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Nt,Kt[0].width,Kt[0].height,dt.depth);for(let ht=0,Tt=Kt.length;ht<Tt;ht++)if(Dt=Kt[ht],v.format!==Kn)if(Ct!==null)if(ne){if(V)if(v.layerUpdates.size>0){let Ft=nu(Dt.width,Dt.height,v.format,v.type);for(let gt of v.layerUpdates){let Zt=Dt.data.subarray(gt*Ft/Dt.data.BYTES_PER_ELEMENT,(gt+1)*Ft/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,gt,Dt.width,Dt.height,1,Ct,Zt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Dt.width,Dt.height,dt.depth,Ct,Dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,Nt,Dt.width,Dt.height,dt.depth,0,Dt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Dt.width,Dt.height,dt.depth,Ct,Jt,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,Nt,Dt.width,Dt.height,dt.depth,0,Ct,Jt,Dt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ne&&de&&e.texStorage2D(n.TEXTURE_2D,It,Nt,Kt[0].width,Kt[0].height);for(let ht=0,Tt=Kt.length;ht<Tt;ht++)Dt=Kt[ht],v.format!==Kn?Ct!==null?ne?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Ct,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,Nt,Dt.width,Dt.height,0,Dt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Dt.width,Dt.height,Ct,Jt,Dt.data):e.texImage2D(n.TEXTURE_2D,ht,Nt,Dt.width,Dt.height,0,Ct,Jt,Dt.data)}else if(v.isDataArrayTexture)if(ne){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Nt,dt.width,dt.height,dt.depth),V)if(v.layerUpdates.size>0){let ht=nu(dt.width,dt.height,v.format,v.type);for(let Tt of v.layerUpdates){let Ft=dt.data.subarray(Tt*ht/dt.data.BYTES_PER_ELEMENT,(Tt+1)*ht/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Tt,dt.width,dt.height,1,Ct,Jt,Ft)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Jt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,Ct,Jt,dt.data);else if(v.isData3DTexture)ne?(de&&e.texStorage3D(n.TEXTURE_3D,It,Nt,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ct,Jt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,Ct,Jt,dt.data);else if(v.isFramebufferTexture){if(de)if(ne)e.texStorage2D(n.TEXTURE_2D,It,Nt,dt.width,dt.height);else{let ht=dt.width,Tt=dt.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Nt,ht,Tt,0,Ct,Jt,null),ht>>=1,Tt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),dt.parentNode!==ht){ht.appendChild(dt),d.add(v),ht.onpaint=Tt=>{let Ft=Tt.changedElements;for(let gt of d)Ft.includes(gt.image)&&(gt.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,dt);else{let Ft=n.RGBA,gt=n.RGBA,Zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ft,gt,Zt,dt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(ne&&de){let ht=me(Kt[0]);e.texStorage2D(n.TEXTURE_2D,It,Nt,ht.width,ht.height)}for(let ht=0,Tt=Kt.length;ht<Tt;ht++)Dt=Kt[ht],ne?V&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Ct,Jt,Dt):e.texImage2D(n.TEXTURE_2D,ht,Nt,Ct,Jt,Dt);v.generateMipmaps=!1}else if(ne){if(de){let ht=me(dt);e.texStorage2D(n.TEXTURE_2D,It,Nt,ht.width,ht.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Jt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Nt,Ct,Jt,dt);x(v)&&C(nt),Rt.__version=Et.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function Pt(U,v,Z){if(v.image.length!==6)return;let nt=At(U,v),at=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+Z);let Et=i.get(at);if(at.version!==Et.__version||nt===!0){e.activeTexture(n.TEXTURE0+Z);let Rt=be.getPrimaries(be.workingColorSpace),ut=v.colorSpace===Gi?null:be.getPrimaries(v.colorSpace),dt=v.colorSpace===Gi||Rt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Jt=v.image[0]&&v.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!Ct&&!Jt?Nt[gt]=g(v.image[gt],!0,s.maxCubemapSize):Nt[gt]=Jt?v.image[gt].image:v.image[gt],Nt[gt]=Ve(v,Nt[gt]);let Dt=Nt[0],Kt=r.convert(v.format,v.colorSpace),ne=r.convert(v.type),de=T(v.internalFormat,Kt,ne,v.normalized,v.colorSpace),V=v.isVideoTexture!==!0,It=Et.__version===void 0||nt===!0,ht=at.dataReady,Tt=R(v,Dt);Mt(n.TEXTURE_CUBE_MAP,v);let Ft;if(Ct){V&&It&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,de,Dt.width,Dt.height);for(let gt=0;gt<6;gt++){Ft=Nt[gt].mipmaps;for(let Zt=0;Zt<Ft.length;Zt++){let $t=Ft[Zt];v.format!==Kn?Kt!==null?V?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,$t.width,$t.height,Kt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,de,$t.width,$t.height,0,$t.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,0,0,$t.width,$t.height,Kt,ne,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt,de,$t.width,$t.height,0,Kt,ne,$t.data)}}}else{if(Ft=v.mipmaps,V&&It){Ft.length>0&&Tt++;let gt=me(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,de,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Jt){V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,Kt,ne,Nt[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,Nt[gt].width,Nt[gt].height,0,Kt,ne,Nt[gt].data);for(let Zt=0;Zt<Ft.length;Zt++){let Te=Ft[Zt].image[gt].image;V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,Te.width,Te.height,Kt,ne,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,de,Te.width,Te.height,0,Kt,ne,Te.data)}}else{V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Kt,ne,Nt[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,de,Kt,ne,Nt[gt]);for(let Zt=0;Zt<Ft.length;Zt++){let $t=Ft[Zt];V?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,0,0,Kt,ne,$t.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Zt+1,de,Kt,ne,$t.image[gt])}}}x(v)&&C(n.TEXTURE_CUBE_MAP),Et.__version=at.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function xt(U,v,Z,nt,at,Et){let Rt=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),dt=T(Z.internalFormat,Rt,ut,Z.normalized,Z.colorSpace),Ct=i.get(v),Jt=i.get(Z);if(Jt.__renderTarget=v,!Ct.__hasExternalTextures){let Nt=Math.max(1,v.width>>Et),Dt=Math.max(1,v.height>>Et);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,Et,dt,Nt,Dt,v.depth,0,Rt,ut,null):e.texImage2D(at,Et,dt,Nt,Dt,0,Rt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Ue(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,at,Jt.__webglTexture,0,Re(v)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,at,Jt.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(U,v,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,U),v.depthBuffer){let nt=v.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,Et=S(v.stencilBuffer,at),Rt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ue(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(v),Et,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(v),Et,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Et,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,U)}else{let nt=v.textures;for(let at=0;at<nt.length;at++){let Et=nt[at],Rt=r.convert(Et.format,Et.colorSpace),ut=r.convert(Et.type),dt=T(Et.internalFormat,Rt,ut,Et.normalized,Et.colorSpace);Ue(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(v),dt,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(v),dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,dt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(U,v,Z){let nt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(v.depthTexture);if(at.__renderTarget=v,(!at.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt){if(at.__webglInit===void 0&&(at.__webglInit=!0,v.depthTexture.addEventListener("dispose",N)),at.__webglTexture===void 0){at.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,v.depthTexture);let Ct=r.convert(v.depthTexture.format),Jt=r.convert(v.depthTexture.type),Nt;v.depthTexture.format===wi?Nt=n.DEPTH_COMPONENT24:v.depthTexture.format===xs&&(Nt=n.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Nt,v.width,v.height,0,Ct,Jt,null)}}else rt(v.depthTexture,0);let Et=at.__webglTexture,Rt=Re(v),ut=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,dt=v.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===wi)Ue(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,ut,Et,0,Rt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,ut,Et,0);else if(v.depthTexture.format===xs)Ue(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,ut,Et,0,Rt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,ut,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(U){let v=i.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==U.depthTexture){let nt=U.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),nt){let at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=nt}if(U.depthTexture&&!v.__autoAllocateDepthBuffer)if(Z)for(let nt=0;nt<6;nt++)se(v.__webglFramebuffer[nt],U,nt);else{let nt=U.texture.mipmaps;nt&&nt.length>0?se(v.__webglFramebuffer[0],U,0):se(v.__webglFramebuffer,U,0)}else if(Z){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]===void 0)v.__webglDepthbuffer[nt]=n.createRenderbuffer(),Lt(v.__webglDepthbuffer[nt],U,!1);else{let at=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=v.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Et)}}else{let nt=U.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Lt(v.__webglDepthbuffer,U,!1);else{let at=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(U,v,Z){let nt=i.get(U);v!==void 0&&xt(nt.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&lt(U)}function qt(U){let v=U.texture,Z=i.get(U),nt=i.get(v);U.addEventListener("dispose",b);let at=U.textures,Et=U.isWebGLCubeRenderTarget===!0,Rt=at.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=v.version,o.memory.textures++),Et){Z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[ut]=[];for(let dt=0;dt<v.mipmaps.length;dt++)Z.__webglFramebuffer[ut][dt]=n.createFramebuffer()}else Z.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)Z.__webglFramebuffer[ut]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let ut=0,dt=at.length;ut<dt;ut++){let Ct=i.get(at[ut]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Ue(U)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){let dt=at[ut];Z.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ut]);let Ct=r.convert(dt.format,dt.colorSpace),Jt=r.convert(dt.type),Nt=T(dt.internalFormat,Ct,Jt,dt.normalized,dt.colorSpace,U.isXRRenderTarget===!0),Dt=Re(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,Nt,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(Z.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)xt(Z.__webglFramebuffer[ut][dt],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,dt);else xt(Z.__webglFramebuffer[ut],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);x(v)&&C(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,dt=at.length;ut<dt;ut++){let Ct=at[ut],Jt=i.get(Ct),Nt=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Nt,Jt.__webglTexture),Mt(Nt,Ct),xt(Z.__webglFramebuffer,U,Ct,n.COLOR_ATTACHMENT0+ut,Nt,0),x(Ct)&&C(Nt)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ut=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),Mt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)xt(Z.__webglFramebuffer[dt],U,v,n.COLOR_ATTACHMENT0,ut,dt);else xt(Z.__webglFramebuffer,U,v,n.COLOR_ATTACHMENT0,ut,0);x(v)&&C(ut),e.unbindTexture()}U.depthBuffer&&lt(U)}function Qt(U){let v=U.textures;for(let Z=0,nt=v.length;Z<nt;Z++){let at=v[Z];if(x(at)){let Et=L(U),Rt=i.get(at).__webglTexture;e.bindTexture(Et,Rt),C(Et),e.unbindTexture()}}}let te=[],ye=[];function Ne(U){if(U.samples>0){if(Ue(U)===!1){let v=U.textures,Z=U.width,nt=U.height,at=n.COLOR_BUFFER_BIT,Et=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(U),ut=v.length>1;if(ut)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let dt=U.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);let Jt=i.get(v[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,at,n.NEAREST),l===!0&&(te.length=0,ye.length=0,te.push(n.COLOR_ATTACHMENT0+Ct),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(te.push(Et),ye.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ct]);let Jt=i.get(v[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let v=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Re(U){return Math.min(s.maxSamples,U.samples)}function Ue(U){let v=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(U){let v=o.render.frame;p.get(U)!==v&&(p.set(U,v),U.update())}function Ve(U,v){let Z=U.colorSpace,nt=U.format,at=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==Xr&&Z!==Gi&&(be.getTransfer(Z)===Fe?(nt!==Kn||at!==kn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",Z)),v}function me(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=J,this.getTextureUnits=O,this.setTextureUnits=z,this.setTexture2D=rt,this.setTexture2DArray=Y,this.setTexture3D=et,this.setTextureCube=ot,this.rebindTextures=ee,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ZM(n,t){function e(i,s=Gi){let r,o=be.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_l)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===pr)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===$h)return n.RGB;if(i===Kn)return n.RGBA;if(i===wi)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Zh)return n.RED;if(i===yl)return n.RED_INTEGER;if(i===_s)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===Ml)return n.RGBA_INTEGER;if(i===mo||i===go||i===xo||i===_o)if(o===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===Sl||i===wl||i===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Tl||i===Cl||i===Rl||i===Il||i===yo||i===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===El||i===Tl)return o===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return r.COMPRESSED_R11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===yo)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return o===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Yl||i===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ql)return o===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Jl||i===vo||i===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mn({vertexShader:JM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends Ai{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,p=null,d=null,m=null,f=null,_=null,y=typeof XRWebGLBinding<"u",g=new Mu,x={},C=e.getContextAttributes(),L=null,T=null,S=[],R=[],N=new _e,b=null,A=null,F=new yn;F.viewport=new Ze;let B=new yn;B.viewport=new Ze;let K=[F,B],J=new ul,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=S[k];return Q===void 0&&(Q=new cr,S[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=S[k];return Q===void 0&&(Q=new cr,S[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=S[k];return Q===void 0&&(Q=new cr,S[k]=Q),Q.getHandSpace()};function q(k){let Q=R.indexOf(k.inputSource);if(Q===-1)return;let ft=S[Q];ft!==void 0&&(ft.update(k.inputSource,k.frame,c||o),ft.dispatchEvent({type:k.type,data:k.inputSource}))}function $(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",rt);for(let k=0;k<S.length;k++){let Q=R[k];Q!==null&&(R[k]=null,S[k].disconnect(Q))}O=null,z=null,g.reset();for(let k in x)delete x[k];if(t.setRenderTarget(L),f=null,m=null,d=null,s=null,T=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),A!==null){let k=A.camera;k.fov=A.fov,k.zoom=A.zoom,k.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",$),s.addEventListener("inputsourceschange",rt),C.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Pt=null,xt=null;C.depth&&(xt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=C.stencil?xs:wi,Pt=C.stencil?mr:hi);let Lt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),m=d.createProjectionLayer(Lt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),T=new Ln(m.textureWidth,m.textureHeight,{format:Kn,type:kn,depthTexture:new hs(m.textureWidth,m.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let ft={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(k){for(let Q=0;Q<k.removed.length;Q++){let ft=k.removed[Q],Pt=R.indexOf(ft);Pt>=0&&(R[Pt]=null,S[Pt].disconnect(ft))}for(let Q=0;Q<k.added.length;Q++){let ft=k.added[Q],Pt=R.indexOf(ft);if(Pt===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=R.length){R.push(ft),Pt=Lt;break}else if(R[Lt]===null){R[Lt]=ft,Pt=Lt;break}if(Pt===-1)break}let xt=S[Pt];xt&&xt.connect(ft)}}let Y=new j,et=new j;function ot(k,Q,ft){Y.setFromMatrixPosition(Q.matrixWorld),et.setFromMatrixPosition(ft.matrixWorld);let Pt=Y.distanceTo(et),xt=Q.projectionMatrix.elements,Lt=ft.projectionMatrix.elements,se=xt[14]/(xt[10]-1),lt=xt[14]/(xt[10]+1),ee=(xt[9]+1)/xt[5],qt=(xt[9]-1)/xt[5],Qt=(xt[8]-1)/xt[0],te=(Lt[8]+1)/Lt[0],ye=se*Qt,Ne=se*te,Re=Pt/(-Qt+te),Ue=Re*-Qt;if(Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ue),k.translateZ(Re),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),xt[10]===-1)k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let H=se+Re,Ve=lt+Re,me=ye-Ue,U=Ne+(Pt-Ue),v=ee*lt/Ve*H,Z=qt*lt/Ve*H;k.projectionMatrix.makePerspective(me,U,v,Z,H,Ve),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function wt(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let Q=k.near,ft=k.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),J.near=B.near=F.near=Q,J.far=B.far=F.far=ft,(O!==J.near||z!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),O=J.near,z=J.far),J.layers.mask=k.layers.mask|6,F.layers.mask=J.layers.mask&-5,B.layers.mask=J.layers.mask&-3;let Pt=k.parent,xt=J.cameras;wt(J,Pt);for(let Lt=0;Lt<xt.length;Lt++)wt(xt[Lt],Pt);xt.length===2?ot(J,F,B):J.projectionMatrix.copy(F.projectionMatrix),A===null&&k.isPerspectiveCamera&&(A={camera:k,fov:k.fov,zoom:k.zoom}),bt(k,J,Pt)};function bt(k,Q,ft){ft===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(ft.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Va*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(m===null&&f===null))return l},this.setFoveation=function(k){l=k,m!==null&&(m.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(J)},this.getCameraTexture=function(k){return x[k]};let Ut=null;function Mt(k,Q){if(p=Q.getViewerPose(c||o),_=Q,p!==null){let ft=p.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let Pt=!1;ft.length!==J.cameras.length&&(J.cameras.length=0,Pt=!0);for(let lt=0;lt<ft.length;lt++){let ee=ft[lt],qt=null;if(f!==null)qt=f.getViewport(ee);else{let te=d.getViewSubImage(m,ee);qt=te.viewport,lt===0&&(t.setRenderTargetTextures(T,te.colorTexture,te.depthStencilTexture),t.setRenderTarget(T))}let Qt=K[lt];Qt===void 0&&(Qt=new yn,Qt.layers.enable(lt),Qt.viewport=new Ze,K[lt]=Qt),Qt.matrix.fromArray(ee.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ee.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(qt.x,qt.y,qt.width,qt.height),lt===0&&(J.matrix.copy(Qt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Pt===!0&&J.cameras.push(Qt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let lt=d.getDepthInformation(ft[0]);lt&&lt.isValid&&lt.texture&&g.init(lt,s.renderState)}if(xt&&xt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let lt=0;lt<ft.length;lt++){let ee=ft[lt].camera;if(ee){let qt=x[ee];qt||(qt=new ro,x[ee]=qt);let Qt=d.getCameraImage(ee);qt.sourceTexture=Qt}}}}for(let ft=0;ft<S.length;ft++){let Pt=R[ft],xt=S[ft];Pt!==null&&xt!==void 0&&xt.update(Pt,Q,c||o)}Ut&&Ut(k,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}let At=new Kp;At.setAnimationLoop(Mt),this.setAnimationLoop=function(k){Ut=k},this.dispose=function(){}}},jM=new qe,im=new fe;im.set(-1,0,0,0,1,0,0,0,1);function QM(n,t){function e(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function i(g,x){x.color.getRGB(g.fogColor.value,Qh(n)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,C,L,T){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),d(g,x)):x.isMeshPhongMaterial?(r(g,x),p(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),m(g,x),x.isMeshPhysicalMaterial&&f(g,x,T)):x.isMeshMatcapMaterial?(r(g,x),_(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),y(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(o(g,x),x.isLineDashedMaterial&&a(g,x)):x.isPointsMaterial?l(g,x,C,L):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,e(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===Rn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,e(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===Rn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,e(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,e(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let C=t.get(x),L=C.envMap,T=C.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(im),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,g.aoMapTransform))}function o(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform))}function a(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,C,L){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*C,g.scale.value=L*.5,x.map&&(g.map.value=x.map,e(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function p(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function d(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function m(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function f(g,x,C){g.ior.value=x.ior,x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Rn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,x){x.matcap&&(g.matcap.value=x.matcap)}function y(g,x){let C=t.get(x).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tb(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let R=S.program;i.uniformBlockBinding(T,R)}function c(T,S){let R=s[T.id];R===void 0&&(g(T),R=p(T),s[T.id]=R,T.addEventListener("dispose",C));let N=S.program;i.updateUBOMapping(T,N);let b=t.render.frame;r[T.id]!==b&&(m(T),r[T.id]=b)}function p(T){let S=d();T.__bindingPointIndex=S;let R=n.createBuffer(),N=T.__size,b=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,N,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,R),R}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){let S=s[T.id],R=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,A=R.length;b<A;b++){let F=R[b];if(Array.isArray(F))for(let B=0,K=F.length;B<K;B++)f(F[B],b,B,N);else f(F,b,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,S,R,N){if(y(T,S,R,N)===!0){let b=T.__offset,A=T.value;if(Array.isArray(A)){let F=0;for(let B=0;B<A.length;B++){let K=A[B],J=x(K);_(K,T.__data,F),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(F+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,T.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,T.__data)}}function _(T,S,R){typeof T=="number"||typeof T=="boolean"?S[0]=T:T.isMatrix3?(S[0]=T.elements[0],S[1]=T.elements[1],S[2]=T.elements[2],S[3]=0,S[4]=T.elements[3],S[5]=T.elements[4],S[6]=T.elements[5],S[7]=0,S[8]=T.elements[6],S[9]=T.elements[7],S[10]=T.elements[8],S[11]=0):ArrayBuffer.isView(T)?S.set(new T.constructor(T.buffer,T.byteOffset,S.length)):T.toArray(S,R)}function y(T,S,R,N){let b=T.value,A=S+"_"+R;if(N[A]===void 0)return typeof b=="number"||typeof b=="boolean"?N[A]=b:ArrayBuffer.isView(b)?N[A]=b.slice():N[A]=b.clone(),!0;{let F=N[A];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return N[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function g(T){let S=T.uniforms,R=0,N=16;for(let A=0,F=S.length;A<F;A++){let B=Array.isArray(S[A])?S[A]:[S[A]];for(let K=0,J=B.length;K<J;K++){let O=B[K],z=Array.isArray(O.value)?O.value:[O.value];for(let q=0,$=z.length;q<$;q++){let rt=z[q],Y=x(rt),et=R%N,ot=et%Y.boundary,wt=et+ot;R+=ot,wt!==0&&N-wt<Y.storage&&(R+=N-wt),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=R,R+=Y.storage}}}let b=R%N;return b>0&&(R+=N-b),T.__size=R,T.__cache={},this}function x(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(S.boundary=16,S.storage=T.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",T),S}function C(T){let S=T.target;S.removeEventListener("dispose",C);let R=o.indexOf(S.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function L(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:L}}var eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function nb(){return Ri===null&&(Ri=new qa(eb,16,16,_s,fi),Ri.name="DFG_LUT",Ri.minFilter=rn,Ri.magFilter=rn,Ri.wrapS=Si,Ri.wrapT=Si,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var sc=class{constructor(t={}){let{canvas:e=Mp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1,outputBufferType:f=kn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let y=f,g=new Set([Ml,vl,yl]),x=new Set([kn,hi,pr,mr,xl,_l]),C=new Uint32Array(4),L=new Int32Array(4),T=new j,S=null,R=null,N=[],b=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,K=null,J=null,O=null,z=null;this._outputColorSpace=sn;let q=0,$=0,rt=null,Y=-1,et=null,ot=new Ze,wt=new Ze,bt=null,Ut=new ce(0),Mt=0,At=e.width,k=e.height,Q=1,ft=null,Pt=null,xt=new Ze(0,0,At,k),Lt=new Ze(0,0,At,k),se=!1,lt=new no,ee=!1,qt=!1,Qt=new qe,te=new j,ye=new Ze,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ue(){return rt===null?Q:1}let H=i;function Ve(w,G){return e.getContext(w,G)}let me,U,v,Z,nt,at,Et,Rt,ut,dt,Ct,Jt,Nt,Dt,Kt,ne,de,V,It,ht,Tt,Ft,gt;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",In,!1),H===null){let G="webgl2";if(H=Ve(G,w),H===null)throw Ve(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(w){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",In,!1),le("WebGLRenderer: "+w.message),w}function Zt(){me=new cv(H),me.init(),Tt=new ZM(H,me),U=new Qy(H,me,t,Tt),v=new YM(H,me),U.reversedDepthBuffer&&m&&v.buffers.depth.setReversed(!0),J=H.createFramebuffer(),O=H.createFramebuffer(),z=H.createFramebuffer(),Z=new fv(H),nt=new DM,at=new $M(H,me,v,nt,U,Tt,Z),Et=new lv(F),Rt=new px(H),Ft=new Ky(H,Rt),ut=new hv(H,Rt,Z,Ft),dt=new pv(H,ut,Rt,Ft,Z),V=new dv(H,U,at),Kt=new tv(nt),Ct=new LM(F,Et,me,U,Ft,Kt),Jt=new QM(F,nt),Nt=new UM,Dt=new VM(me),de=new Jy(F,Et,v,dt,_,l),ne=new qM(F,dt,U),gt=new tb(H,Z,U,v),It=new jy(H,me,Z),ht=new uv(H,me,Z),Z.programs=Ct.programs,F.capabilities=U,F.extensions=me,F.properties=nt,F.renderLists=Nt,F.shadowMap=ne,F.state=v,F.info=Z}y!==kn&&(A=new gv(y,e.width,e.height,a,s,r));let $t=new bu(F,H);this.xr=$t,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(At,k,!1))},this.getSize=function(w){return w.set(At,k)},this.setSize=function(w,G,it=!0){if($t.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}At=w,k=G,e.width=Math.floor(w*Q),e.height=Math.floor(G*Q),it===!0&&(e.style.width=w+"px",e.style.height=G+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(At*Q,k*Q).floor()},this.setDrawingBufferSize=function(w,G,it){At=w,k=G,Q=it,e.width=Math.floor(w*it),e.height=Math.floor(G*it),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(y===kn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ot)},this.getViewport=function(w){return w.copy(xt)},this.setViewport=function(w,G,it,X){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,G,it,X),v.viewport(ot.copy(xt).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,G,it,X){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,G,it,X),v.scissor(wt.copy(Lt).multiplyScalar(Q).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(w){v.setScissorTest(se=w)},this.setOpaqueSort=function(w){ft=w},this.setTransparentSort=function(w){Pt=w},this.getClearColor=function(w){return w.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,it=!0){let X=0;if(w){let tt=!1;if(rt!==null){let zt=rt.texture.format;tt=g.has(zt)}if(tt){let zt=rt.texture.type,Gt=x.has(zt),Bt=de.getClearColor(),Ht=de.getClearAlpha(),Xt=Bt.r,ue=Bt.g,ge=Bt.b;Gt?(C[0]=Xt,C[1]=ue,C[2]=ge,C[3]=Ht,H.clearBufferuiv(H.COLOR,0,C)):(L[0]=Xt,L[1]=ue,L[2]=ge,L[3]=Ht,H.clearBufferiv(H.COLOR,0,L))}else X|=H.COLOR_BUFFER_BIT}G&&(X|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),K=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",In,!1),de.dispose(),Nt.dispose(),Dt.dispose(),nt.dispose(),Et.dispose(),dt.dispose(),Ft.dispose(),gt.dispose(),Ct.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Zi),$t.removeEventListener("sessionend",_t),St.stop()};function Te(w){w.preventDefault(),Zr("WebGLRenderer: Context Lost."),B=!0}function Ee(){Zr("WebGLRenderer: Context Restored."),B=!1;let w=Z.autoReset,G=ne.enabled,it=ne.autoUpdate,X=ne.needsUpdate,tt=ne.type;Zt(),Z.autoReset=w,ne.enabled=G,ne.autoUpdate=it,ne.needsUpdate=X,ne.type=tt}function In(w){le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wn(w){let G=w.target;G.removeEventListener("dispose",Wn),Uc(G)}function Uc(w){Ss(w),nt.remove(w)}function Ss(w){let G=nt.get(w).programs;G!==void 0&&(G.forEach(function(it){Ct.releaseProgram(it)}),w.isShaderMaterial&&Ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,it,X,tt,zt){G===null&&(G=Ne);let Gt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Bt=qo(w,G,it,X,tt);v.setMaterial(X,Gt);let Ht=it.index,Xt=1;if(X.wireframe===!0){if(Ht=ut.getWireframeAttribute(it),Ht===void 0)return;Xt=2}let ue=it.drawRange,ge=it.attributes.position,Yt=ue.start*Xt,ve=(ue.start+ue.count)*Xt;zt!==null&&(Yt=Math.max(Yt,zt.start*Xt),ve=Math.min(ve,(zt.start+zt.count)*Xt)),Ht!==null?(Yt=Math.max(Yt,0),ve=Math.min(ve,Ht.count)):ge!=null&&(Yt=Math.max(Yt,0),ve=Math.min(ve,ge.count));let Je=ve-Yt;if(Je<0||Je===1/0)return;Ft.setup(tt,X,Bt,it,Ht);let He,Ie=It;if(Ht!==null&&(He=Rt.get(Ht),Ie=ht,Ie.setIndex(He)),tt.isMesh)X.wireframe===!0?(v.setLineWidth(X.wireframeLinewidth*Ue()),Ie.setMode(H.LINES)):Ie.setMode(H.TRIANGLES);else if(tt.isLine){let Qe=X.linewidth;Qe===void 0&&(Qe=1),v.setLineWidth(Qe*Ue()),tt.isLineSegments?Ie.setMode(H.LINES):tt.isLineLoop?Ie.setMode(H.LINE_LOOP):Ie.setMode(H.LINE_STRIP)}else tt.isPoints?Ie.setMode(H.POINTS):tt.isSprite&&Ie.setMode(H.TRIANGLES);if(tt.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Ie.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Qe=tt._multiDrawStarts,Vt=tt._multiDrawCounts,fn=tt._multiDrawCount,Me=Ht?Rt.get(Ht).bytesPerElement:1,Pn=nt.get(X).currentProgram.getUniforms();for(let An=0;An<fn;An++)Pn.setValue(H,"_gl_DrawID",An),Ie.render(Qe[An]/Me,Vt[An])}else if(tt.isInstancedMesh)Ie.renderInstances(Yt,Je,tt.count);else if(it.isInstancedBufferGeometry){let Qe=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Vt=Math.min(it.instanceCount,Qe);Ie.renderInstances(Yt,Je,Vt)}else Ie.render(Yt,Je)};function zs(w,G,it,X){K!==null&&w.isNodeMaterial&&K.setObject(X,w),ee===!0&&Kt.setState(w,it,!1),w.transparent===!0&&w.side===Jn&&w.forceSinglePass===!1?(w.side=Rn,w.needsUpdate=!0,Ji(w,G,X),w.side=ps,w.needsUpdate=!0,Ji(w,G,X),w.side=Jn):Ji(w,G,X)}this.compile=function(w,G,it=null){it===null&&(it=w),K!==null&&K.renderStart(w,G,it),R=Dt.get(it),R.init(G),b.push(R),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(R.pushLight(tt),tt.castShadow&&R.pushShadow(tt))}),w!==it&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(G.layers)&&(R.pushLight(tt),tt.castShadow&&R.pushShadow(tt))}),R.setupLights(),K!==null&&K.updateLights(R.state.lightsArray),qt=this.localClippingEnabled,ee=Kt.init(this.clippingPlanes,qt),ee===!0&&Kt.setGlobalState(this.clippingPlanes,G),K!==null&&ne.render(R.state.shadowsArray,it,G);let X=new Set;return w.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let zt=tt.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){let Bt=zt[Gt];zs(Bt,it,G,tt),X.add(Bt)}else zs(zt,it,G,tt),X.add(zt)}),R=b.pop(),K!==null&&K.renderEnd(),X},this.compileAsync=function(w,G,it=null){let X=this.compile(w,G,it);return new Promise(tt=>{function zt(){if(X.forEach(function(Gt){let Ht=nt.get(Gt).currentProgram;(Ht===void 0||Ht.isReady())&&X.delete(Gt)}),X.size===0){tt(w);return}setTimeout(zt,10)}me.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let ws=null;function ei(w){ws&&ws(w)}function Zi(){St.stop()}function _t(){St.start()}let St=new Kp;St.setAnimationLoop(ei),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(w){ws=w,$t.setAnimationLoop(w),w===null?St.stop():St.start()},$t.addEventListener("sessionstart",Zi),$t.addEventListener("sessionend",_t),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;K!==null&&K.renderStart(w,G);let it=$t.enabled===!0&&$t.isPresenting===!0,X=A!==null&&(rt===null||it)&&A.begin(F,rt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&($t.cameraAutoUpdate===!0&&$t.updateCamera(G),G=$t.getCamera()),w.isScene===!0&&w.onBeforeRender(F,w,G,rt),R=Dt.get(w,b.length),R.init(G),R.state.textureUnits=at.getTextureUnits(),b.push(R),Qt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),lt.setFromProjectionMatrix(Qt,li,G.reversedDepth),qt=this.localClippingEnabled,ee=Kt.init(this.clippingPlanes,qt),S=Nt.get(w,N.length),S.init(),N.push(S),$t.enabled===!0&&$t.isPresenting===!0){let Gt=F.xr.getDepthSensingMesh();Gt!==null&&Rr(Gt,G,-1/0,F.sortObjects)}Rr(w,G,0,F.sortObjects),S.finish(),K!==null&&K.updateLights(R.state.lightsArray),F.sortObjects===!0&&S.sort(ft,Pt),Re=$t.enabled===!1||$t.isPresenting===!1||$t.hasDepthSensing()===!1,Re&&de.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&Kt.beginShadows();let tt=R.state.shadowsArray;if(ne.render(tt,w,G),ee===!0&&Kt.endShadows(),(X&&A.hasRenderPass())===!1){let Gt=S.opaque,Bt=S.transmissive;if(R.setupLights(),G.isArrayCamera){let Ht=G.cameras;if(Bt.length>0)for(let Xt=0,ue=Ht.length;Xt<ue;Xt++){let ge=Ht[Xt];Ui(Gt,Bt,w,ge)}Re&&de.render(w);for(let Xt=0,ue=Ht.length;Xt<ue;Xt++){let ge=Ht[Xt];Se(S,w,ge,ge.viewport)}}else Bt.length>0&&Ui(Gt,Bt,w,G),Re&&de.render(w),Se(S,w,G)}rt!==null&&$===0&&(at.updateMultisampleRenderTarget(rt),at.updateRenderTargetMipmap(rt)),X&&A.end(F),w.isScene===!0&&w.onAfterRender(F,w,G),Ft.resetDefaultState(),Y=-1,et=null,b.pop(),b.length>0?(R=b[b.length-1],at.setTextureUnits(R.state.textureUnits),ee===!0&&Kt.setGlobalState(F.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?S=N[N.length-1]:S=null,K!==null&&K.renderEnd()};function Rr(w,G,it,X){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)R.pushLightProbeGrid(w);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(lt)){X&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Qt);let Gt=dt.update(w),Bt=w.material;Bt.visible&&S.push(w,Gt,Bt,it,ye.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(lt))){let Gt=dt.update(w),Bt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ye.copy(w.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),ye.copy(Gt.boundingSphere.center)),ye.applyMatrix4(w.matrixWorld).applyMatrix4(Qt)),Array.isArray(Bt)){let Ht=Gt.groups;for(let Xt=0,ue=Ht.length;Xt<ue;Xt++){let ge=Ht[Xt],Yt=Bt[ge.materialIndex];Yt&&Yt.visible&&S.push(w,Gt,Yt,it,ye.z,ge,G)}}else Bt.visible&&S.push(w,Gt,Bt,it,ye.z,null,G)}}let zt=w.children;for(let Gt=0,Bt=zt.length;Gt<Bt;Gt++)Rr(zt[Gt],G,it,X)}function Se(w,G,it,X){let{opaque:tt,transmissive:zt,transparent:Gt}=w;R.setupLightsView(it),ee===!0&&Kt.setGlobalState(F.clippingPlanes,it),X&&v.viewport(ot.copy(X)),tt.length>0&&ni(tt,G,it),zt.length>0&&ni(zt,G,it),Gt.length>0&&ni(Gt,G,it),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ui(w,G,it,X){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[X.id]===void 0){let Yt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[X.id]=new Ln(1,1,{generateMipmaps:!0,type:Yt?fi:kn,minFilter:gs,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let zt=R.state.transmissionRenderTarget[X.id],Gt=X.viewport||ot;zt.setSize(Gt.z*F.transmissionResolutionScale,Gt.w*F.transmissionResolutionScale);let Bt=F.getRenderTarget(),Ht=F.getActiveCubeFace(),Xt=F.getActiveMipmapLevel();F.setRenderTarget(zt),F.getClearColor(Ut),Mt=F.getClearAlpha(),Mt<1&&F.setClearColor(16777215,.5),F.clear(),Re&&de.render(it);let ue=F.toneMapping;F.toneMapping=ci;let ge=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),R.setupLightsView(X),ee===!0&&Kt.setGlobalState(F.clippingPlanes,X),ni(w,it,X),at.updateMultisampleRenderTarget(zt),at.updateRenderTargetMipmap(zt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ve=0,Je=G.length;ve<Je;ve++){let He=G[ve],{object:Ie,geometry:Qe,material:Vt,group:fn}=He;if(Vt.side===Jn&&Ie.layers.test(X.layers)){let Me=Vt.side;Vt.side=Rn,Vt.needsUpdate=!0,Ir(Ie,it,X,Qe,Vt,fn),Vt.side=Me,Vt.needsUpdate=!0,Yt=!0}}Yt===!0&&(at.updateMultisampleRenderTarget(zt),at.updateRenderTargetMipmap(zt))}F.setRenderTarget(Bt,Ht,Xt),F.setClearColor(Ut,Mt),ge!==void 0&&(X.viewport=ge),F.toneMapping=ue}function ni(w,G,it){let X=G.isScene===!0?G.overrideMaterial:null;for(let tt=0,zt=w.length;tt<zt;tt++){let Gt=w[tt],{object:Bt,geometry:Ht,group:Xt}=Gt,ue=Gt.material;ue.allowOverride===!0&&X!==null&&(ue=X),Bt.layers.test(it.layers)&&Ir(Bt,G,it,Ht,ue,Xt)}}function Ir(w,G,it,X,tt,zt){K!==null&&tt.isNodeMaterial&&K.setObject(w,tt),w.onBeforeRender(F,G,it,X,tt,zt),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(F,G,it,X,w,zt),tt.transparent===!0&&tt.side===Jn&&tt.forceSinglePass===!1?(tt.side=Rn,tt.needsUpdate=!0,F.renderBufferDirect(it,G,X,tt,w,zt),tt.side=ps,tt.needsUpdate=!0,F.renderBufferDirect(it,G,X,tt,w,zt),tt.side=Jn):F.renderBufferDirect(it,G,X,tt,w,zt),w.onAfterRender(F,G,it,X,tt,zt)}function Ji(w,G,it){G.isScene!==!0&&(G=Ne);let X=nt.get(w),tt=R.state.lights,zt=R.state.shadowsArray,Gt=tt.state.version,Bt=Ct.getParameters(w,tt.state,zt,G,it,R.state.lightProbeGridArray),Ht=Ct.getProgramCacheKey(Bt),Xt=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,X.fog=G.fog;let ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=Et.get(w.envMap||X.environment,ue),X.envMapRotation=X.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",Wn),Xt=new Map,X.programs=Xt);let ge=Xt.get(Ht);if(ge!==void 0){if(X.currentProgram===ge&&X.lightsStateVersion===Gt)return Xo(w,Bt),ge}else Bt.uniforms=Ct.getUniforms(w),K!==null&&w.isNodeMaterial&&K.build(w,it,Bt),w.onBeforeCompile(Bt,F),ge=Ct.acquireProgram(Bt,Ht),Xt.set(Ht,ge),X.uniforms=Bt.uniforms;let Yt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=Kt.uniform),Xo(w,Bt),X.needsLights=Yo(w),X.lightsStateVersion=Gt,X.needsLights&&(Yt.ambientLightColor.value=tt.state.ambient,Yt.lightProbe.value=tt.state.probe,Yt.sunLights.value=tt.state.sun,Yt.sunLightShadows.value=tt.state.sunShadow,Yt.directionalLights.value=tt.state.directional,Yt.directionalLightShadows.value=tt.state.directionalShadow,Yt.spotLights.value=tt.state.spot,Yt.spotLightShadows.value=tt.state.spotShadow,Yt.rectAreaLights.value=tt.state.rectArea,Yt.ltc_1.value=tt.state.rectAreaLTC1,Yt.ltc_2.value=tt.state.rectAreaLTC2,Yt.pointLights.value=tt.state.point,Yt.pointLightShadows.value=tt.state.pointShadow,Yt.hemisphereLights.value=tt.state.hemi,Yt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Yt.sunShadowCascade.value=tt.state.sunShadowCascade,Yt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Yt.spotLightMatrix.value=tt.state.spotLightMatrix,Yt.spotLightMap.value=tt.state.spotLightMap,Yt.pointShadowMatrix.value=tt.state.pointShadowMatrix),X.lightProbeGrid=R.state.lightProbeGridArray.length>0,X.currentProgram=ge,X.uniformsList=null,ge}function Wo(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=_r.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Xo(w,G){let it=nt.get(w);it.outputColorSpace=G.outputColorSpace,it.batching=G.batching,it.batchingColor=G.batchingColor,it.instancing=G.instancing,it.instancingColor=G.instancingColor,it.instancingMorph=G.instancingMorph,it.skinning=G.skinning,it.morphTargets=G.morphTargets,it.morphNormals=G.morphNormals,it.morphColors=G.morphColors,it.morphTargetsCount=G.morphTargetsCount,it.numClippingPlanes=G.numClippingPlanes,it.numIntersection=G.numClipIntersection,it.vertexAlphas=G.vertexAlphas,it.vertexTangents=G.vertexTangents,it.toneMapping=G.toneMapping}function Fc(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;T.setFromMatrixPosition(G.matrixWorld);for(let it=0,X=w.length;it<X;it++){let tt=w[it];if(tt.texture!==null&&tt.boundingBox.containsPoint(T))return tt}return null}function qo(w,G,it,X,tt){G.isScene!==!0&&(G=Ne),at.resetTextureUnits();let zt=G.fog,Gt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?G.environment:null,Bt=rt===null?F.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:be.workingColorSpace,Ht=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Xt=Et.get(X.envMap||Gt,Ht),ue=X.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ge=!!it.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Yt=!!it.morphAttributes.position,ve=!!it.morphAttributes.normal,Je=!!it.morphAttributes.color,He=ci;X.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(He=F.toneMapping);let Ie=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Qe=Ie!==void 0?Ie.length:0,Vt=nt.get(X),fn=R.state.lights;if(ee===!0&&(qt===!0||w!==et)){let Be=w===et&&X.id===Y;Kt.setState(X,w,Be)}let Me=!1;X.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==fn.state.version||Vt.outputColorSpace!==Bt||tt.isBatchedMesh&&Vt.batching===!1||!tt.isBatchedMesh&&Vt.batching===!0||tt.isBatchedMesh&&Vt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Vt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Vt.instancing===!1||!tt.isInstancedMesh&&Vt.instancing===!0||tt.isSkinnedMesh&&Vt.skinning===!1||!tt.isSkinnedMesh&&Vt.skinning===!0||tt.isInstancedMesh&&Vt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Vt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Vt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Vt.instancingMorph===!1&&tt.morphTexture!==null||Vt.envMap!==Xt||X.fog===!0&&Vt.fog!==zt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Kt.numPlanes||Vt.numIntersection!==Kt.numIntersection)||Vt.vertexAlphas!==ue||Vt.vertexTangents!==ge||Vt.morphTargets!==Yt||Vt.morphNormals!==ve||Vt.morphColors!==Je||Vt.toneMapping!==He||Vt.morphTargetsCount!==Qe||!!Vt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Vt.__version=X.version);let Pn=Vt.currentProgram;Me===!0&&(Pn=Ji(X,G,tt),K&&X.isNodeMaterial&&K.onUpdateProgram(X,Pn,Vt));let An=!1,Un=!1,Fi=!1,Pe=Pn.getUniforms(),Ge=Vt.uniforms;if(v.useProgram(Pn.program)&&(An=!0,Un=!0,Fi=!0),X.id!==Y&&(Y=X.id,Un=!0),Vt.needsLights){let Be=Fc(R.state.lightProbeGridArray,tt);Vt.lightProbeGrid!==Be&&(Vt.lightProbeGrid=Be,Un=!0)}if(An||et!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pe.setValue(H,"projectionMatrix",w.projectionMatrix),Pe.setValue(H,"viewMatrix",w.matrixWorldInverse);let Xn=Pe.map.cameraPosition;Xn!==void 0&&Xn.setValue(H,te.setFromMatrixPosition(w.matrixWorld)),U.logarithmicDepthBuffer&&Pe.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Pe.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,Un=!0,Fi=!0)}if(Vt.needsLights&&(fn.state.sunShadowMap.length>0&&Pe.setValue(H,"sunShadowMap",fn.state.sunShadowMap,at),fn.state.directionalShadowMap.length>0&&Pe.setValue(H,"directionalShadowMap",fn.state.directionalShadowMap,at),fn.state.spotShadowMap.length>0&&Pe.setValue(H,"spotShadowMap",fn.state.spotShadowMap,at),fn.state.pointShadowMap.length>0&&Pe.setValue(H,"pointShadowMap",fn.state.pointShadowMap,at)),tt.isSkinnedMesh){Pe.setOptional(H,tt,"bindMatrix"),Pe.setOptional(H,tt,"bindMatrixInverse");let Be=tt.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Pe.setValue(H,"boneTexture",Be.boneTexture,at))}tt.isBatchedMesh&&(Pe.setOptional(H,tt,"batchingTexture"),Pe.setValue(H,"batchingTexture",tt._matricesTexture,at),Pe.setOptional(H,tt,"batchingIdTexture"),Pe.setValue(H,"batchingIdTexture",tt._indirectTexture,at),Pe.setOptional(H,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Pe.setValue(H,"batchingColorTexture",tt._colorsTexture,at));let _i=it.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&V.update(tt,it,Pn),(Un||Vt.receiveShadow!==tt.receiveShadow)&&(Vt.receiveShadow=tt.receiveShadow,Pe.setValue(H,"receiveShadow",tt.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&G.environment!==null&&(Ge.envMapIntensity.value=G.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=nb()),Un){if(Pe.setValue(H,"toneMappingExposure",F.toneMappingExposure),Vt.needsLights&&Nn(Ge,Fi),zt&&X.fog===!0&&Jt.refreshFogUniforms(Ge,zt),Jt.refreshMaterialUniforms(Ge,X,Q,k,R.state.transmissionRenderTarget[w.id]),Vt.needsLights&&Vt.lightProbeGrid){let Be=Vt.lightProbeGrid;Ge.probesSH.value=Be.texture,Ge.probesMin.value.copy(Be.boundingBox.min),Ge.probesMax.value.copy(Be.boundingBox.max),Ge.probesResolution.value.copy(Be.resolution)}_r.upload(H,Wo(Vt),Ge,at)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_r.upload(H,Wo(Vt),Ge,at),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Pe.setValue(H,"center",tt.center),Pe.setValue(H,"modelViewMatrix",tt.modelViewMatrix),Pe.setValue(H,"normalMatrix",tt.normalMatrix),Pe.setValue(H,"modelMatrix",tt.matrixWorld),X.uniformsGroups!==void 0){let Be=X.uniformsGroups;for(let Xn=0,qn=Be.length;Xn<qn;Xn++){let $o=Be[Xn];gt.update($o,Pn),gt.bind($o,Pn)}}return Pn}function Nn(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Yo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(w,G,it){let X=nt.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),nt.get(w.texture).__webglTexture=G,nt.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:it,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let it=nt.get(w);it.__webglFramebuffer=G,it.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,it=0){rt=w,q=G,$=it;let X=null,tt=!1,zt=!1;if(w){let Bt=nt.get(w);if(Bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,Bt.__webglFramebuffer),ot.copy(w.viewport),wt.copy(w.scissor),bt=w.scissorTest,v.viewport(ot),v.scissor(wt),v.setScissorTest(bt),Y=-1;return}else if(Bt.__webglFramebuffer===void 0)at.setupRenderTarget(w);else if(Bt.__hasExternalTextures)at.rebindTextures(w,nt.get(w.texture).__webglTexture,nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ue=w.depthTexture;if(Bt.__boundDepthTexture!==ue){if(ue!==null&&nt.has(ue)&&(w.width!==ue.image.width||w.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(zt=!0);let Xt=nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[G])?X=Xt[G][it]:X=Xt[G],tt=!0):w.samples>0&&at.useMultisampledRTT(w)===!1?X=nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[it]:X=Xt,ot.copy(w.viewport),wt.copy(w.scissor),bt=w.scissorTest}else ot.copy(xt).multiplyScalar(Q).floor(),wt.copy(Lt).multiplyScalar(Q).floor(),bt=se;if(it!==0&&(X=J),v.bindFramebuffer(H.FRAMEBUFFER,X)&&v.drawBuffers(w,X),v.viewport(ot),v.scissor(wt),v.setScissorTest(bt),tt){let Bt=nt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Bt.__webglTexture,it)}else if(zt){let Bt=G;for(let Ht=0;Ht<w.textures.length;Ht++){let Xt=nt.get(w.textures[Ht]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,it,Bt)}}else if(w!==null&&it!==0){let Bt=nt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,it)}Y=-1};function Ki(w){let G=nt.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=U.textureFormatReadable(w.format),G.__typeReadable=U.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,it,X,tt,zt,Gt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ht=Ht[Gt]),Ht){v.bindFramebuffer(H.FRAMEBUFFER,Ht);try{let Xt=w.textures[Bt],ue=Xt.format,ge=Xt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt);let Yt=Ki(Xt);if(Yt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-X&&it>=0&&it<=w.height-tt&&H.readPixels(G,it,X,tt,Tt.convert(ue),Tt.convert(ge),zt)}finally{let Xt=rt!==null?nt.get(rt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(w,G,it,X,tt,zt,Gt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ht=Ht[Gt]),Ht)if(G>=0&&G<=w.width-X&&it>=0&&it<=w.height-tt){v.bindFramebuffer(H.FRAMEBUFFER,Ht);let Xt=w.textures[Bt],ue=Xt.format,ge=Xt.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Bt);let Yt=Ki(Xt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.bufferData(H.PIXEL_PACK_BUFFER,zt.byteLength,H.STREAM_READ),H.readPixels(G,it,X,tt,Tt.convert(ue),Tt.convert(ge),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Je=rt!==null?nt.get(rt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Je);let He=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Sp(H,He,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,zt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ve),H.deleteSync(He),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,it=0){let X=Math.pow(2,-it),tt=Math.floor(w.image.width*X),zt=Math.floor(w.image.height*X),Gt=G!==null?G.x:0,Bt=G!==null?G.y:0;at.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Gt,Bt,tt,zt),v.unbindTexture()},this.copyTextureToTexture=function(w,G,it=null,X=null,tt=0,zt=0){let Gt,Bt,Ht,Xt,ue,ge,Yt,ve,Je,He=w.isCompressedTexture?w.mipmaps[zt]:w.image;if(it!==null)Gt=it.max.x-it.min.x,Bt=it.max.y-it.min.y,Ht=it.isBox3?it.max.z-it.min.z:1,Xt=it.min.x,ue=it.min.y,ge=it.isBox3?it.min.z:0;else{let Ge=Math.pow(2,-tt);Gt=Math.floor(He.width*Ge),Bt=Math.floor(He.height*Ge),w.isDataArrayTexture?Ht=He.depth:w.isData3DTexture?Ht=Math.floor(He.depth*Ge):Ht=1,Xt=0,ue=0,ge=0}X!==null?(Yt=X.x,ve=X.y,Je=X.z):(Yt=0,ve=0,Je=0);let Ie=Tt.convert(G.format),Qe=Tt.convert(G.type),Vt;G.isData3DTexture?(at.setTexture3D(G,0),Vt=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(at.setTexture2DArray(G,0),Vt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(G,0),Vt=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let fn=v.getParameter(H.UNPACK_ROW_LENGTH),Me=v.getParameter(H.UNPACK_IMAGE_HEIGHT),Pn=v.getParameter(H.UNPACK_SKIP_PIXELS),An=v.getParameter(H.UNPACK_SKIP_ROWS),Un=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,He.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,He.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Xt),v.pixelStorei(H.UNPACK_SKIP_ROWS,ue),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ge);let Fi=w.isDataArrayTexture||w.isData3DTexture,Pe=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let Ge=nt.get(w),_i=nt.get(G),Be=nt.get(Ge.__renderTarget),Xn=nt.get(_i.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Be.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let qn=0;qn<Ht;qn++)Fi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(w).__webglTexture,tt,ge+qn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(G).__webglTexture,zt,Je+qn)),H.blitFramebuffer(Xt,ue,Gt,Bt,Yt,ve,Gt,Bt,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(tt!==0||w.isRenderTargetTexture||nt.has(w)){let Ge=nt.get(w),_i=nt.get(G);v.bindFramebuffer(H.READ_FRAMEBUFFER,O),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,z);for(let Be=0;Be<Ht;Be++)Fi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.__webglTexture,tt,ge+Be):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,tt),Pe?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_i.__webglTexture,zt,Je+Be):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_i.__webglTexture,zt),tt!==0?H.blitFramebuffer(Xt,ue,Gt,Bt,Yt,ve,Gt,Bt,H.COLOR_BUFFER_BIT,H.NEAREST):Pe?H.copyTexSubImage3D(Vt,zt,Yt,ve,Je+Be,Xt,ue,Gt,Bt):H.copyTexSubImage2D(Vt,zt,Yt,ve,Xt,ue,Gt,Bt);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pe?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Vt,zt,Yt,ve,Je,Gt,Bt,Ht,Ie,Qe,He.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Vt,zt,Yt,ve,Je,Gt,Bt,Ht,Ie,He.data):H.texSubImage3D(Vt,zt,Yt,ve,Je,Gt,Bt,Ht,Ie,Qe,He):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,zt,Yt,ve,Gt,Bt,Ie,Qe,He.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,zt,Yt,ve,He.width,He.height,Ie,He.data):H.texSubImage2D(H.TEXTURE_2D,zt,Yt,ve,Gt,Bt,Ie,Qe,He);v.pixelStorei(H.UNPACK_ROW_LENGTH,fn),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Pn),v.pixelStorei(H.UNPACK_SKIP_ROWS,An),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Un),zt===0&&G.generateMipmaps&&H.generateMipmap(Vt),v.unbindTexture()},this.initRenderTarget=function(w){nt.get(w).__webglFramebuffer===void 0&&at.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?at.setTextureCube(w,0):w.isData3DTexture?at.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?at.setTexture2DArray(w,0):at.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){q=0,$=0,rt=null,v.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var ib=["top","side","bottom"],sb={slab_bottom:1,slab_top:1,stairs:1},sm=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function rb(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],sm[n.facing|0]]:null}function rm(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let A of t){if(!A||typeof A.id!="string")throw new Error("block without id");if(!Number.isInteger(A.n)||A.n<0||A.n>255)throw new Error("bad n for "+A.id);if(i[A.n])throw new Error("duplicate n "+A.n+" ("+A.id+")");if(s[A.id])throw new Error("duplicate id "+A.id);let F=A.colors||{},B=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},A);if(B.placeable=B.n!==0&&!B.liquid,B.colors={top:F.top||"#888888",side:F.side||F.top||"#888888",bottom:F.bottom||F.top||"#888888"},B.opaque=B.solid&&!B.transparent&&!B.cutout&&!sb[B.shape],B.tile={},B.tileOf&&s[B.tileOf])B.tile=Object.assign({},s[B.tileOf].tile);else if(B.n!==0){let K={};for(let J of ib){let O=B.colors[J]+"|"+(B.pattern==="grass"||B.pattern==="log"||B.pattern==="lamp"||B.pattern==="table"||B.pattern==="stele"||B.pattern==="torch"||B.pattern==="bed"||B.pattern==="snow"||B.pattern==="lantern"||B.pattern==="bookshelf"||B.pattern==="hay"||B.pattern==="barrel"||B.pattern==="chest"||B.pattern==="farmland"?J:"");K[O]===void 0&&(K[O]=r.length,r.push({block:B.id,face:J,color:B.colors[J],pattern:B.pattern,accent:B.accent||null,top:B.colors.top})),B.tile[J]=K[O]}}i[B.n]=B,s[B.id]=B}if(!s.air)throw new Error("registry needs air");for(let A of e){if(s[A.id])throw new Error("duplicate id "+A.id);s[A.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},A)}for(let A in s){let F=s[A].drops;if(F&&F!=="self"&&!s[F])throw new Error(A+" drops unknown "+F)}let o=A=>(typeof A=="number"?i[A]:s[A])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),p=new Uint8Array(256),d=new Uint8Array(256),m=new Uint8Array(256),f={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8},_=new Uint8Array(256),y=new Array(256).fill(null),g=new Uint8Array(256),x=new Uint8Array(256),C=new Uint8Array(256),L=new Uint8Array(256),T=new Uint8Array(256),S=new Int16Array(256).fill(-1),R=new Int16Array(256).fill(-1),N=new Int16Array(256).fill(-1);i.forEach((A,F)=>{A&&(g[F]=A.solid?1:0,x[F]=A.opaque?1:0,C[F]=A.transparent?1:0,L[F]=A.emissive?1:0,T[F]=A.liquid?1:0,a[F]=A.light!=null?A.light:A.emissive?15:0,l[F]=A.liquid?2:0,c[F]=f[A.shape]||0,p[F]=A.cutout?1:0,d[F]=A.climbable?1:0,m[F]=A.plant?1:0,_[F]=A.facing|0,A.solid&&(y[F]=rb(A)),F&&(S[F]=A.tile.top,R[F]=A.tile.side,N[F]=A.tile.bottom))});let b=(n&&n.blueprints||[]).map(A=>Object.assign({kind:"blueprint"},A));return{blocks:i.filter(Boolean),items:e.map(A=>s[A.id]),blueprints:b,tiles:r,get:o,toolOf:A=>{let F=A&&s[A];return F&&F.kind==="item"&&F.tool&&typeof F.tool=="object"?F.tool:null},num:A=>{let F=s[A];if(!F||F.kind!=="block")throw new Error("no block "+A);return F.n},name:A=>{let F=o(A);return F?F.name_zh:String(A)},maxStack:A=>{let F=s[A];return F?F.maxStack:64},dropOf:A=>{let F=i[A];return!F||!F.drops?null:F.drops==="self"?F.id:F.drops},breakTime:A=>{let F=i[A];return!F||F.hardness<0?1/0:.25+F.hardness*.55},flat:{solid:g,opaque:x,trans:C,emit:L,liquid:T,tileTop:S,tileSide:R,tileBottom:N,lightEmit:a,attn:l,shape:c,cutout:p,climb:d,plant:m,facing:_,boxes:y}}}var Wi=n=>Math.floor(n/16);var pe=(n,t,e)=>(t*16+e)*16+n;var Pi=(n,t)=>n+","+t,om=n=>n.split(",").map(Number);function Su(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Wi(n),s=Wi(e);return{cx:i,cz:s,i:pe(n-i*16,t,e-s*16)}}function am(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Vn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var ys=(n,t,e)=>Vn(n,t,0,e);function ob(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var wu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],ab=.5*(Math.sqrt(3)-1),wo=(3-Math.sqrt(3))/6;function Li(n){let t=ob(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*ab,a=Math.floor(s+o),l=Math.floor(r+o),c=(a+l)*wo,p=s-(a-c),d=r-(l-c),m=p>d?1:0,f=1-m,_=p-m+wo,y=d-f+wo,g=p-1+2*wo,x=d-1+2*wo,C=a&255,L=l&255,T=0,S,R;return S=.5-p*p-d*d,S>0&&(R=wu[i[C+i[L]]&7],S*=S,T+=S*S*(R[0]*p+R[1]*d)),S=.5-_*_-y*y,S>0&&(R=wu[i[C+m+i[L+f]]&7],S*=S,T+=S*S*(R[0]*_+R[1]*y)),S=.5-g*g-x*x,S>0&&(R=wu[i[C+1+i[L+1]]&7],S*=S,T+=S*S*(R[0]*g+R[1]*x)),70*T}}function Xi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function Au(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),l=t(e-r),c=t(i-o),p=t(s-a),d=(f,_,y)=>Vn(n,r+f,o+_,a+y),m=(f,_,y)=>f+(_-f)*y;return m(m(m(d(0,0,0),d(1,0,0),l),m(d(0,1,0),d(1,1,0),l),c),m(m(d(0,0,1),d(1,0,1),l),m(d(0,1,1),d(1,1,1),l),c),p)}}var vr=160,di=18,Eu=[[0,1],[-1,0],[0,-1],[1,0]];function lm(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var lb=(n,t,e)=>e&1?[t,n]:[n,t];function cm(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(l,c){let p=l+","+c;if(i.has(p))return i.get(p);let d=null,m=f=>Vn(n+909,l,f,c);if(m(0)<.45&&e&&e.houses&&e.houses.length){let f=Math.floor((l+.2+m(1)*.6)*vr),_=Math.floor((c+.2+m(2)*.6)*vr),y=t.biomeOf(f,_),g=t.height(f,_),x=(y==="plains"||y==="desert")&&Math.hypot(f,_)>110;if(x&&g>s+1)for(let C=0;C<16&&x;C++)for(let L of[7,14]){let T=t.height(f+Math.round(Math.cos(C*.39)*L),_+Math.round(Math.sin(C*.39)*L));(Math.abs(T-g)>3||T<=s)&&(x=!1)}else x=!1;if(x){let C=[],L=[],T=3+Math.floor(m(3)*4),S=(R,N,b,A)=>{let F=r[R];if(!F)return null;let[B,K]=lb(F.size[0],F.size[2],A),J={tpl:R,rot:A,x0:N-(B>>1),z0:b-(K>>1),y:g,w:B,d:K,h:F.size[1]};return C.push(J),J};S("well",f,_,0),S("lamp_post",f+3,_+3,0),S("lamp_post",f-3,_-3,0);for(let R=0;R<T;R++){let N=R/T*Math.PI*2+m(10+R)*.5,b=9+m(20+R)*3,A=f+Math.round(Math.cos(N)*b),F=_+Math.round(Math.sin(N)*b),B=f-A,K=_-F,J=0,O=-1/0;Eu.forEach((ot,wt)=>{let bt=ot[0]*B+ot[1]*K;bt>O&&(O=bt,J=wt)});let z=e.houses[Math.floor(m(30+R)*e.houses.length)],q=S(z,A,F,J);if(!q)continue;let $=r[z],[rt,Y]=lm($.door[0],$.door[1],$.size[0],$.size[2],J),et={x:q.x0+rt+Eu[J][0],z:q.z0+Y+Eu[J][1]};L.push({ax:f,az:_,bx:et.x,bz:et.z})}d={id:p,x:f,z:_,y:g,biome:y,structures:C,paths:L,villagers:2+Math.floor(m(4)*3)}}}return i.set(p,d),d}function a(l,c,p,d){let m=[];for(let f=Math.floor((c-di)/vr);f<=Math.floor((d+di)/vr);f++)for(let _=Math.floor((l-di)/vr);_<=Math.floor((p+di)/vr);_++){let y=o(_,f);y&&y.x+di>=l&&y.x-di<=p&&y.z+di>=c&&y.z-di<=d&&m.push(y)}return m}return{plan:o,around:a,chunk:(l,c)=>a(l*16,c*16,l*16+16-1,c*16+16-1)}}function hm(n,t,e,i,s,r,o){let a=t*16,l=e*16,c=(_,y)=>_>=a&&_<a+16&&y>=l&&y<l+16,p=i.biome==="desert",d=p?s.desert||{}:{},m=_=>{let y=s.palette[_];if(!y)return null;let g=d[y]||y;return r.byId(g)},f=p?r.byId("sandstone"):r.byId("cobblestone");for(let _ of i.paths){let y=Math.max(Math.abs(_.bx-_.ax),Math.abs(_.bz-_.az));for(let g=0;g<=y;g++){let x=Math.round(_.ax+(_.bx-_.ax)*g/y),C=Math.round(_.az+(_.bz-_.az)*g/y);if(!c(x,C))continue;let L=o.height(x,C),T=pe(x-a,L,C-l);n[T]&&n[T]!==r.water&&(n[T]=r.path);for(let S=L+1;S<Math.min(64,L+4);S++){let R=pe(x-a,S,C-l);(n[R]===r.leaves||n[R]===r.log||S===L+1)&&(n[R]=0)}}}for(let _ of i.structures){let y=s.templates[_.tpl];if(!y)continue;let[g,,x]=y.size;for(let C=0;C<x;C++)for(let L=0;L<g;L++){let[T,S]=lm(L,C,g,x,_.rot),R=_.x0+T,N=_.z0+S;if(!c(R,N))continue;let b=R-a,A=N-l;for(let F=_.y-1;F>Math.max(0,_.y-8);F--){let B=pe(b,F,A);if(n[B]&&n[B]!==r.water)break;n[B]=f}for(let F=_.y+y.size[1];F<Math.min(64,_.y+y.size[1]+3);F++)n[pe(b,F,A)]=0;y.layers.forEach((F,B)=>{let K=(F[C]||"")[L];if(!K||K===" ")return;let J=_.y+B;J>=64||(n[pe(b,J,A)]=K==="."?0:m(K)||0)})}}}var vs=192;function um(n,t,e){let i=e&&e.ruins,s=new Map;function r(a,l){let c=a+","+l;if(s.has(c))return s.get(c);let p=null;if(i){let d=_=>ys(n+9001+_*31,a,l),m=a*vs+24+Math.floor(d(2)*(vs-48)),f=l*vs+24+Math.floor(d(3)*(vs-48));if(d(1)<i.chance&&Math.hypot(m,f)>140){let _=i.byBiome[t.biomeOf(m,f)],y=Array.isArray(_)?_[Math.floor(d(4)*_.length)]:_,g=y&&i.templates[y];if(g&&!(t.villages&&t.villages.around(m-40,f-40,m+40,f+40).length)){let x=g.layers[0][0].length,C=g.layers[0].length;p={id:c,kind:y,x:m-(x>>1),z:f-(C>>1),y:t.height(m,f)+(g.yoff||0),w:x,d:C,h:g.layers.length}}}}return s.set(c,p),p}function o(a,l,c,p){let d=[];for(let m=Math.floor((l-32)/vs);m<=Math.floor((p+32)/vs);m++)for(let f=Math.floor((a-32)/vs);f<=Math.floor((c+32)/vs);f++){let _=r(f,m);_&&_.x<=c&&_.x+_.w>a&&_.z<=p&&_.z+_.d>l&&d.push(_)}return d}return{around:o,chunk:(a,l)=>o(a*16,l*16,a*16+16-1,l*16+16-1),at:(a,l)=>o(Math.floor(a),Math.floor(l),Math.floor(a),Math.floor(l))[0]||null}}function fm(n,t,e,i,s,r){let o=s.ruins.templates[i.kind],a=s.ruins.palette,l=t*16,c=e*16,p=o.foundation?r(o.foundation):0,d=r("water");o.layers.forEach((m,f)=>m.forEach((_,y)=>{for(let g=0;g<_.length;g++){let x=_[g];if(x===" ")continue;let C=i.x+g-l,L=i.z+y-c,T=i.y+f;if(!(C<0||C>=16||L<0||L>=16||T<=0||T>=64)&&(n[pe(C,T,L)]=x==="."?0:r(a[x]),f===0&&p))for(let S=T-1,R=0;S>0&&R<8;S--,R++){let N=n[pe(C,S,L)];if(N&&N!==d)break;n[pe(C,S,L)]=p}}}))}function dm(n,t,e){let i=(Math.imul(n,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791))>>>0||1;return()=>{i=i+1831565813>>>0;let s=i;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function pm(n,t,e,i){let s=n.createInventory(27);for(let r of t||[])if(e()<r.p){let o=r.min+Math.floor(e()*(r.max-r.min+1));if(o>0){let a;do a=Math.floor(e()*27);while(s.slots[a]&&s.slots.some(l=>!l));s.slots[a]||(s.slots[a]={id:r.id,count:Math.min(o,i?i(r.id):64)})}}return s}var Dn=24;var gm={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},mm=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],Mr=112;function xm(n,t,e){let i=O=>t.num(O),s=O=>{try{return i(O)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Li(n),l=Li(n+101),c=Li(n+202),p=Li(n+303),d=Li(n+404),m=Au(n+505),f=Au(n+606);function _(O,z){let q=Xi(a,O/190,z/190,3),$=Xi(l,O/55,z/55,4),rt=Math.max(0,Xi(c,O/130,z/130,2)-.1),Y=27+q*9+$*6+rt*rt*75;return Math.max(4,Math.min(54,Math.floor(Y)))}let y=Li(n+808);function g(O,z){let q=_(O,z),$=Xi(y,O/900,z/900,2),rt=Math.min(1,Math.max(0,(Math.hypot(O,z)-240)/80)),Y=Math.min(1,Math.max(0,(-.18-$)/.17)),et=Y*Y*(3-2*Y)*rt;return et>0&&(q=Math.round(q*(1-et)+(Dn-14)*et)),q<Dn-1?Math.max(3,Math.floor(Dn-1-(Dn-1-q)*1.8)):q}function x(O,z){let q=(ys(n+3,O,z)-.5)*.025;return{t:Xi(p,O/420,z/420,2)+q,u:Xi(d,O/380,z/380,2)-q}}function C(O,z,q=g(O,z)){if(q<Dn-1)return"ocean";let{t:$,u:rt}=x(O,z);return $<-.3?"snow":$>.28&&rt<.05?"desert":rt>.12?"forest":"plains"}let L=null;function T(){if(L)return L;let O=(z,q)=>{let $=g(z,q);return $>=Dn+2&&Math.abs(g(z+1,q)-$)<2&&Math.abs(g(z,q+1)-$)<2};for(let z=0;z<400;z+=2)for(let q=0;q<Math.max(1,z*2);q++){let $=q/Math.max(1,z*2)*Math.PI*2,rt=Math.round(Math.cos($)*z),Y=Math.round(Math.sin($)*z);if(O(rt,Y)&&O(rt+3,Y+2))return L={x:rt+.5,y:g(rt,Y)+1,z:Y+.5,stele:{x:rt+3,y:g(rt+3,Y+2)+1,z:Y+2},portal:{x:rt-3,y:Math.max(Dn+1,g(rt-3,Y+2))+1,z:Y+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function S(O,z){let q=[],$=O*16,rt=z*16,Y=Math.floor(($-80)/Mr),et=Math.floor(($+16+80)/Mr),ot=Math.floor((rt-80)/Mr),wt=Math.floor((rt+16+80)/Mr);for(let bt=ot;bt<=wt;bt++)for(let Ut=Y;Ut<=et;Ut++){let Mt=Pt=>Vn(n+707,Ut,Pt,bt);if(Mt(0)>.25)continue;let At=(Ut+Mt(1))*Mr,k=(bt+Mt(2))*Mr,Q=Mt(3)*Math.PI,ft=40+Mt(4)*30;q.push({ax:At-Math.cos(Q)*ft/2,az:k-Math.sin(Q)*ft/2,dx:Math.cos(Q)*ft,dz:Math.sin(Q)*ft,len:ft,floor:7+Math.floor(Mt(5)*6),w:1.6+Mt(6)*1.2})}return q}function R(O,z){let q=new Uint8Array(16384),$=O*16,rt=z*16,Y=18,et=new Int16Array(Y*Y);for(let At=-1;At<=16;At++)for(let k=-1;k<=16;k++)et[(At+1)*Y+k+1]=g($+k,rt+At);let ot=T(),wt=new Array(256);for(let At=0;At<16;At++)for(let k=0;k<16;k++){let Q=$+k,ft=rt+At,Pt=et[(At+1)*Y+k+1],xt=Math.max(Math.abs(et[(At+1)*Y+k]-Pt),Math.abs(et[(At+1)*Y+k+2]-Pt),Math.abs(et[At*Y+k+1]-Pt),Math.abs(et[(At+2)*Y+k+1]-Pt))>=3,Lt=wt[At*16+k]=C(Q,ft,Pt),se=Pt<=Dn+1,lt,ee;Lt==="ocean"||se||Lt==="desert"?(lt=r.sand,ee=r.sand):xt?(lt=r.stone,ee=r.stone):Lt==="snow"?(lt=r.snow,ee=r.dirt):(lt=r.grass,ee=r.dirt);for(let qt=0;qt<=Pt;qt++){let Qt;if(qt===0?Qt=r.bedrock:qt===Pt?Qt=lt:qt>=Pt-3?Qt=ee:Lt==="desert"&&qt>=Pt-7?Qt=r.sandstone:Qt=r.stone,Qt===r.stone&&xt&&qt>=Pt-4){let te=Vn(n,Q,qt,ft);te<.06?Qt=r.coal:te<.09?Qt=r.iron:te<.096&&(Qt=r.ruby)}q[pe(k,qt,At)]=Qt}for(let qt=Pt+1;qt<=Dn;qt++)q[pe(k,qt,At)]=qt===Dn&&Lt==="snow"?r.ice:r.water}N(q,O,z,et,Y);for(let At=0;At<mm.length;At++){let k=mm[At],Q=r[k.ore];for(let ft=0;ft<k.count;ft++){let Pt=lt=>Vn(n+31*At+lt,O*977+ft,lt,z*131+ft);if(Pt(9)>k.chance)continue;let xt=Math.floor(Pt(1)*16),Lt=k.y0+Math.floor(Pt(2)*(k.y1-k.y0)),se=Math.floor(Pt(3)*16);for(let lt=0;lt<k.size;lt++){xt>=0&&xt<16&&se>=0&&se<16&&Lt>0&&Lt<64&&q[pe(xt,Lt,se)]===r.stone&&(q[pe(xt,Lt,se)]=Q);let ee=Math.floor(Pt(10+lt)*6);ee===0?xt++:ee===1?xt--:ee===2?Lt++:ee===3?Lt--:ee===4?se++:se--}}}let bt=e?K.chunk(O,z):[];b(q,O,z,et,Y,wt,ot,bt);for(let At of bt)hm(q,O,z,At,e,r,B);if(J)for(let At of J.chunk(O,z))fm(q,O,z,At,e,r.byId);let Ut=ot.stele;if(Math.floor(Ut.x/16)===O&&Math.floor(Ut.z/16)===z){let At=Ut.x-$,k=Ut.z-rt;q[pe(At,Ut.y,k)]=r.stele,q[pe(At,Ut.y+1,k)]=r.stele}let Mt=ot.portal;if(r.portal&&Mt&&Math.floor(Mt.x/16)===O&&Math.floor(Mt.z/16)===z){let At=Mt.x-$,k=Mt.z-rt;for(let Q=Math.max(1,Mt.y-3);Q<Mt.y;Q++)(!q[pe(At,Q,k)]||q[pe(At,Q,k)]===r.water)&&(q[pe(At,Q,k)]=r.stone);q[pe(At,Mt.y,k)]=r.portal,q[pe(At,Mt.y+1,k)]=r.portal}return q}function N(O,z,q,$,rt){let Y=z*16,et=q*16,ot=4,wt=16/ot+1,bt=64/ot+1,Ut=new Float32Array(wt*wt*bt);for(let k=0;k<bt;k++)for(let Q=0;Q<wt;Q++)for(let ft=0;ft<wt;ft++){let Pt=Y+ft*ot,xt=k*ot,Lt=et+Q*ot,se=m(Pt/22,xt/14,Lt/22)-.5,lt=f(Pt/22,xt/14,Lt/22)-.5;Ut[(k*wt+Q)*wt+ft]=se*se+lt*lt}let Mt=(k,Q,ft)=>Ut[(Q*wt+ft)*wt+k],At=S(z,q);for(let k=0;k<16;k++)for(let Q=0;Q<16;Q++){let ft=$[(k+1)*rt+Q+1],Pt=ft<=Dn+1,xt=Pt?ft-5:ft,Lt=Q>>2,se=k>>2,lt=(Q&3)/ot,ee=(k&3)/ot;for(let te=3;te<=xt;te++){let ye=te>>2,Ne=(te&3)/ot,Re=Mt(Lt,ye,se)+(Mt(Lt+1,ye,se)-Mt(Lt,ye,se))*lt,Ue=Mt(Lt,ye,se+1)+(Mt(Lt+1,ye,se+1)-Mt(Lt,ye,se+1))*lt,H=Mt(Lt,ye+1,se)+(Mt(Lt+1,ye+1,se)-Mt(Lt,ye+1,se))*lt,Ve=Mt(Lt,ye+1,se+1)+(Mt(Lt+1,ye+1,se+1)-Mt(Lt,ye+1,se+1))*lt;if((Re+(Ue-Re)*ee)*(1-Ne)+(H+(Ve-H)*ee)*Ne<.008){let U=pe(Q,te,k);O[U]!==r.bedrock&&O[U]!==r.water&&(O[U]=0)}}if(!At.length||Pt)continue;let qt=Y+Q,Qt=et+k;for(let te of At){let ye=Math.max(0,Math.min(1,((qt-te.ax)*te.dx+(Qt-te.az)*te.dz)/(te.len*te.len))),Ne=te.ax+te.dx*ye,Re=te.az+te.dz*ye,Ue=Math.hypot(qt-Ne,Qt-Re),H=te.w*Math.sin(Math.PI*ye);if(Ue<H)for(let Ve=te.floor+Math.floor(Ue*2);Ve<=ft;Ve++){let me=pe(Q,Ve,k);O[me]!==r.water&&(O[me]=0)}}}}function b(O,z,q,$,rt,Y,et,ot){let wt=z*16,bt=q*16;for(let Ut=0;Ut<16;Ut++)for(let Mt=0;Mt<16;Mt++){let At=wt+Mt,k=bt+Ut,Q=$[(Ut+1)*rt+Mt+1],ft=Y[Ut*16+Mt];if(Q+1>=64||Math.hypot(At-et.x,k-et.z)<48)continue;let Pt=O[pe(Mt,Q,Ut)],xt=pe(Mt,Q+1,Ut);if(O[xt])continue;let Lt=ys(n+11,At,k),se=ys(n+13,At,k);Pt===r.grass?Lt<.012&&o.length?O[xt]=o[Math.floor(se*o.length)]:Lt<(ft==="plains"?.1:.05)&&r.tallgrass?O[xt]=r.tallgrass:ft==="forest"&&Lt<.08&&r.fern?O[xt]=r.fern:ft==="forest"&&Lt<.084&&r.mushR&&(O[xt]=se<.5?r.mushR:r.mushB):Pt===r.sand&&ft==="desert"&&Q>Dn+1&&Lt<.008&&r.deadbush&&(O[xt]=r.deadbush)}for(let Ut=2;Ut<14;Ut++)for(let Mt=2;Mt<14;Mt++){let At=wt+Mt,k=bt+Ut,Q=$[(Ut+1)*rt+Mt+1],ft=Y[Ut*16+Mt],Pt=O[pe(Mt,Q,Ut)];if(Math.abs(At-et.x)<7&&Math.abs(k-et.z)<7||ot.some(lt=>Math.abs(At-lt.x)<di+2&&Math.abs(k-lt.z)<di+2))continue;let xt=ys(n+7,At,k),Lt=ys(n+9,At,k);if(ft==="desert"&&Pt===r.sand&&Q>Dn+1&&xt<.008&&r.cactus){let lt=1+Math.floor(Lt*3);for(let ee=Q+1;ee<=Q+lt&&ee<64;ee++)O[pe(Mt,ee,Ut)]=r.cactus;continue}if(ft==="snow"&&Pt===r.snow&&xt<.02){F(O,Mt,Ut,Q,5+Math.floor(Lt*3));continue}let se=ft==="forest"?.035:ft==="plains"?.003:0;Pt===r.grass&&xt<se&&A(O,Mt,Ut,Q,At,k,4+Math.floor(Lt*2))}}function A(O,z,q,$,rt,Y,et){let ot=$+et;if(!(ot+2>=64)){for(let wt=ot-2;wt<=ot+1;wt++){let bt=wt>=ot?1:2;for(let Ut=-bt;Ut<=bt;Ut++)for(let Mt=-bt;Mt<=bt;Mt++){if(bt===2&&Math.abs(Mt)===2&&Math.abs(Ut)===2&&Vn(n,rt+Mt,wt,Y+Ut)<.6)continue;let At=pe(z+Mt,wt,q+Ut);O[At]===r.air&&(O[At]=r.leaves)}}O[pe(z,$,q)]=r.dirt;for(let wt=$+1;wt<=ot;wt++)O[pe(z,wt,q)]=r.log}}function F(O,z,q,$,rt){let Y=$+rt;if(!(Y+2>=64)){for(let et=$+2;et<=Y+1;et++){let ot=Y+1-et,wt=ot>=4?2:ot>=1?1:0;for(let bt=-wt;bt<=wt;bt++)for(let Ut=-wt;Ut<=wt;Ut++){if(wt===2&&Math.abs(Ut)+Math.abs(bt)>3)continue;let Mt=pe(z+Ut,et,q+bt);O[Mt]===r.air&&(O[Mt]=r.sleaves)}}O[pe(z,$,q)]=r.dirt;for(let et=$+1;et<=Y;et++)O[pe(z,et,q)]=r.slog}}let B={height:g,baseHeight:_,biomeOf:C,climate:x,genChunk:R,findSpawn:T,SEA:Dn},K=cm(n,B,e);B.villages=K;let J=e&&e.ruins?um(n,B,e):null;return B.ruins=J,B}function Cu(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,p=t,d=t+s,m=e-a,f=e+a,_=Math.floor(l),y=Math.floor(c-1e-6),g=Math.floor(p),x=Math.floor(d-1e-6),C=Math.floor(m),L=Math.floor(f-1e-6),T=!1;for(let S=g;S<=x;S++)for(let R=C;R<=L;R++)for(let N=_;N<=y;N++){let b=r(N,S,R);if(!b)continue;let A=b===!0?hb:b;for(let F of A){let B=N+F[0],K=S+F[1],J=R+F[2],O=N+F[3],z=S+F[4],q=R+F[5];if(!(O<=l+1e-6||B>=c-1e-6||z<=p+1e-6||K>=d-1e-6||q<=m+1e-6||J>=f-1e-6)){if(!o)return!0;T=!0,o.push([B,K,J,O,z,q])}}}return T}var hb=[[0,0,0,1,1,1]],Ao=(n,t,e,i,s,r)=>Cu(n,t,e,i,s,r,null),_m=(n,t,e=.6,i=1.8)=>!Ao(n.x,n.y,n.z,e,i,t);function ac(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,p=0,d=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,m=Math.max(1,Math.ceil(d/.3)),f=e/m,_=[];for(let y=0;y<m;y++){let g=t.y*f;g&&(_.length=0,Cu(n.x,n.y+g,n.z,r,o,i,_)?(g<0?(n.y=Math.max(..._.map(x=>x[4])),c=!0):n.y=Math.min(..._.map(x=>x[1]))-o,t.y=0):n.y+=g);for(let x of["x","z"]){let C=t[x]*f;if(!C)continue;let L={x:n.x,y:n.y,z:n.z};if(L[x]+=C,_.length=0,!Cu(L.x,L.y,L.z,r,o,i,_)){n[x]=L[x];continue}if(a&&(c||s.grounded)){let S=Math.max(..._.map(R=>R[4]));if(S-n.y>0&&S-n.y<=1.01&&!Ao(L.x,S,L.z,r,o,i)&&!Ao(n.x,S,n.z,r,o,i)){p+=S-n.y,n.y=S,n[x]=L[x];continue}}let T=x==="x"?0:2;n[x]=C>0?Math.min(..._.map(S=>S[T]))-l-1e-4:Math.max(..._.map(S=>S[T+3]))+l+1e-4,Ao(n.x,n.y,n.z,r,o,i)&&(n[x]=L[x]-C),t[x]=0}}return!c&&t.y<=0&&Ao(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:p}}function ub(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let p=[e+c[0],i+c[1],s+c[2]],d=[e+c[3],i+c[4],s+c[5]],m=0,f=1/0,_=-1,y=!0;for(let g=0;g<3&&y;g++){if(Math.abs(a[g])<1e-12){(o[g]<p[g]||o[g]>d[g])&&(y=!1);continue}let x=(p[g]-o[g])/a[g],C=(d[g]-o[g])/a[g];x>C&&([x,C]=[C,x]),x>m&&(m=x,_=g),C<f&&(f=C),m>f&&(y=!1)}if(y&&(!l||m<l.t)){let g=[0,0,0];_>=0&&(g[_]=-Math.sign(a[_])),l={t:m,face:_>=0?g:null}}}return l}function br(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),p=Math.sign(t.y),d=Math.sign(t.z),m=c?Math.abs(1/t.x):1/0,f=p?Math.abs(1/t.y):1/0,_=d?Math.abs(1/t.z):1/0,y=c?(c>0?o+1-n.x:n.x-o)*m:1/0,g=p?(p>0?a+1-n.y:n.y-a)*f:1/0,x=d?(d>0?l+1-n.z:n.z-l)*_:1/0,C=[0,0,0],L=0;for(;L<=e;){let T=i(o,a,l);if(T&&s(T)){let S=r&&r(T);if(!S)return{x:o,y:a,z:l,n:T,face:C,dist:L};let R=ub(n,t,o,a,l,S);if(R&&R.t<=e)return{x:o,y:a,z:l,n:T,face:R.face||C,dist:R.t}}y<g&&y<x?(o+=c,L=y,y+=m,C=[-c,0,0]):g<x?(a+=p,L=g,g+=f,C=[0,-p,0]):(l+=d,L=x,x+=_,C=[0,0,-d])}return null}var Nu={};yi(Nu,{ACC:()=>Mm,BOOST:()=>Ru,BRAKE:()=>Sm,CONN:()=>pi,DECAY:()=>wm,DIR:()=>To,FRIC:()=>bm,MAX:()=>Eo,OPP:()=>wr,SLOPE_G:()=>Iu,UP:()=>Di,blockId:()=>Co,connect:()=>cc,isStraight:()=>Pu,linked:()=>Am,mount:()=>Lu,next:()=>Ro,pos:()=>hc,shapeOf:()=>Sr,step:()=>Du});var pi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Di={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},To={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},wr={n:"s",s:"n",e:"w",w:"e"},fb=["ns","ew","ne","nw","se","sw"],ym={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},Mm=3,Eo=6,Ru=11,bm=.8,Sm=6,wm=1.5,Iu=2.5,Pu=n=>n==="ns"||n==="ew"||!!Di[n],Co=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),lc=(n,t)=>pi[n].find(e=>e!==t);function Sr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":fb.find(e=>pi[e].includes(n)&&pi[e].includes(t))||null}function Ro(n,t,e,i,s,r){let[o,a]=To[s];for(let l of Di[r]===s?[1]:[0,-1]){let c=n(t+o,e+l,i+a);if(c&&pi[c.shape].includes(wr[s])&&Di[c.shape]===wr[s]==(l===-1))return{x:t+o,y:e+l,z:i+a,r:c}}return null}function Am(n,t,e,i){let s=n(t,e,i);return s?pi[s.shape].filter(r=>Ro(n,t,e,i,r,s.shape)):[]}function vm(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===wr[e]?"asc_"+e:null}return n.length===2?Sr(n[0].d,n[1].d):Sr(n[0].d)}function cc(n,t,e,i,s,r="n"){let o=[];for(let c of["n","e","s","w"]){let[p,d]=To[c],m=wr[c];for(let f of[0,1,-1]){let _=t+p,y=e+f,g=i+d,x=n(_,y,g);if(!x)continue;if(pi[x.shape].includes(m)&&Di[x.shape]===m==(f===-1)){o.push({d:c,dy:f,pri:0});break}let C=Am(n,_,y,g);if(C.length>=2)continue;let L=null;if(f===-1?L=!C.length||C[0]===c?"asc_"+m:null:Di[x.shape]&&C.includes(Di[x.shape])||(L=C.length?Sr(C[0],m):Sr(m)),L&&(!x.powered||Pu(L))){o.push({d:c,dy:f,pri:1,ns:L,at:[_,y,g]});break}}}o.sort((c,p)=>c.pri-p.pri);let a=[];for(let c of o){if(a.length===2)break;let p=vm(a.concat([c]));!p||s&&!Pu(p)||a.push(c)}return{shape:a.length?vm(a):Sr(r),updates:a.filter(c=>c.pri===1).map(c=>[c.at[0],c.at[1],c.at[2],c.ns])}}function Lu(n,t,e,i,s,r,o=()=>!1){let a=pi[n],l=p=>To[p][0]*s+To[p][1]*r+(o(p)?.01:0),c=l(a[0])>=l(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:c===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function Du(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,pi[s.shape].includes(n.from)||(n.from=pi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=lc(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,Ru)),e>.1?n.v<Eo&&(n.v=Math.min(Eo,n.v+Mm*t)):e<-.1?n.v=Math.max(0,n.v-Sm*t):n.v=Math.max(0,n.v-bm*t),n.v>Eo&&!s.powered&&(n.v=Math.max(Eo,n.v-wm*t)),Di[s.shape]&&(n.v+=(lc(s.shape,n.from)===Di[s.shape]?-Iu:Iu)*t,n.v<0&&(n.from=lc(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=lc(s.shape,n.from),o=Ro(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=wr[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,Ru));else{n.s=1,n.v=0;break}}return n}function hc(n){let t=pi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=ym[e],r=ym[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[l,c,p]=a<.5?[s,o,a*2]:[o,r,a*2-1],d=l[0]+(c[0]-l[0])*p,m=l[1]+(c[1]-l[1])*p,f=Di[n.shape],_=f?f==="n"?1-m:f==="s"?m:f==="e"?d:1-d:0,y=f?i===f?1:-1:0;return{x:n.x+d,y:n.y+_,z:n.z+m,yaw:Math.atan2(-(c[0]-l[0]),-(c[1]-l[1])),pitch:Math.atan2(y,1)*(f?1:0)}}var zu={};yi(zu,{WINDOW:()=>db,create:()=>Uu,reel:()=>Ou,roll:()=>Bu,tick:()=>Fu});var db=1.3,Em=n=>3+n()*6;function Uu(n=Math.random){return{phase:"wait",t:0,biteAt:Em(n),rnd:n}}function Fu(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=Em(n.rnd),"escape"):null}var Ou=n=>n&&n.phase==="bite"?"catch":"early";function Bu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function Tm(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function Cm(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function Rm(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var Im=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function Pm(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function Lm(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[pe(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var Dm=n=>btoa(String.fromCharCode.apply(null,n)),Nm=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var mb=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],uc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=mb(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,Nm(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=Lm(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[l,c]=om(r);for(let[p,d]of[...this.portals])Math.floor(d.x/16)===l&&Math.floor(d.z/16)===c&&this.portals.delete(p);for(let p=0;p<256;p++){let d=this.reg.get(a[p]);if(d&&(d.interact==="portal"||d.interact==="shadow_portal")){let m=l*16+p%16,f=c*16+Math.floor(p/16);this.portals.set(m+","+f,{x:m,z:f,name:d.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],l=o*4,c=.95+(o*2654435761>>>28)/16*.1;r.data[l]=a[0]*c,r.data[l+1]=a[1]*c,r.data[l+2]=a[2]*c,r.data[l+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,l=i-o/2/s,c=e+r/2/s,p=i+o/2/s;for(let d=Math.floor(l/16);d<=Math.floor(p/16);d++)for(let m=Math.floor(a/16);m<=Math.floor(c/16);m++){let f=this.tile(Pi(m,d));f&&t.drawImage(f,Math.round((m*16-a)*s),Math.round((d*16-l)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:l}}explored(t,e){return this.tops.has(Pi(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=Dm(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function ku(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var Gu={};yi(Gu,{ARENA_R:()=>Io,H0:()=>mi,LAIR:()=>gi,findFrame:()=>Hu,makeShadowTerrain:()=>Vu});var mi=22,gi={x:0,z:40},Io=14;function Vu(n,t){let e=d=>t.num(d),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Li(n+11),r=Li(n+23),o=(d,m)=>d<m?1:d<m+8?1-(d-m)/8:0;function a(d,m){let f=mi+Xi(s,d/64,m/64,3)*10,_=Math.max(o(Math.hypot(d-.5,m-.5),9),o(Math.hypot(d-gi.x,m-gi.z),Io+2));return f=f*(1-_)+mi*_,Math.max(6,Math.min(54,Math.round(f)))}let l=new Set;for(let d=0;d<8;d++)l.add(Math.round(gi.x+Math.cos(d*Math.PI/4)*Io)+","+Math.round(gi.z+Math.sin(d*Math.PI/4)*Io));function c(d,m){let f=new Uint8Array(16384),_=d*16,y=m*16;for(let g=0;g<16;g++)for(let x=0;x<16;x++){let C=_+x,L=y+g,T=a(C,L),S=Math.hypot(C-.5,L-.5),R=Math.hypot(C-gi.x,L-gi.z);for(let N=0;N<=T;N++){let b=N===0?i.bedrock:N===T?i.moss:i.stone;if(b===i.stone){let A=Vn(n,C,N,L);N<16&&A<.014?b=i.ore:A>.995&&(b=i.vein)}f[pe(x,N,g)]=b}if(S>6&&Math.abs(r(C/30,L/30))<.035&&(f[pe(x,T,g)]=i.vein),R<Io-1&&(f[pe(x,T,g)]=(Math.floor(C)+Math.floor(L))%2?i.bricks:i.stone),l.has(C+","+L)){for(let N=T+1;N<=T+4;N++)f[pe(x,N,g)]=i.bricks;f[pe(x,T+5,g)]=i.vein}if(L===0&&C>=-1&&C<=2)for(let N=mi+1;N<=mi+5;N++){let b=C>=0&&C<=1&&N>=mi+2&&N<=mi+4;f[pe(x,N,g)]=b?i.portal:i.frame}}return f}let p={x:1,y:mi+1,z:2.5,stele:{x:1,y:mi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:c,findSpawn:()=>p,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function Hu(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let l=-4;l<=1;l++){let c=t+o[0]*a,p=i+o[1]*a,d=e+l,m=(y,g)=>[c+o[0]*y,d+g,p+o[1]*y],f=[];for(let y=0;y<2;y++)for(let g=0;g<3;g++)f.push(m(y,g));if(!f.every(y=>r(n(y[0],y[1],y[2]))))continue;let _=[];for(let y=0;y<3;y++)_.push(m(-1,y),m(2,y));for(let y=0;y<2;y++)_.push(m(y,-1),m(y,3));if(_.every(y=>n(y[0],y[1],y[2])===s)&&_.some(y=>y[0]===t&&y[1]===e&&y[2]===i))return f}return null}var mc={};yi(mc,{HOTBAR:()=>Wu,SIZE:()=>fc,add:()=>Sn,canAdd:()=>Do,count:()=>xi,craft:()=>qu,craftable:()=>pc,createInventory:()=>Po,deserialize:()=>dc,moveBetween:()=>Yu,moveSlot:()=>Xu,remove:()=>Lo,serialize:()=>No,takeFromSlot:()=>jn});var fc=36,Wu=9;function Po(n=36){return{slots:new Array(n).fill(null)}}function Sn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function xi(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Lo(n,t,e){if(xi(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function jn(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Xu(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Do(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return Sn(s,t,e,i)===0}var No=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function dc(n,t=36){let e=Po(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function pc(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(xi(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function qu(n,t,e=()=>64,i){let s=pc(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Lo(n,o,t.in[o]);return Sn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Yu(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function gb(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Ar=(n,t)=>n.owned.includes(t),Um=(n,t)=>n?t?2:1:0;function Hn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function Os(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function Fm(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Om(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Ar(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(Os(n,e.price),n.owned.push(e.id),{ok:!0}):Do(t,e.id,e.qty,i)?(Os(n,e.price),Sn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Bm=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function zm(n){let t=gb(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Vm(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function Hm(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Hn(n,s),canSpend:s=>n.coins>=s,spend:async s=>Os(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function Gm(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var Qu={};yi(Qu,{createStory:()=>$u,currentMain:()=>Ju,dailyPicks:()=>Wm,dailyProgress:()=>ju,restartTutorial:()=>Zu,skipTutorial:()=>gc,tick:()=>Ku});function $u(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function Wm(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var Zu=n=>{n.tut={step:0,base:null,done:!1}},gc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},Ju=(n,t)=>t.main[n.main]||null;function Ku(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=Wm(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(l=>l.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var ju=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Fo=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],Uo=100,Xm={choice:25,typed:40},yb=5,tf=100;function qm(){return{phase:0,hp:Uo,retry:[],done:!1}}function Ym(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(Uo,n.hp+yb),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?Xm.typed:Xm.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<Fo.length-1?(n.phase++,n.hp=Uo,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var ef=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function Mb(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Zn(n);return e.colorSpace=sn,e}function $m(){let n=new pn,t=[],e=(a,l)=>{let c=new vn({color:a});return c.userData.base=new ce(a),c.userData.role=l,t.push(c),c},i=(a,l,c,p,d,m,f,_,y=n)=>{let g=new Oe(new tn(a,l,c),e(p,d));return g.position.set(m,f,_),y.add(g),g},s=ef[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new Oe(new tn(1.15,.72,.02),new vn({map:Mb(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let l=new pn;return l.position.set(a*1,1.9,.2),n.add(l),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,l).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,l),l});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function Zm(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function Jm(n,t){let e=ef[Math.min(ef.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function bb(){return new Map}function Km(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function nf(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function Sb(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function jm(n){let t=bb();for(let e in n||{})t.set(e,Sb(n[e]));return t}var xc=16;var uE=18;var Yi=32;function Qm(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var je=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],vt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function wb(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function ie(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function qi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}ie(n,o)}var Ab=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function Eb(n,t){let e=je(t.color),i=Qm(wb(t.block+t.face)),s=Yi;if(Ab.has(t.pattern)){Tb(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=vt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?je(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=vt(e,1.12);for(let d=0;d<4;d++)qi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=vt(e,.96);for(let d=0;d<4;d++)qi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let d=je(t.top);n.fillStyle=vt(d);let m=[[0,0],[s,0]];for(let f=s;f>=0;f-=4)m.push([f,8+Math.round(i()*5)]);ie(n,m)}if(o==="stone"||o==="bedrock")for(let d=0;d<5;d++)n.fillStyle=vt(e,i()<.5?.9:1.08),qi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let d=0;d<4;d++)n.fillStyle=vt(e,.92),qi(n,i,i()*s,i()*s,5);n.fillStyle=vt(a);for(let d=0;d<5;d++)qi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let d=0;d<26;d++)n.fillStyle=vt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let d=3;d<s;d+=7)n.fillStyle=vt(e,.82),n.fillRect(d,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=vt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=vt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let d=0;d<9;d++)n.fillStyle=vt(e,i()<.5?.78:1.15),qi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let d=7;d<s;d+=8)n.fillStyle=vt(e,.78),n.fillRect(0,d,s,1);n.fillStyle=vt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=vt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=vt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=vt([185,182,174]),ie(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=vt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",ie(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=vt(e,1.18,.72);for(let d=6;d<s;d+=10)n.fillRect(4+Math.floor(i()*10),d,10,2)}if(o==="gold"&&(n.fillStyle=vt(e,1.15),ie(n,[[0,0],[s,0],[0,s]]),n.fillStyle=vt(e,.9),ie(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=vt(je("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=vt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=vt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=vt(je("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=vt(je("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=vt(a),n.fillRect(14,0,4,4)):(n.fillStyle=vt(je(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=vt(a),n.fillRect(0,0,s,10),n.fillStyle=vt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=vt(je("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=vt(a),n.fillRect(0,0,9,14))),o==="wool")for(let d=0;d<7;d++)n.fillStyle=vt(e,i()<.5?.94:1.04),qi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=vt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=vt(a,1.3),ie(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=vt(je("#EFEBDD"),1,.8),ie(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=vt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let d=8;d<s;d+=9)n.fillStyle=vt(e,.9),n.fillRect(0,d,s,2);if(o==="cactus")if(t.face==="side"){for(let d=4;d<s;d+=8)n.fillStyle=vt(e,.82),n.fillRect(d,0,2,s);n.fillStyle=vt(je("#EFEBDD"),1,.7);for(let d=0;d<6;d++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=vt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",ie(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",ie(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=vt(e,1.1),ie(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=vt(e,.92),ie(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=vt(e,.78);for(let d=0;d<s;d+=8){n.fillRect(0,d+7,s,1);let m=d/8%2?0:8;for(let f=m;f<s;f+=16)n.fillRect(f,d,1,8)}}if(o==="mossy"){n.fillStyle=vt(a);for(let d=0;d<6;d++)qi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=vt(e,.6),ie(n,[[4,2],[12,14],[10,15],[3,4]]),ie(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=vt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=vt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=vt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=vt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=vt(e,1.08),ie(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=vt(je("#D9CBB5"));for(let d=0;d<s;d+=8){n.fillRect(0,d+6,s,2);let m=d/8%2?0:8;for(let f=m;f<s;f+=16)n.fillRect(f,d,2,6)}}if(o==="checker"&&(n.fillStyle=vt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let d=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let m of[3,18]){let f=3;for(;f<s-4;){let _=3+Math.floor(i()*3);n.fillStyle=d[Math.floor(i()*d.length)],n.fillRect(f,m+Math.floor(i()*3),_,11),f+=_+1}}n.fillStyle=vt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let d=7;d<s;d+=8)n.fillStyle=vt(e,.8),n.fillRect(0,d,s,1);if(o==="hay")if(t.face==="side"){for(let d=3;d<s;d+=5)n.fillStyle=vt(e,.88),n.fillRect(d,0,1,s);n.fillStyle=vt(je("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=vt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let d=5;d<s;d+=6)n.fillStyle=vt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=vt(je("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=vt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=vt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=vt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),ie(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let d=7;d<s;d+=8)n.fillStyle=vt(e,.85),n.fillRect(d,0,1,s);n.fillStyle=vt(je("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=vt(je("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=vt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=vt(e),n.fillRect(0,0,s,s),n.fillStyle=vt(je("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let d=7;d<s;d+=8)n.fillStyle=vt(e,.85),n.fillRect(0,d,s,1);t.face==="side"&&(n.fillStyle=vt(a),n.fillRect(0,11,s,3),n.fillStyle=vt(je("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let d=3;d<s;d+=6)n.fillStyle=vt(e,.72),n.fillRect(0,d,s,2);if(o==="furnace"){for(let d=0;d<4;d++)n.fillStyle=vt(e,i()<.5?.9:1.08),qi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=vt(a),n.fillRect(8,15,s-16,11),n.fillStyle=vt(je("#E0352B"),1,.85),ie(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=vt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=vt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=vt(a),ie(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let d=0;d<c.length;d+=4){let m=1+(i()-.5)*.09;c[d]=Math.min(255,c[d]*m),c[d+1]=Math.min(255,c[d+1]*m),c[d+2]=Math.min(255,c[d+2]*m)}n.putImageData(l,0,0);let p=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=p,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function t0(n){let t=document.createElement("canvas");t.width=t.height=Yi*xc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Yi;let a=o.getContext("2d",{willReadFrequently:!0});Eb(a,s),e.drawImage(o,r%xc*Yi,Math.floor(r/xc)*Yi),i[r]=o}),{canvas:t,tileCanvas:i}}function e0(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ie(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ie(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Yi,l=(c,p,d,m,f,_,y,g)=>{r.setTransform(p*a,d*a,m*a,f*a,_,y),r.drawImage(o[c],0,0),g&&(r.fillStyle=`rgba(20,24,20,${g})`,r.fillRect(0,0,Yi,Yi))};l(i.tile.top,20,10,-20,10,24,4,0),l(i.tile.side,20,10,0,22,4,14,.12),l(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,l="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,ie(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ie(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,ie(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ie(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,ie(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ie(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,ie(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[c,p]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,p,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let c=0;c<4;c++)ie(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),ie(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,ie(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,ie(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,ie(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,ie(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),ie(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",ie(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),ie(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",ie(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,ie(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",ie(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=l,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,ie(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",ie(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let c of[-8,8])r.beginPath(),r.arc(c,10,4,0,7),r.fill()}else o==="saddle"?(r.fillStyle=a,ie(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3)):o==="gem"?(r.fillStyle=a,ie(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ie(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:l,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&ie(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&ie(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),ie(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ie(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ie(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function n0(){let n=Qm(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Yi;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,l=6+n()*20,c=n()*Math.PI;ie(r,[[a,l],[a+Math.cos(c)*9,l+Math.sin(c)*9],[a+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function Tb(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?je(t.accent):e,a=(l,c,p)=>{n.fillStyle=p,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,vt(e)),n.fillStyle=vt(e,1.1),ie(n,[[16,26],[9,20],[15,22]]),ie(n,[[17,24],[24,18],[18,21]]),n.fillStyle=vt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;ie(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=vt(je("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),p=14+Math.floor(i()*14);n.fillStyle=vt(e,i()<.5?.9:1.1),ie(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-p]])}else if(r==="deadbush")n.strokeStyle=vt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=vt(e),n.fillRect(14,18,4,14),n.fillStyle=vt(o),ie(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=vt(je("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=vt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=vt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let p=0;p<5;p++){let d=5+p*5;n.fillStyle=vt(e),n.fillRect(d,s-c,2,c),l===3&&(n.fillStyle=vt(o),ie(n,[[d-2,s-c+9],[d+1,s-c-1],[d+4,s-c+9]]))}}else if(r==="rail"){let l=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],c={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[l];n.save(),n.translate(s/2,s/2),n.rotate(c*Math.PI/2),n.translate(-s/2,-s/2);let p=vt(je("#8C6640")),d=vt(e),m=s*.33,f=s*.67;if(l==="ns"||l==="ew"){n.fillStyle=p;for(let _=2;_<s;_+=6)n.fillRect(4,_,s-8,3);n.fillStyle=d,n.fillRect(m-1.5,0,3,s),n.fillRect(f-1.5,0,3,s),t.accent&&(n.fillStyle=vt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=p,n.lineWidth=3;for(let _=0;_<5;_++){let y=Math.PI/2+(_+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(y)*(s-f-4),Math.sin(y)*(s-f-4)),n.lineTo(s+Math.cos(y)*(s-m+4),Math.sin(y)*(s-m+4)),n.stroke()}n.strokeStyle=d;for(let _ of[s-m,s-f])n.beginPath(),n.arc(s,0,_,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=vt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var i0=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,s0=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function Cb(n,t){let e=Wi(n),i=Wi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,p=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,p)<=14&&s.push([e+o,i+r])}return s}function o0(n){let t=new Zn(n);t.magFilter=rn,t.minFilter=rn,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new j(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new Mn({uniforms:e,vertexShader:i0,fragmentShader:s0}),s=new Mn({uniforms:e,vertexShader:i0,fragmentShader:s0,transparent:!0,depthWrite:!1,side:Jn});return{opaque:i,trans:s,uniforms:e,tex:t}}function r0(n){let t=new an;return t.setAttribute("position",new Ke(n.pos,3)),t.setAttribute("uv",new Ke(n.uv,2)),t.setAttribute("light",new Ke(n.light,1)),t.setAttribute("lt",new Ke(n.lt,2,!0)),t.setIndex(new Ke(n.index,1)),t.computeBoundingSphere(),t}var _c=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Pi(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new Oe(r0(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new Oe(r0(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Wi(t),s=Wi(e),r=am(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=Pi(l.cx,l.cz);if(this.chunks.has(c))continue;let p={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,p),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:p.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let p=c.cx-i,d=c.cz-s;if(p*p+d*d>o*o){for(let m of["o","t"])c[m]&&(this.scene.remove(c[m]),c[m].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,p]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(p-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(Pi(Wi(t),Wi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Su(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Pi(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Su(t,e,i);if(!r)return!1;let o=Pi(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,Km(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[p,d]of Cb(l,c))this.dirtyMesh.add(Pi(p,d));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var sf="hw_world",Oo=null;function a0(n){n!==sf&&(sf=n,Oo=null)}function l0(){return Oo||(Oo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(sf,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Oo)}function rf(n,t){return l0().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var of=n=>rf("readonly",t=>t.get(n)),yc=n=>rf("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function af(n){let t=await l0();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function lf(n){let t={};for(let e of n){let i=await of(e);i!==void 0&&(t[e]=i)}await rf("readwrite",e=>e.clear()),await yc(t)}function P(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var $i=n=>document.querySelector(n);function Ib(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function h0(n,t,e,i,s,r){if(!t||!t.id)return null;let o=Ib(t,e,i,s,r),a=n.get("ke_log"),l=Array.isArray(a)?a:[];if(l.push(o),n.set("ke_log",l),e){let d=n.get("ke_correct"),m=Array.isArray(d)?d:[];m.includes(t.id)||(m.push(t.id),n.set("ke_correct",m))}let c=n.get("ke_mistakes")||{},p=c[t.id]&&!c[t.id].d?c[t.id]:null;return e?p&&(p.c++,p.u=s,p.c>=3&&(c[t.id]={d:1,w:p.w,t:p.t,u:s})):c[t.id]={c:0,w:((c[t.id]||{}).w||0)+1,t:s,u:s},(!e||p)&&n.set("ke_mistakes",c),o}var c0=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function u0(n,t=Date.now()){let e=c0(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&c0(new Date(s.t))===e&&i++;return i}function f0(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],l=[];for(let f of n)e[f]&&!e[f].d?o.push(f):t.has(f)||i.has(f)?l.push(f):a.push(f);let c=f=>{for(let _=f.length-1;_>0;_--){let y=Math.floor(r()*(_+1));[f[_],f[y]]=[f[y],f[_]]}return f};[o,a,l].forEach(c);let p=[],d=(f,_)=>{for(;_-- >0&&f.length;)p.push(f.pop())},m=Math.round(s*.7);return d(o,Math.ceil(m/2)),d(a,m-p.length),d(o,m-p.length),d(l,s-p.length),d(a,s-p.length),d(o,s-p.length),p}var Pb="../../",Lb=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],hf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],vc=null,uf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),cf=null,p0=n=>{cf=n},m0=()=>u0(uf().get("ke_log"));function ff(n,t,e){try{h0(uf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(i){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",i)}if(cf)try{cf(t,n)}catch{}}function df(n,t,e){try{let i=uf(),s=i.get("ke_learned")||{},r=new Set;for(let c in s)s[c]&&s[c].at&&(n.sets&&n.sets[c]||[]).forEach(p=>r.add(p));let o=n.list(t).filter(c=>c.type!=="speak").map(c=>c.id),a=f0(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),l=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(l.length)return l}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function Db(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function pf(){return vc||(vc=(async()=>{for(let t of Lb)await Db(Pb+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw vc=null,n})),vc}async function g0(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=P("div",{class:"panel quiz"});n.append(r),r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await pf()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,l=[],c=0,p=0,d=0;function m(){n.hidden=!0,n.innerHTML="",i&&i()}function f(){l=df(o,{modules:["words","phrases","grammar","patterns"],types:hf,lv:1},s),l.length||(l=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),c=0,p=0,d=0,_()}function _(){r.innerHTML="";let x=l[c],C=a.isTyped(x);n._q=x;let L=P("div",{class:"fb"}),T=P("div",{class:"q-body"});r.append(P("div",{class:"p-head"},P("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",P("small",{},`\u7B2C ${c+1} / ${l.length} \u984C`)),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("div",{class:"q-type"},(a.TYPES[x.type]||"\u984C\u76EE")+(C?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),P("div",{class:"q-prompt"+(x.en?" en":"")},x.prompt),x.sub?P("div",{class:"q-sub"},x.sub):null,T,L);let S=!1,R=(N,b)=>{if(S)return;S=!0,ff(x,N,b);let A=Um(N,C);e&&e(N),N&&(d++,p+=A,t&&t(A)),L.className="fb "+(N?"ok":"bad"),L.append(P("div",{},N?`\u7B54\u5C0D\u4E86\uFF01 +${A} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",N?null:P("b",{class:"en"},x.answer)),!N&&x.why?P("div",{class:"why"},x.why):null,P("button",{class:"btn",onclick:y},c+1<l.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(x.input==="type"){let N=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),b=()=>{S||!N.value.trim()||R(o.check(x,N.value).ok,N.value)};N.addEventListener("keydown",A=>{A.stopPropagation(),A.key==="Enter"&&b()}),T.append(P("div",{class:"typerow"},N,P("button",{class:"btn",onclick:b},"\u9001\u51FA"))),setTimeout(()=>N.focus(),50)}else{let N=P("div",{class:"opts"});(x.options||[]).forEach(b=>N.append(P("button",{class:"opt"+(/[a-z]/i.test(b)?" en":""),onclick:A=>{if(S)return;let F=o.check(x,b).ok;A.currentTarget.classList.add(F?"ok":"bad"),R(F,b)}},b))),T.append(N)}}function y(){c++,c<l.length?_():g()}function g(){r.innerHTML="",r.append(P("div",{class:"p-head"},P("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:m},"\xD7")),P("p",{class:"big"},`\u7B54\u5C0D ${d} / ${l.length} \u984C\uFF0C\u62FF\u5230 ${p} \u91D1\u5E63`),P("div",{class:"row"},P("button",{class:"btn",onclick:f},"\u518D\u4F86\u4E00\u56DE"),P("button",{class:"btn ghost",onclick:m},"\u56DE\u53BB\u84CB\u623F\u5B50")))}f()}var d0=new Set(hf);async function Mc(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o}){n.innerHTML="",n.hidden=!1;let a=P("div",{class:"panel quiz"});n.append(a),a.append(P("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let l;try{l=await pf()}catch{a.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let c=window.KE,p=null,d=i?new Set(i.filter(C=>d0.has(C))):d0;for(let C of t){let L=l.byId[C];if(L&&d.has(L.type)){p=l.get(C);break}}let m=!!p;p||(p=df(l,{modules:s||["words","phrases","grammar","patterns"],types:i?[...d]:hf,lv:1},1)[0]||l.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let f=c.isTyped(p);n._q=p,a.innerHTML="";let _=P("div",{class:"fb"}),y=P("div",{class:"q-body"});a.append(P("div",{class:"p-head"},P("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),P("div",{class:"q-type"},(m?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":c.TYPES[p.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),P("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?P("div",{class:"q-sub"},p.sub):null,y,_);let g=!1,x=(C,L)=>{g||(g=!0,ff(p,C,L),_.className="fb "+(C?"ok":"bad"),_.append(P("div",{},C?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",C?null:P("b",{class:"en"},p.answer)),!C&&p.why?P("div",{class:"why"},p.why):null,P("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(C,f,p)}},"\u7E7C\u7E8C")))};if(p.input==="type"){let C=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),L=()=>{g||!C.value.trim()||x(l.check(p,C.value).ok,C.value)};C.addEventListener("keydown",T=>{T.stopPropagation(),T.key==="Enter"&&L()}),y.append(P("div",{class:"typerow"},C,P("button",{class:"btn",onclick:L},"\u9001\u51FA"))),setTimeout(()=>C.focus(),50)}else{let C=P("div",{class:"opts"});(p.options||[]).forEach(L=>C.append(P("button",{class:"opt"+(/[a-z]/i.test(L)?" en":""),onclick:T=>{if(g)return;let S=l.check(p,L).ok;T.currentTarget.classList.add(S?"ok":"bad"),x(S,L)}},L))),y.append(C)}}async function x0(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=P("div",{class:"panel quiz"});n.append(i),i.append(P("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await pf()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=df(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,l=0,c=()=>{i.innerHTML="";let p=o[a];n._q=p;let d=P("div",{class:"fb"}),m=P("div",{class:"q-body"});i.append(P("div",{class:"p-head"},P("h2",{},t.title_zh+" ",P("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),P("div",{class:"q-type"},r.TYPES[p.type]||"\u984C\u76EE"),P("div",{class:"q-prompt"+(p.en?" en":"")},p.prompt),p.sub?P("div",{class:"q-sub"},p.sub):null,m,d);let f=!1,_=(y,g)=>{f||(f=!0,ff(p,y,g),y&&l++,d.className="fb "+(y?"ok":"bad"),d.append(P("div",{},y?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",y?null:P("b",{class:"en"},p.answer)),!y&&p.why?P("div",{class:"why"},p.why):null,P("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(l,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(p.input==="type"){let y=P("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),g=()=>{f||!y.value.trim()||_(s.check(p,y.value).ok,y.value)};y.addEventListener("keydown",x=>{x.stopPropagation(),x.key==="Enter"&&g()}),m.append(P("div",{class:"typerow"},y,P("button",{class:"btn",onclick:g},"\u9001\u51FA"))),setTimeout(()=>y.focus(),50)}else{let y=P("div",{class:"opts"});(p.options||[]).forEach(g=>y.append(P("button",{class:"opt"+(/[a-z]/i.test(g)?" en":""),onclick:x=>{if(f)return;let C=s.check(p,g).ok;x.currentTarget.classList.add(C?"ok":"bad"),_(C,g)}},g))),m.append(y)}};c()}function _0(n,t,e){let[i,s]=String(n).split(",").map(Number),r=p=>Vn(4242,i|0,t*7+p,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,l=Math.floor(r(2)*a.length),c=(l+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[l],a[c]]}}function y0(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Ar(n,e.blueprint)?{ok:!1,reason:"owned"}:(Os(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Do(t,e.give,e.count,i)?(Os(n,e.price),Sn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var mf=(n,t,e)=>!!(n&&n[t.id]===e);function v0(n,t,e,i,s,r,o=()=>64){if(mf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Hn(s,t.reward.coins|0);let a={};for(let l in t.reward.items||{}){let c=Sn(r,l,t.reward.items[l],o);c&&(a[l]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function bc(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var gf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Sc=n=>n==="creative"?"creative":"survival",M0=n=>gf[Sc(n)].db;function b0(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function S0(n){let t=Sc(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function w0(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var A0=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Ef={};yi(Ef,{BREED_CAP:()=>wf,LOVE_MS:()=>T0,MAX_STAGE:()=>Ob,STAGE_SECONDS:()=>Fb,armorMax:()=>E0,armorPoints:()=>Bo,canTill:()=>_f,eat:()=>Sf,equip:()=>Bb,findMate:()=>Af,harvest:()=>yf,nearWater:()=>vf,reduceDamage:()=>bf,stageAt:()=>xf,wearArmor:()=>Mf});var Fb=60,Ob=3;function xf(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var _f=(n,t)=>(n==="grass"||n==="dirt")&&t;function yf(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function vf(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let l of[0,-1])if(t(n(e+a,i+l,s+o)))return!0;return!1}function Bo(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var E0=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function Mf(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?E0(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var bf=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function Bb(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function Sf(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var T0=3e4,wf=12;function Af(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<T0&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var If={};yi(If,{apply:()=>Ec,duck:()=>Ms,muted:()=>zo,rainLevel:()=>Rf,scene:()=>Cf,setVolume:()=>Tc,sfx:()=>on,state:()=>zb,toggleMute:()=>Tf,unlock:()=>Ac});var Xe=null,Bs=null,wc=null,Er=null,Gn=()=>window.HIAudio||null,R0=()=>Gn()?Gn().get():{muted:!1,music:.35,sfx:.7};function Ac(){try{Gn()&&Gn().unlock()}catch{}if(!Xe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Xe=new n,Bs=Xe.createGain(),Bs.connect(Xe.destination),wc=Xe.createBuffer(1,Xe.sampleRate,Xe.sampleRate);let t=wc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Xe.state==="suspended"&&Xe.resume(),Ec()}function Ec(){if(Bs){let n=R0();Bs.gain.setTargetAtTime(n.muted?0:n.sfx,Xe.currentTime,.03)}}var zo=()=>R0().muted;function Tf(){return Gn()&&Gn().toggle(),Ec(),zo()}function Tc(n){Gn()&&Gn().set(n),Ec()}function Cf(n){try{Gn()&&Gn().scene(n)}catch{}}function Ms(n){let t=Gn();t&&(n&&Ms.id==null?Ms.id=t.duckStart():!n&&Ms.id!=null&&(t.duckEnd(Ms.id),Ms.id=null))}function I0(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Qn(n,t,e,i,s,r,o){let a=Xe.createOscillator(),l=Xe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),I0(l,e,i,s,r),a.connect(l),l.connect(Bs),a.start(e),a.stop(e+i+r+.05)}function bs(n,t,e,i,s,r=1){let o=Xe.createBufferSource(),a=Xe.createBiquadFilter(),l=Xe.createGain();o.buffer=wc,a.type=n,a.frequency.value=t,a.Q.value=r,I0(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(Bs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var C0={wood:(n,t)=>{Qn("sine",190*t,n,.003,.16,.12,95*t),bs("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{bs("highpass",1800*t,n,.1,.06),Qn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{bs("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Qn("sine",1900*t,n,.002,.08,.25,1500*t),bs("highpass",4200,n,.06,.12)},soft:(n,t)=>{bs("bandpass",850*t,n,.09,.1,.8)}};function on(n,t="soft"){if(!Xe||zo())return;let e=Xe.currentTime+.005,i=C0[t]||C0.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{bs(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Qn("sine",880,e,.002,.07,.08,1320);break;case"chest":Qn("triangle",160,e,.02,.07,.3,120),Qn("sine",330,e+.12,.005,.05,.15);break;case"door":Qn("sawtooth",120,e,.03,.04,.3,160),bs("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>bs("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Qn("triangle",659,e,.005,.08,.15),Qn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Qn("sine",1319,e,.002,.08,.08),Qn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Qn("triangle",300,e,.005,.1,.18,200);break;default:break}}function Rf(n){if(Xe){if(!Er&&n>.01){let t=Xe.createBufferSource(),e=Xe.createBiquadFilter(),i=Xe.createBiquadFilter(),s=Xe.createGain();t.buffer=wc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Bs),t.start(),Er={s:t,g:s}}Er&&Er.g.gain.setTargetAtTime(.06*n,Xe.currentTime,.4)}}var zb=()=>({ctx:Xe?Xe.state:"none",hi:Gn()?Gn().state():null,rain:Er?+Er.g.gain.value.toFixed(3):0});var Ff={};yi(Ff,{HI_SCENE:()=>Lf,createWeather:()=>Df,precipFor:()=>Uf,sceneFor:()=>Pf,soundOf:()=>Tr,stepWeather:()=>Nf});function Tr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function Pf({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var Lf={calm:"hub",night:"night",cave:"cave"};function Df(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function Nf(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function Uf(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var kb=[1,2,4,6,8];function Cc(n,t){if(t&&t.type==="rod"&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/kb[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function ko(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function P0(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var Hf={};yi(Hf,{collect:()=>kf,createFurnace:()=>Of,dismantle:()=>Vf,start:()=>Bf,tick:()=>zf});function Of(){return{fuel:0,jobs:[],done:{}}}function Bf(n,t,e,i=4){if(xi(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(xi(t,"coal")<1)return{ok:!1,reason:"fuel"};Lo(t,"coal",1),n.fuel+=i}return Lo(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function zf(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function kf(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=Sn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Vf(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var Zf={};yi(Zf,{MAX_HP:()=>Vo,REGEN_EVERY:()=>Hb,SAFE_FALL:()=>Vb,createHealth:()=>Gf,damage:()=>Xf,fallDamage:()=>Wf,hearts:()=>$f,regen:()=>qf,respawnPoint:()=>Yf});var Vo=20,Vb=4,Hb=4;function Gf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Wf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function Xf(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function qf(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function Yf(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function $f(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Rc={animal:8,quiz:4};function L0(){return{list:[],nextId:1}}var Ho=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function D0(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function N0(n,t){return n<.2&&!t}function U0(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function F0(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let l=n.home.x-n.p.x,c=n.home.z-n.p.z,p=Math.hypot(l,c);if(p>10){n.yaw=Math.atan2(-l,-c),n.v.x=l/p*s.speed,n.v.z=c/p*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let l=a>1.6?s.speed:0;n.v.x=r/(a||1)*l,n.v.z=o/(a||1)*l;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function O0(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var B0=(n,t)=>n?(t?2:1)+1:0;function Ic(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,p=1/0;for(let d=0;d<3;d++){if(Math.abs(l[d])<1e-9){if(a[d]<r[d]||a[d]>o[d])return null;continue}let m=(r[d]-a[d])/l[d],f=(o[d]-a[d])/l[d];if(m>f&&([m,f]=[f,m]),c=Math.max(c,m),p=Math.min(p,f),c>p)return null}return c}function z0(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var k0=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function V0(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function H0(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),l={};Hn(i,o);for(let c in a){let p=Sn(e,c,a[c],s);p&&(l[c]=p)}return{ok:!0,coins:o,items:a,leftovers:l,name_zh:r.name_zh}}function G0(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function Jf(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function W0(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:Jf(n[e].map,n,t).ok?n[e]:null}var Ni={};function Cr(n){return Ni[n]||(Ni[n]=new vn({color:n,transparent:!0}),Ni[n].userData.base=new ce(n)),Ni[n]}var Go=null;function Xb(){if(Go)return Go;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Go=new Zn(n),Go.colorSpace=sn,Go}function X0(n,t){let e=new pn,i=n.colors,[s,r]=n.size,o=(l,c,p,d,m,f,_,y)=>{let g=new Oe(new tn(l,c,p),y||Cr(d));return g.position.set(m,f,_),e.add(g),g},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let p=o(.2,.6,.22,i.leg,c,.6,0);p.geometry.translate(0,-.6/2,0),a.push(p)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Ni.__face||(Ni.__face=new vn({map:Xb(),transparent:!0}),Ni.__face.userData.base=new ce("#ffffff"));let c=[Cr(i.head),Cr(i.head),Cr(i.head),Cr(i.head),Cr(i.head),Ni.__face],p=new Oe(new tn(s*.9,s*.8,s*.8),c);p.position.set(0,r*.72+s*.4,0),e.add(p),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let p=n.id==="chicken"?.3:.45,d=o(p,p,p,i.head,0,l+c+p*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,d.position.y+p/2+.05,d.position.z),o(.12,.06,.12,"#D9A63A",0,d.position.y-.02,d.position.z-p/2-.05));let m=n.id==="chicken"?.06:.18,f=n.id==="chicken"?0:s*.45,_=s*.3;for(let[y,g]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-_,-f],[_,-f],[-_,f],[_,f]]){let x=o(m,l,m,i.leg,y,l/2,g);x.geometry.translate(0,-l/2,0),x.position.y=l,a.push(x)}}return e.userData.legs=a,e}function q0(n){for(let t in Ni){let e=Ni[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Pc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Lc="a1826b4892",Nc=new URLSearchParams(location.search),$b=720,Dc=5,$0={boat:-.85,minecart:-.6,horse:.75},Z0=[[0,0,0,1,.1,1]],J0=[[0,0,0,1,.5,1]],Zb=[[0,0,0,1,1,1]],Jb=[[.3,0,.3,.7,.7,.7]],Kb=20261008,K0=Nc.get("test")==="1"||window.__HW_TEST__===!0,jb=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,h={touch:jb,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function wn(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ti(n,t){try{localStorage.setItem(n,t)}catch{}}async function Qb(){let n=Sc(wn("hw_mode","survival")),t=S0(n),e=!t.creative&&wn("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=u=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(u)?u+"_s":u,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";a0(M0(n));let[r,o,a,l,c,p,d,m]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json"].map(u=>fetch(u,{cache:"no-cache"}).then(M=>M.json()))),f=rm(r),_=o.recipes||[],y=u=>f.maxStack(u),g={};try{let[u,M,E,I,D,W,st,pt,ct,yt,Wt,oe,re]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(Le=>of(i(Le))));g={meta:u,player:M,inv:E,coins:I,furnaces:D,claimed:W,quests:st,chests:pt,crops:ct,achv:yt,mapd:Wt,vehs:oe,storyd:re,chunks:await af(s)}}catch(u){console.warn("save unavailable",u)}let x=g.meta&&g.meta.seed||Kb+gf[n].seedOffset,C=e==="shadow"?x+7777:x,L=e==="shadow"?Vu(C,f):xm(x,f,c),T=jm(Object.fromEntries(Object.entries(g.chunks||{}).map(([u,M])=>[u.slice(s.length),M]))),S=g.inv?dc(g.inv):Po();t.creative&&!g.inv&&A0.forEach((u,M)=>{f.get(u)&&(S.slots[M]={id:u,count:64})});let R=zm(g.coins),N=Tm(g.achv),b=d.achievements||[],A=$u(g.storyd);!g.storyd&&g.player&&gc(A,m);let F=u=>u==="look"?h.lookAcc||0:u==="walk"?h.walkAcc||0:N.stats[u]||0,B=Gm(),K=Hm(R,{mode:wn("hw_coin_source","local"),member:Vm(window)}),J=new uc(f,g.mapd),O=Gf(g.player&&g.player.hp!=null?g.player.hp:20);h.bed=g.player&&g.player.bed||null,h.horse=g.player&&g.player.horse||null;let z=l.portals||[],q=Array.isArray(g.claimed)?g.claimed.slice():[],$=g.furnaces||{},rt=g.quests||{},Y=Object.fromEntries(Object.entries(g.chests||{}).map(([u,M])=>[u,dc(M,27)])),et=g.crops||{};h.armor=g.player&&Array.isArray(g.player.armor)?g.player.armor.slice(0,4):[null,null,null,null],h.armorDur=g.player&&Array.isArray(g.player.armorDur)?g.player.armorDur.slice(0,4):[null,null,null,null];let ot=o.smelt||[],wt=o.fuelPerCoal||4;g.meta&&typeof g.meta.time=="number"&&(h.time=g.meta.time);let bt=$i("#c"),Ut=new sc({canvas:bt,antialias:!1,powerPreference:"high-performance"}),Mt={low:{pr:.75,np:120,grain:!1},med:{pr:1,np:300,grain:!0},high:{pr:h.touch?1.5:1.25,np:500,grain:!0}};function At(){let u=Mt[wn("hw_gfx","high")]||Mt.high;Ut.setPixelRatio(Math.min(window.devicePixelRatio||1,u.pr)),h.np=u.np;let M=document.getElementById("grain");M&&(M.hidden=!u.grain),document.documentElement.style.setProperty("--bs",{s:.85,m:1,l:1.2}[wn("hw_btn","m")]||1),document.body.classList.toggle("lefty",wn("hw_lefty","off")==="on"),h.invert=wn("hw_invert","off")==="on"}At();let k=new jr,Q=new ce("#EFEBDD");k.background=Q;let ft=new yn(72,1,.08,200);ft.rotation.order="YXZ";let Pt=t0(f),xt=e0(f,Pt),Lt=o0(Pt.canvas),se=new Worker("assets/hw-worker.js?v="+Lc),lt=new _c({scene:k,mats:Lt,reg:f,worker:se,diffs:T,onDirty:u=>{h.dirty.add(u),(h.mapDirty||(h.mapDirty=new Set)).add(u)}}),ee=Math.max(2,Math.min(6,parseInt(Nc.get("rd")||wn("hw_rd",h.touch?"3":"4"),10)||4));lt.setRenderDistance(ee),ft.far=ee*16+40,ft.updateProjectionMatrix();let qt=await new Promise(u=>{let M=E=>{E.data.type==="ready"&&(se.removeEventListener("message",M),u(E.data.spawn))};se.addEventListener("message",M),se.postMessage({type:"init",seed:C,dim:e,blocks:r,structures:c,diffs:Object.fromEntries([...T].map(([E,I])=>[E,nf(I)]))})}),Qt=g.player&&g.player.dims&&g.player.dims[e];h.dimPos=g.player&&g.player.dims||{},g.player&&(e==="overworld"||Qt)?Object.assign(h,{p:Qt?{x:Qt.x,y:Qt.y,z:Qt.z}:{x:g.player.x,y:g.player.y,z:g.player.z},yaw:(Qt?Qt.yaw:g.player.yaw)||0,pitch:g.player.pitch||0,fly:!!g.player.fly&&!Qt,sel:g.player.sel|0}):(g.player&&(h.sel=g.player.sel|0),h.p={x:qt.x,y:qt.y,z:qt.z},h.yaw=Math.atan2(-(qt.stele.x+.5-qt.x),-(qt.stele.z+.5-qt.z)),h.pitch=-.15);let te=new Ls(new oo(new tn(1.004,1.004,1.004)),new Ps({color:1382164,transparent:!0,opacity:.45}));te.visible=!1,k.add(te);let ye=n0().map(u=>new Zn(u)),Ne=new Oe(new tn(1.01,1.01,1.01),new vn({map:ye[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));Ne.visible=!1,k.add(Ne);let Re=(u,M)=>{let E=document.createElement("canvas");E.width=E.height=64;let I=E.getContext("2d");I.fillStyle=u,I.beginPath(),I.arc(32,32,28,0,7),I.fill(),M&&(I.globalCompositeOperation="destination-out",I.beginPath(),I.arc(44,26,24,0,7),I.fill());let D=new Zn(E);return D.colorSpace=sn,D},Ue=new Is(new cs({map:Re("#F2C46B"),depthWrite:!1,fog:!1})),H=new Is(new cs({map:Re("#EDE6D0",!0),depthWrite:!1,fog:!1}));k.add(Ue,H);let Ve=500,me=new Float32Array(Ve*6),U=new Float32Array(Ve*3),v=new Float32Array(Ve*3);for(let u=0;u<Ve;u++)v[u*3]=Math.random()*24-12,v[u*3+1]=Math.random()*16,v[u*3+2]=Math.random()*24-12;let Z=new an;Z.setAttribute("position",new Ke(me,3));let nt=new Ls(Z,new Ps({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));nt.frustumCulled=!1,nt.visible=!1,k.add(nt);let at=new an;at.setAttribute("position",new Ke(U,3));let Et=new io(at,new ur({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Et.frustumCulled=!1,Et.visible=!1,k.add(Et),h.weather=Df();let Rt=0;function ut(u,M,E){if(nt.visible=E==="rain",Et.visible=E==="snow",!!E){Rt+=u;for(let I=0;I<h.np;I++){let D=v[I*3],W=v[I*3+2],st=E==="rain"?16:1.6,pt=M.y+10-(v[I*3+1]+Rt*st)%16;if(E==="rain"){let ct=I*6;me[ct]=me[ct+3]=M.x+D,me[ct+2]=me[ct+5]=M.z+W,me[ct+1]=pt,me[ct+4]=pt-.45}else{let ct=I*3,yt=Math.sin(Rt*.8+I)*.4;U[ct]=M.x+D+yt,U[ct+1]=pt,U[ct+2]=M.z+W+yt*.6}}Z.setDrawRange(0,h.np*2),at.setDrawRange(0,h.np),(E==="rain"?Z:at).attributes.position.needsUpdate=!0}}let dt=new pn,Ct=(u,M,E,I,D,W,st)=>{let pt=new Oe(new tn(u,M,E),new vn({color:I}));return pt.position.set(D,W,st),pt.userData.base=new ce(I),dt.add(pt),pt},Jt=Ct(.24,.75,.26,"#26302A",-.14,.375,0),Nt=Ct(.24,.75,.26,"#26302A",.14,.375,0);Ct(.56,.7,.3,"#2F5A34",0,1.1,0);let Dt=Ct(.18,.66,.2,"#E7CDA6",-.38,1.12,0),Kt=Ct(.18,.66,.2,"#E7CDA6",.38,1.12,0);Ct(.46,.42,.42,"#E7CDA6",0,1.66,0),Ct(.5,.14,.46,"#151714",0,1.9,.02),Ct(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Jt,Nt,Dt,Kt].forEach(u=>{u.geometry.translate(0,-u.geometry.parameters.height/2+.05,0),u.position.y+=u.geometry.parameters.height/2-.05}),dt.visible=!1,k.add(dt);let ne={},de=u=>ne[u]||(ne[u]=(()=>{let M=new Image;M.src=xt[u];let E=new mn(M);return E.colorSpace=sn,M.onload=()=>{E.needsUpdate=!0},new cs({map:E,depthWrite:!0,alphaTest:.3})})());function V(u,M,E,I){let D=new Is(de(u));D.scale.set(.42,.42,1),k.add(D),h.drops.push({id:u,s:D,p:{x:M,y:E,z:I},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let It=(u,M,E)=>{let I=lt.get(u,M,E);return f.flat.solid[I]===1&&(f.flat.boxes[I]||!0)},ht=Object.fromEntries((a.mobs||[]).map(u=>[u.id,u])),Tt=L0(),Ft=new Map,gt=0;function Zt(u,M){for(let E=61;E>0;E--){let I=lt.get(u,E,M);if(f.flat.solid[I])return lt.get(u,E+1,M)||lt.get(u,E+2,M)?null:{y:E+1,n:I};if(f.flat.liquid[I])return null}return null}function $t(u,M,E,I=7){for(let D=-I;D<=I;D++)for(let W=-I;W<=I;W++)for(let st=-I;st<=I;st++)if(f.flat.lightEmit[lt.get(u+st,M+D,E+W)])return!0;return!1}function Te(u,M,E,I,D){let W=D0(Tt,u,{x:M+.5,y:E,z:I+.5}),st=X0(u,D);return Ft.set(W.id,st),k.add(st),W}let Ee=new Set;function In(){for(let u of L.villages.around(h.p.x-64,h.p.z-64,h.p.x+64,h.p.z+64))if(!(Ee.has(u.id)||!lt.ready(u.x,u.z))){Ee.add(u.id);for(let M=0;M<u.villagers;M++){let E=_0(u.id,M,p),I=u.x+(M%2?2:-2),D=u.z+(M-1),W=Zt(I,D),st=Te(ht.villager,I,W?W.y:u.y+1,D,E.prof.color);Object.assign(st,{home:{x:u.x,z:u.z},village:u.id,role:E})}}}function Wn(u){if(ht.villager&&In(),e==="overworld"&&h.horse&&!h.horseMob&&ht.horse&&lt.ready(h.horse.x,h.horse.z)){let st=Te(ht.horse,Math.floor(h.horse.x),h.horse.y,Math.floor(h.horse.z));st.tame=!0,h.horse.saddled&&rd(st),h.horseMob=st}let M=Math.random()*Math.PI*2,E=14+Math.random()*14,I=Math.floor(h.p.x+Math.cos(M)*E),D=Math.floor(h.p.z+Math.sin(M)*E);if(!lt.ready(I,D))return;let W=Zt(I,D);if(W)if(Ho(Tt,"animal")<Rc.animal&&W.n===f.num("grass")&&u>.3){let st=Object.values(ht).filter(yt=>yt.kind==="animal"&&(!yt.biome||yt.biome===L.biomeOf(I,D))),pt=st[Math.floor(Math.random()*st.length)],ct=1+Math.floor(Math.random()*3);for(let yt=0;yt<ct&&Ho(Tt,"animal")<Rc.animal;yt++){let Wt=I+yt%2,oe=D+(yt>>1),re=Zt(Wt,oe);re&&Te(pt,Wt,re.y,oe)}}else t.quizMobs&&Ho(Tt,"quiz")<Rc.quiz&&N0(u,$t(I,W.y,D))&&ht.quizling&&Te(e==="shadow"&&ht.shadowling?ht.shadowling:ht.quizling,I,W.y,D)}function Uc(u,M,E){gt+=u,gt>2.5&&h.started&&(gt=0,Wn(e==="shadow"?0:M));for(let I=Tt.list.length-1;I>=0;I--){let D=Tt.list[I],W=Ft.get(D.id),st=Math.hypot(D.p.x-h.p.x,D.p.z-h.p.z);if(D.riding){D.p.x=h.p.x,D.p.y=h.p.y,D.p.z=h.p.z,D.yaw=h.yaw,D.v.x=h.v.x,D.v.z=h.v.z,Pc(W,D,E/1e3);continue}if(D.gone){D.goneT=(D.goneT||0)+u,Pc(W,D,E/1e3),D.goneT>.35&&(k.remove(W),Ft.delete(D.id),Tt.list.splice(I,1));continue}if(U0(D,M,st)){D.gone=!0,D.goneT=0,D.village&&Ee.delete(D.village);continue}if(!lt.ready(D.p.x,D.p.z))continue;F0(D,h.p,u,Math.random),D.v.y-=20*u,D.v.y<-20&&(D.v.y=-20);let pt=ac(D.p,D.v,u,It,{w:Math.min(.9,D.def.size[0]),h:D.def.size[1],canStep:!0,grounded:D.onGround});D.onGround=pt.onGround,f.flat.liquid[lt.get(D.p.x,D.p.y+.3,D.p.z)]&&(D.v.y=2),Pc(W,D,E/1e3)}q0(.35+.65*M)}function Ss(u,M,E){let I,D;u==="screen"?(ji.set(M/innerWidth*2-1,-(E/innerHeight)*2+1,.5).unproject(ft).sub(ft.position).normalize(),I={x:ft.position.x,y:ft.position.y,z:ft.position.z},D={x:ji.x,y:ji.y,z:ji.z}):(I=Zo(),D=zc());let W=u==="screen"?ii("screen",M,E):ii("center"),st=null,pt=h.view==="tp"&&u==="screen"?8:4.5;W&&(pt=Math.min(pt,W.dist+.5));for(let ct of Tt.list){if(ct.gone||ct.riding)continue;let yt=Ic(I,D,ct.p,ct.def.size[0],ct.def.size[1]);yt!=null&&yt<pt&&(pt=yt,st=ct)}for(let ct of h.vehicles){if(h.ride&&h.ride.veh===ct)continue;let yt=Ic(I,D,ct.p,1.3,.9);yt!=null&&yt<pt&&(pt=yt,st=ct.m)}if(h.boss){let ct=Ic(I,D,h.boss.p,3.6,3.6);ct!=null&&ct<pt+1&&(pt=ct,st=h.boss.m)}return st}function zs(){try{return z0(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function ws(u){if(u.kind==="vehicle"){Gc(u.veh);return}if(u.kind==="boss"){gg();return}if(u.type==="horse"){ag(u);return}if(u.kind==="villager"){if(!t.trading){St("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}$o(u);return}if(u.kind==="animal"&&S.slots[h.sel]&&S.slots[h.sel].id==="wheat"){t.consume&&jn(S,h.sel,1),X();let E=Date.now();u.love=E,St(`${u.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let I=Af(Tt.list,u,E);if(I&&Ho(Tt,"animal")<wf){let D=Te(u.def,Math.floor((u.p.x+I.p.x)/2),Math.floor(u.p.y),Math.floor((u.p.z+I.p.z)/2));Ft.get(D.id).scale.setScalar(.65),u.love=0,I.love=0,St(`\u751F\u4E86\u4E00\u96BB\u5C0F${u.def.name_zh}\uFF01`),h.stats.bred=(h.stats.bred||0)+1,Se("bred")}else I&&St("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(u.kind==="animal"){let E=S.slots[h.sel],I=!!(E&&f.toolOf(E.id)&&f.toolOf(E.id).type==="sword"),D=O0(u,I,Math.random);if(u.v.y=4,u.v.x+=(u.p.x-h.p.x)*1.5,u.v.z+=(u.p.z-h.p.z)*1.5,I){let W=ko(S,h.sel,f);W.broke&&St(`\u4F60\u7684${f.name(W.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}if(D&&D.drops)for(let W=0;W<D.drops.n;W++)V(D.drops.id,u.p.x,u.p.y+.6,u.p.z);return}if(u.busy)return;u.busy=!0,Fn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=zs().slice(0,30).sort(()=>Math.random()-.5);Mc(_t.ov,{ids:M,onDone:(E,I)=>{if(h.overlay=null,u.busy=!1,E&&u.def.tough&&!u.hurt){u.hurt=!0,St("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(E){let D=B0(!0,I)+(u.def.tough?2:0);Hn(R,D),Nn(),u.gone=!0,u.goneT=0,St(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${D} \u91D1\u5E63`),h.dirtyMeta=!0,gn(),h.stats.quizWins=(h.stats.quizWins||0)+1,Se("quiz_wins")}else if(E===!1){let D=h.p.x-u.p.x,W=h.p.z-u.p.z,st=Math.hypot(D,W)||1;h.v.x=D/st*7,h.v.z=W/st*7,h.v.y=4.5,u.p.x-=D/st*1.5,u.p.z-=W/st*1.5,St("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let ei=(u,M,E)=>lt.get(u,M,E),Zi=(u,M,E)=>{let I=f.get(lt.get(u,M,E));return I&&I.rail?{shape:I.rail,powered:!!I.powered}:null},_t=tS();function St(u){for(;_t.toasts.children.length>3;)_t.toasts.firstChild.remove();let M=P("div",{class:"toast"},u);_t.toasts.append(M),setTimeout(()=>M.remove(),2200)}function Rr(u){let M=P("div",{class:"toast ach"},P("i",{class:"badge"}),P("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",P("b",{},u.name_zh),u.coins&&t.coins?`\u3000+${u.coins} \u91D1\u5E63`:""));_t.toasts.append(M),setTimeout(()=>M.remove(),3500)}function Se(u,M=1){Cm(N,u,M),h.dirtyMeta=!0;for(let E of Rm(N,b))Rr(E),E.coins&&t.coins&&(Hn(R,E.coins),Nn())}let Ui=()=>Math.max(5,Math.min(100,parseInt(wn("hw_daily_goal","20"),10)||20)),ni=0;function Ir(){let u=Ui();_t.learnCnt.textContent=ni+"/"+u,_t.learnBar.style.width=Math.min(100,ni/u*100)+"%",_t.learnPill.classList.toggle("done",ni>=u)}function Ji(){try{ni=m0()}catch{}Ir()}p0(u=>{let M=ni;Ji(),Se("answers"),u&&Se("answers_ok"),M<Ui()&&ni>=Ui()&&St("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function Wo(){let u=document.getElementById("pinbox"),M=window.KSParentPin;if(u.innerHTML="",!M||!M.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let E=P("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),I=P("input",{class:"typein",type:"number",min:"5",max:"100",value:String(Ui()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),D=()=>{if(!M.verify(E.value.trim())){St("\u5BC6\u78BC\u4E0D\u5C0D"),E.value="";return}ti("hw_daily_goal",String(Math.max(5,Math.min(100,+I.value||20)))),Ir(),St("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+Ui()+" \u984C"),Kf()};[E,I].forEach(W=>W.addEventListener("keydown",st=>{st.stopPropagation(),st.key==="Enter"&&D()})),u.append(P("div",{class:"pin-ask"},P("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),P("div",{class:"typerow"},E,I,P("button",{class:"btn",onclick:D},"\u78BA\u5B9A")))),setTimeout(()=>E.focus(),50)}function Xo(u,M,E,I){Se("placed"),I==="torch"&&Se("place:torch");let D=h.recentPlaced||(h.recentPlaced=[]);D.push([u,M,E]),D.length>80&&D.shift(),!N.done.house&&Pm(D,u,M,E)>=30&&Se("house")}function Fc(){let u=!1;for(let M of Ge())N.stats["boss:"+M]||(N.stats["boss:"+M]=1,u=!0);u&&Se("boss",0)}let qo=R.coins;function Nn(){R.coins>qo&&on("coin"),qo=R.coins,_t.coins.textContent=R.coins}let Yo="";function Ki(){let u=$f(O.hp),M=u.join();M!==Yo&&(Yo=M,_t.hearts.innerHTML="",u.forEach(E=>_t.hearts.append(P("i",{class:"ht "+E}))))}function w(u){if(h.dead||u<=0||!t.damage)return;let M=u,E=Bo(h.armor,f);if(u=bf(u,E),E&&(Mf(h.armor,h.armorDur,f,M).forEach(W=>St(`\u4F60\u7684${f.name(W)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Ie(),h.dirtyMeta=!0),u<=0)return;let I=Xf(O,u);Ki(),h.dirtyMeta=!0,on("hurt"),_t.flash.classList.remove("on"),_t.flash.offsetWidth,_t.flash.classList.add("on"),I&&G()}function G(){Nr(!0),h.dead=!0,Fn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="dead";let u=_t.ov;u.innerHTML="",u.hidden=!1,u.append(P("div",{class:"panel start"},P("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),P("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),P("button",{class:"btn big",onclick:it},h.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function it(){let u=Yf(h.bed,qt,!!h.bed&&e==="overworld");h.p={x:u.x,y:u.y,z:u.z},h.v={x:0,y:0,z:0},h.fallTop=u.y,O.hp=20,h.dead=!1,Ki(),ze(),h.dirtyMeta=!0,St(h.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function X(){_t.hotbar.innerHTML="";for(let M=0;M<9;M++){let E=S.slots[M];_t.hotbar.append(P("button",{class:"slot"+(M===h.sel?" on":""),"aria-label":E?f.name(E.id):"\u7A7A\u683C",onpointerdown:I=>{I.stopPropagation(),h.sel=M,X()}},E?P("img",{src:xt[E.id],alt:""}):null,E&&E.count>1?P("span",{class:"cnt"},E.count):null,tt(E),P("span",{class:"key"},M+1)))}let u=S.slots[h.sel];_t.selName.textContent=u?f.name(u.id):""}function tt(u){let M=P0(u,f);return!M||M.left>=M.max?null:P("span",{class:"dur"+(M.frac<.25?" low":"")},P("i",{style:"width:"+Math.round(M.frac*100)+"%"}))}function zt(u=4){let M=new Set,E=Math.floor(h.p.x),I=Math.floor(h.p.y),D=Math.floor(h.p.z);for(let W=-u;W<=u;W++)for(let st=-u;st<=u;st++)for(let pt=-u;pt<=u;pt++){let ct=lt.get(E+pt,I+W,D+st);ct&&M.add(f.get(ct).id)}return M}let Gt=()=>({near:zt(),owned:new Set(R.owned)}),Bt=-1,Ht=null,Xt=null,ue=u=>u==="inv"?S:u==="chest"?Y[Xt]:null,ge=(u,M)=>u==="armor"?h.armor[M]?{id:h.armor[M],count:1,dur:h.armorDur[M]}:null:ue(u).slots[M];function Yt(u,M,E){if(!Ht){ge(u,M)&&(Ht={c:u,i:M}),E();return}let I=Ht;if(Ht=null,I.c===u&&I.i===M){E();return}if(u==="armor"||I.c==="armor"){let[D,W,st,pt]=u==="armor"?[I.c,I.i,u,M]:[u,M,I.c,I.i];if(D==="armor"){E();return}let ct=ue(D),yt=ct.slots[W],Wt=yt&&f.get(yt.id),oe=h.armor[pt];if(yt&&!(Wt.armor&&Wt.armor.slot===pt)){St("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),E();return}let re=h.armorDur[pt],Le=oe?Number.isFinite(re)?{id:oe,count:1,dur:re}:{id:oe,count:1}:null;yt?(h.armor[pt]=yt.id,h.armorDur[pt]=Number.isFinite(yt.dur)?yt.dur:null,yt.count>1?(yt.count--,Le&&Sn(ct,oe,1,y)):ct.slots[W]=Le):oe&&(h.armor[pt]=null,h.armorDur[pt]=null,ct.slots[W]=Le),Ie(),h.dirtyMeta=!0,X(),E();return}I.c===u?Xu(ue(u),I.i,M,y):Yu(ue(I.c),I.i,ue(u),M,y),h.dirtyMeta=!0,X(),E()}let ve=(u,M,E,I="")=>{let D=ge(u,M),W=Ht&&Ht.c===u&&Ht.i===M;return P("button",{class:"slot"+(W?" pick":"")+I,title:D?f.name(D.id):"",onclick:()=>Yt(u,M,E)},D?P("img",{src:xt[D.id],alt:""}):null,D&&D.count>1?P("span",{class:"cnt"},D.count):null,tt(D))},Je=["\u982D","\u8EAB","\u817F","\u8173"];function He(u){let M=Bo(h.armor,f);return P("div",{class:"armor-row"},Je.map((E,I)=>P("div",{class:"armor-slot"},ve("armor",I,u),P("small",{},E))),P("small",{class:"muted"},`\u8B77\u7532 ${M} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,M*4)}%\uFF09`))}function Ie(){if(_t.armor){let u=Bo(h.armor,f);_t.armor.textContent=u?`\u8B77\u7532 ${u}`:""}}function Qe(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=Y[Xt]||(Y[Xt]=Po(27)),E=P("div",{class:"inv-grid"});for(let W=0;W<27;W++)E.append(ve("chest",W,Qe));let I=P("div",{class:"inv-grid"});for(let W=9;W<36;W++)I.append(ve("inv",W,Qe));let D=P("div",{class:"inv-grid hbrow"});for(let W=0;W<9;W++)D.append(ve("inv",W,Qe," hb"));return u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u7BB1\u5B50"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),E,P("h3",{},"\u80CC\u5305"),I,D)),M}function Vt(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"inv-grid"}),E=pt=>ve("inv",pt,Vt,pt<9?" hb":"");for(let pt=9;pt<36;pt++)M.append(E(pt));let I=P("div",{class:"inv-grid hbrow"});for(let pt=0;pt<9;pt++)I.append(E(pt));let D=P("div",{class:"craft"},P("h3",{},"\u5408\u6210"));if(t.creative){let pt=P("div",{class:"craft"},P("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),P("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),ct=P("div",{class:"cat-grid"});w0(f).forEach(yt=>ct.append(P("button",{class:"slot",title:f.name(yt),onclick:()=>{S.slots[h.sel]={id:yt,count:64},h.dirtyMeta=!0,X(),Vt(),St(`${f.name(yt)} \u653E\u9032\u7B2C ${h.sel+1} \u683C`)}},P("img",{src:xt[yt],alt:""})))),pt.append(ct),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),M,I),pt)));return}let W=Gt(),st={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};_.forEach(pt=>{let ct=pc(S,pt,W),yt=ct.ok;pt.blueprint&&ct.reason==="blueprint"&&!Object.keys(pt.in).some(Wt=>Wt!=="stick"&&xi(S,Wt)>0)||D.append(P("div",{class:"rcp"+(yt?"":" no")},P("img",{src:xt[pt.out.id],alt:""}),P("div",{class:"rcp-t"},P("b",{},`${pt.name_zh} \xD7${pt.out.count}`),P("small",{},Object.keys(pt.in).map(Wt=>`${f.name(Wt)} ${xi(S,Wt)}/${pt.in[Wt]}`).join("\u3001")+(st[ct.reason]?"\u3000\xB7 "+st[ct.reason]:""))),P("button",{class:"btn small",onclick:()=>{let Wt=qu(S,pt,y,Gt());Wt.ok?(St(`\u505A\u597D\u4E86\uFF1A${pt.name_zh} \xD7${pt.out.count}`),h.dirtyMeta=!0,Se("craft:"+pt.out.id)):St({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Wt.reason]||"\u6750\u6599\u4E0D\u5920"),Vt(),X()}},"\u88FD\u4F5C")))}),u.append(P("div",{class:"panel inv"},P("div",{class:"p-head"},P("h2",{},"\u80CC\u5305"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("div",{class:"inv-wrap"},P("div",{},P("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),He(Vt),M,I),D)))}let fn=Fm(f);function Me(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"shop"}),E=W0(z,Ge());fn.filter(I=>!I.id.startsWith("portal_")||E&&I.id===E.block).forEach(I=>M.append(P("div",{class:"offer"+(I.locked?" locked":"")},P("img",{src:xt[I.id],alt:""}),P("div",{class:"of-t"},P("b",{},`${I.name_zh}${I.qty>1?" \xD7"+I.qty:""}`),P("small",{},I.locked?`\uFF08${I.locked}\uFF09`:`${I.price} \u91D1\u5E63${I.desc?"\u3000"+I.desc:""}`)),Ar(R,I.id)?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",disabled:I.locked?!0:null,onclick:()=>Pn(I)},I.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5546\u5E97\u3000",P("span",{class:"coin"}),` ${R.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),M))}function Pn(u){let M=Om(R,S,u,y);M.ok?(Se("bought"),Se("buy:"+u.id),St(u.blueprint?`\u62FF\u5230 ${u.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${u.name_zh} \xD7${u.qty}`),h.dirtyMeta=!0,Nn(),X(),gn()):St({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[M.reason]||"\u8CB7\u4E0D\u4E86"),Me()}let An=null;function Un(){let u=_t.ov,M=$[An]||($[An]=Of());u.innerHTML="",u.hidden=!1;let E=M.jobs[0],I=P("div",{class:"shop"});ot.forEach(W=>{let st=xi(S,W.in);I.append(P("div",{class:"offer"+(st?"":" locked")},P("img",{src:xt[W.in],alt:""}),P("div",{class:"of-t"},P("b",{},`${f.name(W.in)} \u2192 ${f.name(W.out)}`),P("small",{},`\u6709 ${st} \u500B \xB7 \u6BCF\u500B ${W.time} \u79D2`)),P("button",{class:"btn small",onclick:()=>{let pt=Bf(M,S,W,wt);pt.ok||St(pt.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),h.dirtyMeta=!0,X(),Un()}},"\u653E\u9032\u53BB")))});let D=Object.values(M.done).reduce((W,st)=>W+st,0);u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u7194\u7210"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,M.fuel-M.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${xi(S,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${wt} \u500B\uFF09`),P("div",{class:"furnace-st"},E?`\u6B63\u5728\u71D2\uFF1A${f.name(E.in)}\uFF08\u9084\u8981 ${Math.ceil(E.left)} \u79D2\uFF0C\u6392\u968A ${M.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),P("div",{class:"row"},P("button",{class:"btn",disabled:D?null:!0,onclick:()=>{let W=kf(M,S,y);W&&(St(`\u62FF\u51FA ${W} \u500B`),Se("smelted",W)),h.dirtyMeta=!0,X(),Un()}},`\u62FF\u51FA\u4F86\uFF08${D}\uFF09`)),I))}let Fi=null,Pe=(u,M)=>{try{return JSON.parse(localStorage.getItem(u)||"null")||M}catch{return M}},Ge=()=>G0(Pe("hw_portal_rewards",[]),Pe("hi_save",null),z),_i='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function Be(){let u=z.find(D=>D.map===Fi),M=_t.ov;if(M.innerHTML="",M.hidden=!1,!u){ze();return}let E=Object.keys(u.reward.items).map(D=>`${f.name(D)} \xD7${u.reward.items[D]}`).join("\u3001"),I=Jf(u.map,z,Ge());if(!I.ok){M.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("div",{class:"padlock",html:_i}),P("p",{class:"big"},`\u5148\u6253\u5012 ${I.need.boss_zh} \u624D\u80FD\u9032\u5165`),P("p",{class:"muted"},`\u5F9E\u300C${I.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${I.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:ze},"\u77E5\u9053\u4E86"))));return}M.append(P("div",{class:"panel start"},P("div",{class:"p-head"},P("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${u.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${u.reward.coins} \u91D1\u5E63\u3001${E}\u3002`),P("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),P("div",{class:"row"},P("button",{class:"btn big",onclick:async()=>{await gn(),h.leaving=k0(u.map),location.href=h.leaving}},"\u9032\u5165"),P("button",{class:"btn ghost",onclick:ze},"\u5148\u4E0D\u8981"))))}function Xn(){if(!t.portals)return 0;let u;try{u=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{u=[]}let M=V0(u,q);for(let E of M){let I=H0(E,z,S,R,y);if(q.push(E.id),!!I.ok){for(let D in I.leftovers)for(let W=0;W<I.leftovers[D];W++)V(D,h.p.x,h.p.y+1,h.p.z);St(`\u5F9E${I.name_zh}\u5E36\u56DE\u4F86\uFF1A${I.coins} \u91D1\u5E63\u3001${Object.keys(I.items).map(D=>f.name(D)+" \xD7"+I.items[D]).join("\u3001")}`)}}return M.length&&(Nn(),X(),h.dirtyMeta=!0,gn()),Fc(),M.length}let qn=null;function $o(u){qn=u,u.busy=!0,dn("trade")}function Oc(){let u=qn,M=_t.ov;if(!u)return ze();M.innerHTML="",M.hidden=!1;let E=u.role,I=bc(),D=P("div",{class:"shop"});E.prof.offers.forEach(st=>{let pt=st.blueprint||st.give,ct=!!st.blueprint,yt=ct&&f.blueprints.find(oe=>oe.id===st.blueprint),Wt=ct&&Ar(R,st.blueprint);D.append(P("div",{class:"offer"},P("img",{src:xt[pt],alt:""}),P("div",{class:"of-t"},P("b",{},ct?yt.name_zh:`${f.name(pt)}${st.count>1?" \xD7"+st.count:""}`),P("small",{},`${st.price} \u91D1\u5E63${ct?"\u3000"+(yt.desc||""):""}`)),Wt?P("span",{class:"owned"},"\u5DF2\u64C1\u6709"):P("button",{class:"btn small",onclick:()=>{let oe=y0(R,S,st,y);oe.ok?(on("trade"),Se("traded"),Se("bought"),St(ct?`\u62FF\u5230 ${yt.name_zh}\uFF01`:`\u8CB7\u5230 ${f.name(pt)} \xD7${st.count}`),h.dirtyMeta=!0,Nn(),X(),gn()):St({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[oe.reason]||"\u8CB7\u4E0D\u4E86"),Oc()}},"\u8CFC\u8CB7")))});let W=P("div",{class:"quests"});E.quests.forEach(st=>{let pt=mf(rt,st,I),ct=Object.keys(st.reward.items||{}).map(yt=>`${f.name(yt)} \xD7${st.reward.items[yt]}`).join("\u3001");W.append(P("div",{class:"offer quest"+(pt?" locked":"")},P("div",{class:"of-t"},P("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+st.title_zh),P("small",{},`${st.desc}\uFF0C\u7B54\u5C0D ${st.need} \u984C \u2192 ${st.reward.coins} \u91D1\u5E63\u3001${ct}`)),pt?P("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):P("button",{class:"btn small",onclick:()=>{h.overlay="quest",x0(_t.ov,{quest:st,onDone:yt=>{if(h.overlay="trade",yt>=0){let Wt=v0(rt,st,yt,I,R,S,y);if(Wt.ok){for(let oe in Wt.leftovers)for(let re=0;re<Wt.leftovers[oe];re++)V(oe,h.p.x,h.p.y+1,h.p.z);St(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Wt.coins} \u91D1\u5E63\u3001${ct}`),Nn(),X(),h.dirtyMeta=!0,gn(),h.stats.quests=(h.stats.quests||0)+1,Se("quests")}else St(`\u7B54\u5C0D ${yt} \u984C\uFF0C\u8981 ${st.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Oc()}})}},"\u63A5\u59D4\u8A17")))}),M.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6751\u6C11\u30FB${E.prof.name_zh}\u3000`,P("span",{class:"coin"}),` ${R.coins}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("h3",{},"\u4EA4\u6613"),D,P("h3",{},"\u82F1\u6587\u59D4\u8A17"),P("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),W))}function Kf(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=P("b",{},lt.rd),E=P("input",{type:"range",min:2,max:6,step:1,value:lt.rd,oninput:I=>{M.textContent=I.target.value},onchange:I=>{let D=+I.target.value;lt.setRenderDistance(D),ft.far=D*16+40,ft.updateProjectionMatrix(),ti("hw_rd",D)}});u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u8A2D\u5B9A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",M,E),P("label",{class:"set"},"\u756B\u8CEA",P("select",{onchange:I=>{ti("hw_gfx",I.target.value),At()}},[["low","\u7701\u96FB\uFF08iPad \u6BD4\u8F03\u9806\uFF09"],["med","\u4E00\u822C"],["high","\u6E05\u695A"]].map(([I,D])=>P("option",{value:I,selected:wn("hw_gfx","high")===I?!0:null},D)))),P("label",{class:"set"},"\u6309\u9215\u5927\u5C0F",P("select",{onchange:I=>{ti("hw_btn",I.target.value),At()}},[["s","\u5C0F"],["m","\u4E2D"],["l","\u5927"]].map(([I,D])=>P("option",{value:I,selected:wn("hw_btn","m")===I?!0:null},D)))),P("label",{class:"set"},"\u5DE6\u624B\u6A21\u5F0F\uFF08\u6416\u687F\u5728\u53F3\u908A\uFF09",P("input",{type:"checkbox",checked:wn("hw_lefty","off")==="on"?!0:null,onchange:I=>{ti("hw_lefty",I.target.checked?"on":"off"),At()}})),P("label",{class:"set"},"\u4E0A\u4E0B\u8996\u89D2\u53CD\u8F49",P("input",{type:"checkbox",checked:wn("hw_invert","off")==="on"?!0:null,onchange:I=>{ti("hw_invert",I.target.checked?"on":"off"),At()}})),P("label",{class:"set"},"\u97F3\u6A02",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:I=>Tc({music:+I.target.value,muted:!1})})),P("label",{class:"set"},"\u97F3\u6548",P("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:I=>{Tc({sfx:+I.target.value,muted:!1}),on("place","wood")}})),t.creative?P("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",P("input",{type:"checkbox",checked:wn("hw_weather","on")!=="off"?!0:null,onchange:I=>ti("hw_weather",I.target.checked?"on":"off")})):null,P("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Q0},"\u532F\u51FA\u4E16\u754C\uFF08\u5099\u4EFD\u6A94\uFF09"),P("label",{class:"btn ghost"},"\u532F\u5165\u4E16\u754C",P("input",{type:"file",accept:".json,application/json",hidden:!0,onchange:I=>{I.target.files[0]&&tg(I.target.files[0])}}))),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:eg},"\u91CD\u7F6E\u4E16\u754C"),t.creative?P("button",{class:"btn",onclick:()=>Bc("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):P("button",{class:"btn",onclick:j0},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:Wo},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${Ui()} \u984C\uFF08\u5BB6\u9577\uFF09`)),P("div",{id:"pinbox"}),P("div",{class:"row"},P("button",{class:"btn ghost",onclick:()=>{Zu(A),h.dirtyMeta=!0,ze(),Zc(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),P("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),P("p",{},P("a",{class:"home-link",href:"../../#s/game",onclick:()=>{gn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),P("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+(K.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+Lc)))}async function Bc(u){await gn(),ti("hw_mode",u),h.resetting=!0,location.reload()}function j0(){let u=document.getElementById("pinbox"),M=window.KSParentPin;if(u.innerHTML="",!M||!M.isSet()){u.append(P("div",{class:"pin-ask"},P("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),P("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let E=P("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),I=()=>{let D=b0(M,E.value.trim());D.ok?Bc("creative"):(St(D.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),E.value="")};E.addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&I()}),u.append(P("div",{class:"pin-ask"},P("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),P("div",{class:"typerow"},E,P("button",{class:"btn",onclick:I},"\u78BA\u5B9A")))),setTimeout(()=>E.focus(),50)}async function jf(){await gn(!0);let u={};for(let M=0;M<localStorage.length;M++){let E=localStorage.key(M);/^hw_/.test(E)&&E!=="hw_mode"&&(u[E]=localStorage.getItem(E))}return{app:"hero-world",v:1,mode:n,at:new Date().toISOString(),db:await af(""),ls:u}}async function Q0(){try{let u=new Blob([JSON.stringify(await jf())],{type:"application/json"}),M=P("a",{href:URL.createObjectURL(u),download:"\u65B9\u584A\u4E16\u754C\u5099\u4EFD_"+bc()+".json"});document.body.append(M),M.click(),setTimeout(()=>{URL.revokeObjectURL(M.href),M.remove()},1500),St("\u5099\u4EFD\u6A94\u4E0B\u8F09\u597D\u4E86\uFF0C\u597D\u597D\u6536\u8457")}catch(u){St("\u532F\u51FA\u5931\u6557\uFF1A"+u.message)}}async function tg(u){try{let M=JSON.parse(await u.text());if(!M||M.app!=="hero-world"||!M.db||typeof M.db!="object")throw new Error("\u9019\u4E0D\u662F\u65B9\u584A\u4E16\u754C\u7684\u5099\u4EFD\u6A94");if(!confirm("\u532F\u5165\u6703\u628A\u73FE\u5728\u9019\u500B\u4E16\u754C\u63DB\u6210\u5099\u4EFD\u88E1\u7684\u4E16\u754C\uFF08\u91D1\u5E63\u4E5F\u6703\u63DB\u6210\u5099\u4EFD\u7684\uFF09\uFF0C\u78BA\u5B9A\u55CE\uFF1F"))return;h.resetting=!0,await lf([]),await yc(M.db);for(let E in M.ls||{})/^hw_/.test(E)&&E!=="hw_mode"&&ti(E,M.ls[E]);location.reload()}catch(M){h.resetting=!1,St("\u532F\u5165\u5931\u6557\uFF1A"+(M&&M.name==="QuotaExceededError"?"\u5132\u5B58\u7A7A\u9593\u4E0D\u5920":M.message))}}async function eg(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){h.resetting=!0,ti("hw_dim","overworld");try{await lf(["hw_coins"])}catch(u){console.warn(u)}location.reload()}}function dn(u){document.pointerLockElement&&document.exitPointerLock(),h.overlay=u,Fn(),Se("open:"+u,1),u==="inv"?(Bt=-1,Ht=null,Vt()):u==="shop"?Me():u==="set"?Kf():u==="furnace"?Un():u==="portal"?Be():u==="trade"?Oc():u==="chest"?(Ht=null,Qe()):u==="map"?Yc():u==="ach"?dg():u==="quests"?bg():u==="quiz"&&g0(_t.ov,{onAnswer:()=>Se("stele_answers"),onReward:M=>{Hn(R,M),Nn(),h.dirtyMeta=!0,gn()},onClose:()=>{h.overlay=null}})}function ze(){_t.ov.hidden=!0,_t.ov.innerHTML="",h.overlay=null,qn&&(qn.busy=!1,qn=null)}let Qf=()=>{_t.btnSnd.textContent=zo()?"\u{1F507}":"\u{1F50A}"};_t.btnSnd.onclick=()=>{Ac(),Tf(),Qf()},["pointerdown","keydown"].forEach(u=>addEventListener(u,()=>Ac(),{capture:!0,once:!0})),Qf(),_t.btnInv.onclick=()=>h.overlay==="inv"?ze():dn("inv"),_t.btnShop.onclick=()=>h.overlay==="shop"?ze():dn("shop"),_t.btnSet.onclick=()=>h.overlay==="set"?ze():dn("set"),_t.btnView.onclick=()=>td(),_t.bRide.onclick=()=>Nr(),_t.bMap.onclick=()=>h.overlay==="map"?ze():dn("map"),_t.restOk.onclick=()=>{_t.rest.hidden=!0},_t.bQuest.onclick=()=>h.overlay==="quests"?ze():dn("quests"),_t.bAch.onclick=()=>h.overlay==="ach"?ze():dn("ach");function td(){h.view=h.view==="fp"?"tp":"fp",St(h.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function ed(){h.ride||(h.fly=!h.fly,h.v.y=0,_t.root.classList.toggle("flying",h.fly),St(h.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let ji=new j;function zc(){let u=Math.cos(h.pitch);return{x:-Math.sin(h.yaw)*u,y:Math.sin(h.pitch),z:-Math.cos(h.yaw)*u}}let Zo=()=>({x:h.p.x,y:h.p.y+1.62+h.eyeOff+(h.ride?$0[h.ride.kind]:0),z:h.p.z}),nd=u=>u&&!f.flat.liquid[u],kc=u=>f.flat.boxes[u]||(f.flat.shape[u]===4?Z0:f.flat.shape[u]===8?J0:null);function ii(u,M,E){if(u==="screen"){ji.set(M/innerWidth*2-1,-(E/innerHeight)*2+1,.5).unproject(ft).sub(ft.position).normalize();let st=ft.position,pt=h.view==="tp"?st.distanceTo(new j(h.p.x,h.p.y+1.62,h.p.z)):0,ct={x:st.x,y:st.y,z:st.z},yt={x:ji.x,y:ji.y,z:ji.z};h.lastRay={o:ct,d:yt};let Wt=br(ct,yt,Dc+1+pt,ei,nd,kc);return Wt&&(Wt.at={x:ct.x+yt.x*Wt.dist,y:ct.y+yt.y*Wt.dist,z:ct.z+yt.z*Wt.dist}),Wt}let I=Zo(),D=zc();h.lastRay={o:I,d:D};let W=br(I,D,Dc,ei,nd,kc);return W&&(W.at={x:I.x+D.x*W.dist,y:I.y+D.y*W.dist,z:I.z+D.z*W.dist}),W}function Fn(){h.mining.active=!1,h.mining.k="",h.mining.t=0,Ne.visible=!1}function ng(u,M,E){on("door");let I=f.get(lt.get(u,M,E)),D=f.get(I.openAs||I.closeAs);if(!D)return;let W=pt=>{let ct=f.get(pt);return ct&&ct.interact==="door"},st=M;for(;W(lt.get(u,st-1,E));)st--;for(let pt=st;W(lt.get(u,pt,E));pt++)lt.set(u,pt,E,D.n);h.dirtyMeta=!0}let id=()=>{let u=S.slots[h.sel];return u?f.toolOf(u.id):null};function ig(u){let M=u.n,E=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Cc(f.get(M),id());if(!lt.set(u.x,u.y,u.z,0))return;B.sendBlock(u.x,u.y,u.z,0);let I=u.x+","+u.y+","+u.z,D=f.get(M);if(Y[I]){if(t.drops){for(let ct of Y[I].slots)if(ct)for(let yt=0;yt<ct.count;yt++)V(ct.id,u.x+.5,u.y+.4,u.z+.5)}delete Y[I]}if(D&&D.crop){if(delete et[I],t.drops)for(let ct of yf(D.stage|0))for(let yt=0;yt<ct.n;yt++)V(ct.id,u.x+.5,u.y+.3,u.z+.5);h.stats.harvested=(h.stats.harvested||0)+(D.stage===3?1:0),D.stage===3&&Se("harvested"),h.dirtyMeta=!0;return}let W=E.harvest?f.dropOf(M):null;W&&V(W,u.x+.5,u.y+.4,u.z+.5),t.drops&&D.pattern==="leaves"&&Math.random()<(d.appleChance||.1)?V("apple",u.x+.5,u.y+.4,u.z+.5):!E.harvest&&!E.creative&&St(`${f.name(M)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let st=lt.get(u.x,u.y+1,u.z);if(f.flat.plant[st]){delete et[u.x+","+(u.y+1)+","+u.z],lt.set(u.x,u.y+1,u.z,0);let ct=t.drops&&f.dropOf(st);ct&&V(ct,u.x+.5,u.y+1.3,u.z+.5)}if(f.get(M).interact==="door")for(let ct of[-1,1]){let yt=lt.get(u.x,u.y+ct,u.z);f.get(yt)&&f.get(yt).interact==="door"&&lt.set(u.x,u.y+ct,u.z,0)}let pt=u.x+","+u.y+","+u.z;if(h.bed&&h.bed.x===u.x&&h.bed.y===u.y&&h.bed.z===u.z&&(h.bed=null,St("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),$[pt]){let ct=Vf($[pt]);for(let yt in ct)for(let Wt=0;Wt<ct[yt];Wt++)V(yt,u.x+.5,u.y+.4,u.z+.5);delete $[pt]}if(E.usesTool){let ct=ko(S,h.sel,f);ct.broke&&St(`\u4F60\u7684${f.name(ct.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}h.dirtyMeta=!0,h.stats.mined++,on("break",Tr(D)),Se("mined"),Se("mine:"+(D.pattern==="log"?"wood":D.id))}function Pr(u){let M=S.slots[h.sel],E=M&&f.get(M.id);if(E&&E.food)return t.damage?(Sf(O,E.food,20)?(on("eat"),jn(S,h.sel,1),Ki(),X(),h.dirtyMeta=!0,St(`\u5403\u4E86${E.name_zh}\uFF0C\u597D\u98FD\uFF01`),h.stats.ate=(h.stats.ate||0)+1):St("\u73FE\u5728\u4E0D\u9913"),!0):(St("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(E&&E.id==="shadow_flint"){if(!t.portals)return St("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let Ot=f.num("dark_crystal"),jt=u&&u.n===Ot?Hu((De,$e,Yn)=>lt.get(De,$e,Yn),u.x,u.y,u.z,Ot):null;if(!jt)return St("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let we=f.num("shadow_portal");for(let De of jt)lt.set(De[0],De[1],De[2],we);return Se("portal_lit"),jn(S,h.sel,1),X(),h.dirtyMeta=!0,St(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(E&&E.id==="fishing_rod")return h.fish?hg():cg(),!0;if(E&&E.place==="boat"){if(h.ride)return St("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Ot=h.lastRay,jt=Ot&&br(Ot.o,Ot.d,Dc+1,ei,De=>f.flat.liquid[De]||f.flat.solid[De]);if(!jt||!f.flat.liquid[jt.n]||lt.get(jt.x,jt.y+1,jt.z))return St("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;h.p={x:jt.x+.5,y:jt.y+1-.15,z:jt.z+.5};let we=Vc("boat",h.p,h.yaw,{y:jt.y+1});return t.consume&&jn(S,h.sel,1),X(),Dr("boat",{y:jt.y+1,veh:we}),!0}if(E&&E.place==="minecart"){if(h.ride)return St("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let Ot=u&&f.get(u.n);if(!Ot||!Ot.rail)return St("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let jt=Lu(Ot.rail,u.x,u.y,u.z,-Math.sin(h.yaw),-Math.cos(h.yaw),$e=>!!Ro(Zi,u.x,u.y,u.z,$e,Ot.rail)),we=hc(jt),De=Vc("minecart",{x:we.x,y:we.y+.05,z:we.z},we.yaw,{st:jt});return t.consume&&jn(S,h.sel,1),X(),Dr("minecart",{st:jt,veh:De}),!0}if(!u)return!1;let I=f.get(u.n);if(I&&I.interact==="chest"){if(on("chest"),Xt=u.x+","+u.y+","+u.z,I.id==="loot_chest"&&!Y[Xt]){let Ot=L.ruins&&L.ruins.at(u.x,u.z);Y[Xt]=pm(mc,(c.loot||{})[Ot?Ot.kind:"forest_ruins"],dm(u.x,u.y,u.z),y),Se("loot"),St("\u627E\u5230\u907A\u8DE1\u7684\u5BF6\u7BB1\u4E86\uFF01"),h.dirtyMeta=!0}return dn("chest"),!0}let D=E&&f.toolOf(M.id);if(D&&D.type==="hoe"&&_f(I.id,!lt.get(u.x,u.y+1,u.z)||f.flat.plant[lt.get(u.x,u.y+1,u.z)])){if(lt.set(u.x,u.y+1,u.z,0),lt.set(u.x,u.y,u.z,f.num("farmland")),t.consume){let Ot=ko(S,h.sel,f);Ot.broke&&St(`\u4F60\u7684${f.name(Ot.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return X(),h.dirtyMeta=!0,!0}if(E&&E.place==="crop")return I.id!=="farmland"||u.face[1]!==1||lt.get(u.x,u.y+1,u.z)?(St("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(lt.set(u.x,u.y+1,u.z,f.num("wheat_0")),et[u.x+","+(u.y+1)+","+u.z]={t:Date.now(),wet:vf(ei,Ot=>f.flat.liquid[Ot]===1,u.x,u.y,u.z)},t.consume&&jn(S,h.sel,1),X(),h.dirtyMeta=!0,h.stats.planted=(h.stats.planted||0)+1,!0);let W=f.get(u.n);if(W&&W.interact==="riddle")return yg(u),!0;if(W&&W.interact==="quiz")return t.coins?(dn("quiz"),!0):(St("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let st=S.slots[h.sel]&&f.get(S.slots[h.sel].id).placeable;if(W&&W.interact==="door")return ng(u.x,u.y,u.z),!0;if(W&&W.interact==="portal"&&!st&&!t.portals)return St("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(W&&W.interact==="portal"&&!st)return Fi=W.portal,dn("portal"),!0;if(W&&W.interact==="bed"&&!st&&e==="shadow")return St("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(W&&W.interact==="bed"&&!st)return h.bed={x:u.x,y:u.y,z:u.z},h.dirtyMeta=!0,Se("bed"),St("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(W&&W.interact==="craft"&&!st)return dn("inv"),!0;if(W&&W.interact==="furnace"&&!st)return An=u.x+","+u.y+","+u.z,dn("furnace"),!0;let pt=S.slots[h.sel];if(!pt)return St("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let ct=f.get(pt.id);if(!ct||!ct.placeable)return St(`${f.name(pt.id)} \u4E0D\u80FD\u653E`),!1;if(ct.place==="slab"&&ct.fullAs&&u.n===ct.n&&u.face[1]===1&&lt.set(u.x,u.y,u.z,f.num(ct.fullAs)))return t.consume&&jn(S,h.sel,1),X(),h.stats.placed++,h.dirtyMeta=!0,!0;let yt=f.flat.plant[u.n]&&!f.flat.plant[ct.n],Wt=yt?u.x:u.x+u.face[0],oe=yt?u.y:u.y+u.face[1],re=yt?u.z:u.z+u.face[2];if(oe<0||oe>=64)return!1;let Le=lt.get(Wt,oe,re);if(Le&&!f.flat.liquid[Le]&&!(yt&&f.flat.plant[Le]))return!1;let Ce=.6/2;if(ct.solid&&Wt+1>h.p.x-Ce&&Wt<h.p.x+Ce&&re+1>h.p.z-Ce&&re<h.p.z+Ce&&oe+1>h.p.y&&oe<h.p.y+1.8)return!1;if(f.flat.plant[ct.n]&&!f.flat.solid[lt.get(Wt,oe-1,re)])return St(`${ct.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let en=ct.n;if(ct.place==="slab"){let Ot=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Ot>.5)&&f.get(ct.id+"_top")&&(en=f.num(ct.id+"_top"))}else if(ct.place==="stairs"){let Ot=-Math.sin(h.yaw),jt=-Math.cos(h.yaw),we=Math.abs(Ot)>Math.abs(jt)?Ot>0?1:3:jt>0?2:0,De=f.get(ct.id+["","_e","_s","_w"][we]);De&&(en=De.n)}let he=null;if(ct.place==="rail"){if(!f.flat.solid[lt.get(Wt,oe-1,re)])return St("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let Ot=-Math.sin(h.yaw),jt=-Math.cos(h.yaw),we=cc(Zi,Wt,oe,re,!!ct.powered,Math.abs(Ot)>Math.abs(jt)?"e":"n");en=f.num(Co(!!ct.powered,we.shape)),he=we.updates}if(!lt.set(Wt,oe,re,en))return!1;if(B.sendBlock(Wt,oe,re,en),he)for(let[Ot,jt,we,De]of he){let $e=Zi(Ot,jt,we);$e&&lt.set(Ot,jt,we,f.num(Co($e.powered,De)))}return on("place",Tr(ct)),ct.interact==="door"&&!lt.get(Wt,oe+1,re)&&lt.set(Wt,oe+1,re,ct.n),t.consume&&jn(S,h.sel,1),h.dirtyMeta=!0,X(),h.stats.placed++,Xo(Wt,oe,re,ct.id),!0}let Lr={},Jo=u=>Lr[u]||(Lr[u]=(()=>{let M=new vn({color:u});return M.userData.base=new ce(u),M})());function sg(u){let M=new pn,E=(I,D,W,st,pt,ct,yt)=>{let Wt=new Oe(new tn(I,D,W),Jo(st));Wt.position.set(pt,ct,yt),M.add(Wt)};if(u==="boat"){E(.9,.08,1.5,"#8C6640",0,.04,0);for(let I of[-1,1])E(.08,.3,1.5,"#A97E4E",I*.45,.19,0),E(.9,.3,.08,"#A97E4E",0,.19,I*.75);E(.9,.06,.25,"#C49A63",0,.25,.1)}else{E(.9,.08,1.1,"#5E6660",0,.12,0);for(let I of[-1,1])E(.08,.45,1.1,"#8C8A84",I*.45,.35,0),E(.9,.45,.08,"#8C8A84",0,.35,I*.55),E(.06,.18,.18,"#26302A",I*.47,.1,.35),E(.06,.18,.18,"#26302A",I*.47,.1,-.35)}return M}h.vehicles=[];function Vc(u,M,E,I){let D=sg(u);D.rotation.order="YXZ",D.position.set(M.x,M.y,M.z),D.rotation.y=E,k.add(D);let W=Object.assign({kind:u,p:{x:M.x,y:M.y,z:M.z},yaw:E,obj:D,hits:0},I);return W.m={kind:"vehicle",veh:W,id:-2},h.vehicles.push(W),W}function Hc(u){h.ride||h.dead||(h.p={x:u.p.x,y:u.p.y,z:u.p.z},u.kind==="boat"?Dr("boat",{y:u.y,veh:u}):(u.st.v=0,Dr("minecart",{st:u.st,veh:u})))}function Gc(u){if(!(h.ride&&h.ride.veh===u)){if(u.hits++,u.hits<2){St("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),u.obj.position.y=u.p.y+.15,setTimeout(()=>{u.obj.position.y=u.p.y},120);return}h.vehicles.splice(h.vehicles.indexOf(u),1),k.remove(u.obj),V(u.kind,u.p.x,u.p.y+.5,u.p.z),h.dirtyMeta=!0,St(u.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let ks=new pn,sd=new vn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),Wc=[0,1].map(()=>{let u=new Oe(new tn(1,1,1),sd);return ks.add(u),u});ks.visible=!1,k.add(ks);function rg(u){let M=S.slots[h.sel],E=M&&f.get(M.id);if(!u||!E||!E.placeable)return null;let I=f.get(u.n);if(I&&["chest","quiz","door"].includes(I.interact))return null;if(E.place==="slab"&&E.fullAs&&u.n===E.n&&u.face[1]===1)return{x:u.x,y:u.y,z:u.z,n:f.num(E.fullAs)};let D=f.flat.plant[u.n]&&!f.flat.plant[E.n],W=D?u.x:u.x+u.face[0],st=D?u.y:u.y+u.face[1],pt=D?u.z:u.z+u.face[2];if(st<0||st>=64)return null;let ct=lt.get(W,st,pt);if(ct&&!f.flat.liquid[ct]&&!(D&&f.flat.plant[ct]))return null;let yt=E.n;if(E.place==="slab"){let Wt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Wt>.5)&&f.get(E.id+"_top")&&(yt=f.num(E.id+"_top"))}else if(E.place==="stairs"){let Wt=-Math.sin(h.yaw),oe=-Math.cos(h.yaw),re=Math.abs(Wt)>Math.abs(oe)?Wt>0?1:3:oe>0?2:0,Le=f.get(E.id+["","_e","_s","_w"][re]);Le&&(yt=Le.n)}else if(E.place==="rail"){if(!f.flat.solid[lt.get(W,st-1,pt)])return null;let Wt=-Math.sin(h.yaw),oe=-Math.cos(h.yaw);yt=f.num(Co(!!E.powered,cc(Zi,W,st,pt,!!E.powered,Math.abs(Wt)>Math.abs(oe)?"e":"n").shape))}return{x:W,y:st,z:pt,n:yt}}function og(u){let M=rg(u);if(!M){ks.visible=!1;return}let E=f.flat.shape[M.n],I=f.flat.boxes[M.n]||(E===4?Z0:E===8?J0:E>=1&&E<=3?Jb:Zb);Wc.forEach((D,W)=>{let st=I[W];D.visible=!!st,st&&(D.scale.set((st[3]-st[0])*.98,(st[4]-st[1])*.98,(st[5]-st[2])*.98),D.position.set(M.x+(st[0]+st[3])/2,M.y+(st[1]+st[4])/2,M.z+(st[2]+st[5])/2))}),ks.visible=!0}function rd(u){u.saddled=!0;let M=Ft.get(u.id);if(!M)return;let E=new Oe(new tn(.62,.1,.6),Jo("#5C3A24"));E.position.set(0,1.4,.05),M.add(E)}function Dr(u,M){let E=M.veh?M.veh.obj:null;h.ride=Object.assign({kind:u,obj:E,yaw:M.veh?M.veh.yaw:h.yaw},M),h.fly=!1,_t.root.classList.remove("flying"),h.v={x:0,y:0,z:0},_t.bRide.hidden=!1,Fn(),Se("ride:"+u),Se("ride"),St({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[u])}function Nr(u){let M=h.ride;if(M){if(h.ride=null,_t.bRide.hidden=!0,M.veh&&(M.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},M.veh.yaw=M.yaw,M.st&&(M.st.v=0,M.veh.st=M.st)),M.kind==="horse"&&(M.m.riding=!1),M.kind==="minecart")h.p.y+=.2;else for(let[E,I]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let D={x:h.p.x+E,y:Math.floor(h.p.y+.5),z:h.p.z+I};if(_m(D,It)&&f.flat.solid[lt.get(D.x,D.y-1,D.z)]){h.p=D;break}}h.v={x:0,y:0,z:0},h.fallTop=h.p.y,u||St("\u4E0B\u4F86\u4E86")}}function ag(u){let M=S.slots[h.sel];if(!u.tame){M&&(M.id==="wheat"||M.id==="apple")?(t.consume&&jn(S,h.sel,1),X(),u.fed=(u.fed||0)+1,u.fed>=3?(u.tame=!0,h.horseMob=u,h.dirtyMeta=!0,St("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):St(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${u.fed}/3\uFF09`)):St("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!u.saddled){M&&M.id==="saddle"?(t.consume&&jn(S,h.sel,1),X(),rd(u),h.horseMob=u,h.dirtyMeta=!0,St("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):St("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}h.ride||(u.riding=!0,h.p={x:u.p.x,y:u.p.y,z:u.p.z},Dr("horse",{m:u}),h.stats.rodeHorse=(h.stats.rodeHorse||0)+1)}function lg(u,M,E,I,D,W,st){let pt=h.ride;if(pt.kind==="boat"){let ct=(I*E+W*M)*7,yt=(D*E+st*M)*7,Wt=1-Math.exp(-2.5*u);h.v.x+=(ct-h.v.x)*Wt,h.v.z+=(yt-h.v.z)*Wt,h.v.y=0;let oe=(Ce,en)=>f.flat.liquid[lt.get(Ce,pt.y-1,en)]===1&&!f.flat.solid[lt.get(Ce,pt.y,en)],re=h.p.x+h.v.x*u,Le=h.p.z+h.v.z*u;oe(re+Math.sign(h.v.x)*.6,h.p.z)?h.p.x=re:h.v.x=0,oe(h.p.x,Le+Math.sign(h.v.z)*.6)?h.p.z=Le:h.v.z=0,h.p.y=pt.y-.15,Math.hypot(h.v.x,h.v.z)>.3&&(pt.yaw=Math.atan2(-h.v.x,-h.v.z))}else{Du(pt.st,u,E,Zi);let ct=hc(pt.st);h.p.x=ct.x,h.p.z=ct.z,h.p.y=ct.y+.05,pt.yaw=ct.yaw,pt.pitch=ct.pitch,h.v.x=h.v.z=h.v.y=0}h.fallTop=h.p.y}let Xc=(()=>{let u=new pn,M=new Oe(new tn(.16,.1,.16),Jo("#E0352B")),E=new Oe(new tn(.16,.08,.16),Jo("#EFEBDD"));return M.position.y=.05,E.position.y=-.04,u.add(M,E),u.visible=!1,k.add(u),u})();function cg(){let u=h.lastRay,M=u&&br(u.o,u.d,Dc+3,ei,E=>f.flat.liquid[E]||f.flat.solid[E]);return!M||!f.flat.liquid[M.n]||lt.get(M.x,M.y+1,M.z)?(St("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(h.fish=Uu(Math.random),h.fish.at={x:M.x+.5,y:M.y+1,z:M.z+.5},Xc.visible=!0,St("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function qc(){h.fish=null,Xc.visible=!1}function hg(){let u=Ou(h.fish);if(qc(),u!=="catch"){St("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let M=d.fishing.loot,E=Bu(M,Math.random);if(E.coins&&!t.coins&&(E=M[0]),E.coins)Hn(R,E.coins),Nn(),St(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${E.coins} \u91D1\u5E63`);else{let I=Sn(S,E.id,E.n,y);for(let D=0;D<I;D++)V(E.id,h.p.x,h.p.y+1,h.p.z);St(E.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${f.name(E.id)} \xD7${E.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&ko(S,h.sel,f).broke&&St("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),X(),h.dirtyMeta=!0,on("pickup"),Se("fish"),E.treasure&&Se("treasure")}let Qi=2,Ko=wn("hw_minimap","on")!=="off";function ug(u){Ko=u,ti("hw_minimap",u?"on":"off"),_t.mini.hidden=!u}_t.mini.hidden=!Ko;function fg(){let u=_t.mini,M=u.getContext("2d");M.fillStyle="#D9D3C0",M.fillRect(0,0,u.width,u.height),J.draw(M,h.p.x,h.p.z,2,u.width,u.height),ku(M,u.width/2,u.height/2,h.yaw,7,"#E0352B")}function Yc(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=Math.max(240,Math.min(innerWidth-60,760)),E=Math.max(200,Math.min(innerHeight-200,540)),I=P("canvas",{class:"bigmap",width:M,height:E}),D=I.getContext("2d");D.fillStyle="#D9D3C0",D.fillRect(0,0,M,E);let{x0:W,z0:st}=J.draw(D,h.p.x,h.p.z,Qi,M,E),pt=(re,Le)=>[(re-W)*Qi,(Le-st)*Qi],ct=(re,Le,Ce,en,he)=>{let[Ot,jt]=pt(re,Le);Ot<-20||jt<-20||Ot>M+20||jt>E+20||(D.fillStyle=en,D.strokeStyle=en,D.lineWidth=3,he==="roof"?(D.beginPath(),D.moveTo(Ot-8,jt+1),D.lineTo(Ot,jt-7),D.lineTo(Ot+8,jt+1),D.fill(),D.fillRect(Ot-5,jt+1,10,7)):he==="ring"?(D.beginPath(),D.arc(Ot,jt,6,0,7),D.stroke()):D.fillRect(Ot-5,jt-5,10,10),D.font="bold 12px sans-serif",D.textAlign="center",D.strokeStyle="#EFEBDD",D.strokeText(Ce,Ot,jt-11),D.fillStyle="#26302A",D.fillText(Ce,Ot,jt-11))},yt=Math.max(M,E)/Qi;for(let re of L.villages.around(h.p.x-yt,h.p.z-yt,h.p.x+yt,h.p.z+yt))J.explored(re.x,re.z)&&ct(re.x,re.z,"\u6751\u838A","#8C5A3A","roof");for(let re of J.portals.values())ct(re.x+.5,re.z+.5,re.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");ct(qt.x,qt.z,"\u51FA\u751F\u9EDE","#3E6B3A"),h.bed&&ct(h.bed.x+.5,h.bed.z+.5,"\u5E8A","#E0352B");let[Wt,oe]=pt(h.p.x,h.p.z);ku(D,Wt,oe,h.yaw,9,"#E0352B"),u.append(P("div",{class:"panel map"},P("div",{class:"p-head"},P("h2",{},"\u5730\u5716"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),I,P("div",{class:"row"},P("button",{class:"btn small",onclick:()=>{Qi=Math.min(6,Qi+1),Yc()}},"\u653E\u5927"),P("button",{class:"btn small",onclick:()=>{Qi=Math.max(1,Qi-1),Yc()}},"\u7E2E\u5C0F"),P("label",{class:"set inline"},P("input",{type:"checkbox",checked:Ko?!0:null,onchange:re=>ug(re.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),P("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function dg(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=b.filter(I=>N.done[I.id]).length,E=P("div",{class:"ach-list"});b.forEach(I=>{let D=!!N.done[I.id];E.append(P("div",{class:"ach-item"+(D?" done":"")},P("i",{class:"badge"}),P("div",{},P("b",{},I.name_zh),P("small",{},I.desc_zh+(D?"\u3000\u2713":`\uFF08${Im(N,I)}/${I.need}\uFF09`)+(I.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},`\u6210\u5C31\u3000${M} / ${b.length}`),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),E))}async function pg(u){h.travelling||(h.travelling=!0,Nr(!0),qc(),Fn(),St(u==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await gn(!0),ti("hw_dim",u),h.resetting=!0,location.reload())}function $c(){let u=h.boss;u&&(_t.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${u.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${Fo[u.st.phase].name_zh}`,_t.bossHp.style.width=Math.max(0,u.st.hp/Uo*100)+"%")}function mg(u){if(e!=="shadow"||N.stats.dragon)return;let M=gi,E=Math.hypot(h.p.x-M.x,h.p.z-M.z);if(!h.boss&&E<60&&lt.ready(M.x,M.z)){let W=$m();k.add(W),h.boss={g:W,st:qm(),p:{x:M.x+.5,y:mi+1.5,z:M.z+.5},m:{kind:"boss",id:-1},t:0}}let I=h.boss;if(!I)return;I.t+=u,I.g.position.set(I.p.x,I.p.y+Math.sin(I.t*1.6)*.25,I.p.z),I.g.rotation.y=Math.atan2(-(h.p.x-I.p.x),-(h.p.z-I.p.z)),Zm(I.g,I.t,u);let D=E<28;D===_t.bossbar.hidden&&(_t.bossbar.hidden=!D,D&&($c(),I.greeted||(I.greeted=!0,St("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function gg(){let u=h.boss;if(!u||u.busy)return;u.busy=!0,Fn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let M=Fo[u.st.phase],E=zs().slice(0,40).sort(()=>Math.random()-.5);Mc(_t.ov,{ids:u.st.retry.concat(E),types:M.types,modules:M.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${M.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(I,D,W)=>{h.overlay=null,u.busy=!1,I!=null&&od(I,D,W&&W.id)}})}function od(u,M,E){let I=h.boss;if(!I)return;let D=Ym(I.st,u,M,E);if(!u){let W=h.p.x-I.p.x,st=h.p.z-I.p.z,pt=Math.hypot(W,st)||1;h.v.x=W/pt*8,h.v.z=st/pt*8,h.v.y=5,St("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),$c();return}if(I.g.userData.hitT=.3,on("hit","stone"),D.done){xg();return}D.phaseUp!=null?(Jm(I.g,D.phaseUp),St(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${D.phaseUp+1} \u968E\u6BB5\uFF1A${Fo[D.phaseUp].name_zh}`)):St(M?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),$c()}function xg(){k.remove(h.boss.g),h.boss=null,_t.bossbar.hidden=!0,t.coins&&(Hn(R,tf),Nn()),Se("dragon"),gn(),_g()}function _g(){Fn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ending";let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${tf} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];u.append(P("div",{class:"ending"},P("div",{class:"paper sun"}),P("div",{class:"paper hill"}),P("div",{class:"paper hill b"}),P("div",{class:"credits"},P("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),M.map(E=>P("p",{},E)),P("button",{class:"btn big",onclick:ze},"\u7E7C\u7E8C\u5192\u96AA"))))}function yg(u){h.riddleBusy||(h.riddleBusy=!0,Fn(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask",Mc(_t.ov,{ids:zs().slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u82F1\u6587\u5716\u66F8\u9928\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",onDone:M=>{if(h.overlay=null,h.riddleBusy=!1,!M){M===!1&&St("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let E=-2;E<=2;E++){let I=f.get(lt.get(u.x,u.y+E,u.z));I&&I.interact==="riddle"&&lt.set(u.x,u.y+E,u.z,0)}Se("library"),h.dirtyMeta=!0,on("door")}}))}function vg(){if(!N.stats.village&&e==="overworld"){for(let u of L.villages.around(h.p.x-30,h.p.z-30,h.p.x+30,h.p.z+30))if(Math.hypot(u.x-h.p.x,u.z-h.p.z)<22){Se("village");break}}for(let u of Ku(A,m,F,bc())){if(h.dirtyMeta=!0,u.kind==="tut"){on("pickup"),A.tut.done&&St("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let M=t.coins?u.q.coins|0:0;M&&(Hn(R,M),Nn()),St((u.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+u.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+u.q.text)+(M?`\u3000+${M} \u91D1\u5E63`:""))}Zc()}function Mg(u){if(u==="lair")return e==="shadow"?{x:gi.x+.5,z:gi.z+.5}:null;if(e!=="overworld")return null;if(u==="stele"&&qt.stele)return{x:qt.stele.x+.5,z:qt.stele.z+.5};if(u==="portal"&&qt.portal)return{x:qt.portal.x+.5,z:qt.portal.z+.5};if(u==="village"){if(!h.vilHint||Date.now()-h.vilHint.t>3e3){let M=null,E=1/0;for(let I of L.villages.around(h.p.x-400,h.p.z-400,h.p.x+400,h.p.z+400)){let D=Math.hypot(I.x-h.p.x,I.z-h.p.z);D<E&&(E=D,M=I)}h.vilHint={t:Date.now(),v:M}}return h.vilHint.v?{x:h.vilHint.v.x,z:h.vilHint.v.z}:null}return null}let ad="";function Zc(u){let M=!A.tut.done&&m.tutorial[A.tut.step],E=Ju(A,m),I=M||E,D=M?A.tut.step+(h.touch?"t":"d"):"";if((u||D!==ad)&&(ad=D,_t.tut.hidden=!M,_t.tut.innerHTML="",M&&_t.tut.append(P("b",{},`\u65B0\u624B\u6559\u5B78 ${A.tut.step+1}/${m.tutorial.length}`),P("span",{},M.text),P("small",{},h.touch?M.touch:M.desk),P("button",{class:"link",onclick:()=>{gc(A,m),h.dirtyMeta=!0,Zc(!0)}},"\u8DF3\u904E\u6559\u5B78"))),_t.obj.hidden=!I||!h.started,!I)return;h.objTarget=Mg(I.hint),_t.objArrow.hidden=!h.objTarget;let W=h.objTarget?Math.round(Math.hypot(h.objTarget.x-h.p.x,h.objTarget.z-h.p.z)):0;_t.objText.textContent=(M?"":"\u4E3B\u7DDA\uFF1A")+(M?M.text:E.text)+(h.objTarget&&W>4?`\uFF08\u7D04 ${W} \u683C\uFF09`:"")}function bg(){let u=_t.ov;u.innerHTML="",u.hidden=!1;let M=P("div",{class:"quest-list"});m.main.forEach((I,D)=>M.append(P("div",{class:"quest-item"+(D<A.main?" done":D===A.main?" cur":"")},P("b",{},(D<A.main?"\u2713 ":"")+I.title),P("small",{},I.text+(I.coins&&t.coins?`\u3000\u734E\u52F5 ${I.coins} \u91D1\u5E63`:"")))));let E=P("div",{class:"quest-list"});(A.daily?A.daily.picks:[]).forEach(I=>{let D=m.daily.find(st=>st.id===I),W=A.daily.done.includes(I);E.append(P("div",{class:"quest-item"+(W?" done":" cur")},P("b",{},(W?"\u2713 ":"")+D.text),P("small",{},`${W?D.need:ju(A,m,F,I)} / ${D.need}`+(D.coins&&t.coins?`\u3000\u734E\u52F5 ${D.coins} \u91D1\u5E63`:""))))}),u.append(P("div",{class:"panel"},P("div",{class:"p-head"},P("h2",{},"\u5192\u96AA\u624B\u518A"),P("button",{class:"x","aria-label":"\u95DC\u9589",onclick:ze},"\xD7")),P("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),E,P("h3",{},`\u4E3B\u7DDA\u3000${Math.min(A.main,m.main.length)} / ${m.main.length}`),M,P("p",{class:"muted"},A.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${A.tut.step+1} \u6B65`))),setTimeout(()=>{let I=u.querySelector(".quest-item.cur");I&&I.scrollIntoView&&I.scrollIntoView({block:"nearest"})},0)}function ld(){K0||!bt.requestPointerLock||bt.requestPointerLock()}addEventListener("keydown",u=>{if(u.target&&u.target.tagName==="INPUT")return;let M=u.key.toLowerCase();if(M==="e"){h.overlay==="inv"?ze():!h.overlay&&dn("inv"),u.preventDefault();return}if(h.overlay!=="dead"&&!(h.overlay==="ask"||h.overlay==="quest")){if(M==="escape"&&h.overlay){h.overlay==="quiz"?(_t.ov.hidden=!0,_t.ov.innerHTML="",h.overlay=null):ze();return}if(!h.overlay){if(M==="shift"&&h.ride){Nr();return}h.keys[M]=!0,u.code==="Space"&&(h.keys[" "]=!0,u.preventDefault()),M>="1"&&M<="9"&&(h.sel=+M-1,X()),M==="f"&&ed(),M==="v"&&td(),M==="m"&&dn("map"),M==="k"&&dn("ach"),M==="j"&&dn("quests")}}}),addEventListener("keyup",u=>{h.keys[u.key.toLowerCase()]=!1,u.code==="Space"&&(h.keys[" "]=!1)}),addEventListener("blur",()=>{h.keys={},Fn()}),bt.addEventListener("mousedown",u=>{if(!(h.touch||h.overlay)){if(document.pointerLockElement!==bt){ld();return}if(u.button===0){let M=Ss("center");if(M){ws(M);return}h.mining.active=!0,h.mining.src="center"}if(u.button===2){let M=Ss("center");if(M&&M.kind==="vehicle"){Hc(M.veh);return}Pr(ii("center")),h.placeRepeat=.3,h.rightHeld=!0}}}),addEventListener("mouseup",u=>{u.button===0&&Fn(),u.button===2&&(h.rightHeld=!1)}),bt.addEventListener("contextmenu",u=>u.preventDefault()),addEventListener("mousemove",u=>{document.pointerLockElement===bt&&(h.yaw-=u.movementX*.0024,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-u.movementY*.0024*(h.invert?-1:1))))}),addEventListener("wheel",u=>{h.overlay||h.touch||(h.sel=(h.sel+(u.deltaY>0?1:8))%9,X())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{_t.root.classList.toggle("locked",document.pointerLockElement===bt)});let Ur=new Map;function Sg(u){h.touch!==u&&(h.touch=u,_t.root.classList.toggle("touch",u),document.body.classList.toggle("is-touch",u))}_t.root.classList.toggle("touch",h.touch),document.body.classList.toggle("is-touch",h.touch),bt.addEventListener("pointerdown",u=>{if(u.pointerType!=="touch"||(Sg(!0),h.overlay))return;if(u.preventDefault(),(document.body.classList.contains("lefty")?u.clientX>innerWidth*.6:u.clientX<innerWidth*.4)&&u.clientY>innerHeight*.35&&!h.joy.active){h.joy={x:0,y:0,active:!0,id:u.pointerId,ox:u.clientX,oy:u.clientY},_t.joy.style.transform=`translate(${u.clientX-60}px, ${u.clientY-60}px)`,_t.joy.hidden=!1,_t.knob.style.transform="translate(0px,0px)",Ur.set(u.pointerId,{kind:"joy"});return}let M={kind:"look",x:u.clientX,y:u.clientY,sx:u.clientX,sy:u.clientY,t0:performance.now(),drag:!1,hold:!1};M.timer=setTimeout(()=>{if(M.drag)return;let E=Ss("screen",M.x,M.y);if(E&&E.kind==="vehicle"){Gc(E.veh),M.vehHit=!0;return}M.hold=!0,h.mining.active=!0,h.mining.src="screen",h.mining.sx=M.x,h.mining.sy=M.y},280),Ur.set(u.pointerId,M),h.touchPress=M},{passive:!1}),addEventListener("pointermove",u=>{let M=Ur.get(u.pointerId);if(!M)return;if(M.kind==="joy"){let D=u.clientX-h.joy.ox,W=u.clientY-h.joy.oy,st=Math.hypot(D,W),pt=55;st>pt&&(D*=pt/st,W*=pt/st),h.joy.x=D/pt,h.joy.y=W/pt,_t.knob.style.transform=`translate(${D}px,${W}px)`;return}let E=u.clientX-M.x,I=u.clientY-M.y;M.x=u.clientX,M.y=u.clientY,!M.drag&&Math.hypot(M.x-M.sx,M.y-M.sy)>12&&(M.drag=!0,clearTimeout(M.timer),M.hold&&(Fn(),M.hold=!1)),M.drag?(h.yaw-=E*.0055,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-I*.0055*(h.invert?-1:1)))):M.hold&&(h.mining.sx=M.x,h.mining.sy=M.y)});let cd=u=>{let M=Ur.get(u.pointerId);if(M){if(Ur.delete(u.pointerId),h.touchPress===M&&(h.touchPress=null),M.kind==="joy"){h.joy={x:0,y:0,active:!1},_t.joy.hidden=!0;return}if(clearTimeout(M.timer),M.hold)Fn();else if(!M.drag&&performance.now()-M.t0<280&&!h.overlay){let E=Ss("screen",M.x,M.y);E&&E.kind==="vehicle"?Hc(E.veh):E?ws(E):Pr(ii("screen",M.x,M.y))}}};addEventListener("pointerup",cd),addEventListener("pointercancel",cd);let hd=(u,M,E)=>{u.addEventListener("pointerdown",I=>{I.preventDefault(),I.stopPropagation(),M()}),u.addEventListener("pointerup",E),u.addEventListener("pointercancel",E),u.addEventListener("pointerleave",E)};hd(_t.bJump,()=>{h.jumpHeld=!0},()=>{h.jumpHeld=!1}),hd(_t.bDown,()=>{h.downHeld=!0},()=>{h.downHeld=!1}),_t.bFly.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),ed()}),_t.bPlace.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Pr(ii("center"))}),document.addEventListener("touchmove",u=>{u.target.closest(".scroll, .panel")||u.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(u=>document.addEventListener(u,M=>M.preventDefault(),{passive:!1})),_t.start.hidden=!1,_t.go.onclick=()=>{_t.start.hidden=!0,h.started=!0,h.paused=!1,_t.root.classList.add("started"),h.touch||ld()};async function gn(u){if(h.resetting)return;h.ride&&h.ride.veh&&(h.ride.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},h.ride.veh.yaw=h.ride.yaw);let M={hw_meta:{v:1,seed:x,time:h.time,build:Lc},hw_player:{dims:Object.assign({},h.dimPos,{[e]:{x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw}}),x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,pitch:h.pitch,fly:h.fly,sel:h.sel,hp:O.hp,bed:h.bed,armor:h.armor,armorDur:h.armorDur,horse:h.horseMob&&!h.horseMob.gone?{x:h.horseMob.p.x,y:h.horseMob.p.y,z:h.horseMob.p.z,saddled:!!h.horseMob.saddled}:h.horse},hw_inventory:No(S),hw_coins:Bm(R),[i("hw_furnaces")]:$,[i("hw_chests")]:Object.fromEntries(Object.entries(Y).map(([E,I])=>[E,No(I)])),[i("hw_crops")]:et,hw_quests:rt,hw_portal_claimed:q.slice(-200),hw_ach:N,hw_story:A,[i("hw_vehicles")]:h.vehicles.map(E=>({kind:E.kind,x:E.p.x,y:E.p.y,z:E.p.z,yaw:E.yaw,wy:E.y,st:E.st?{x:E.st.x,y:E.st.y,z:E.st.z,shape:E.st.shape,from:E.st.from,s:E.st.s}:null}))};J.dirty&&(u||Date.now()-(h.mapSavedAt||0)>3e4)&&(M[i("hw_map")]=J.serialize(),h.mapSavedAt=Date.now());for(let E of h.dirty){let I=T.get(E);I&&(M[s+E]=nf(I))}h.dirty.clear(),h.dirtyMeta=!1;try{await yc(M),h.lastSave=Date.now()}catch(E){console.warn("save failed",E),!h.quotaWarned&&E&&(E.name==="QuotaExceededError"||/quota/i.test(E.message||""))&&(h.quotaWarned=!0,St("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF01\u8ACB\u5230\u300C\u8A2D\u5B9A\u300D\u532F\u51FA\u4E16\u754C\u5099\u4EFD\uFF0C\u6216\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{h.started&&gn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&gn(!0)}),addEventListener("pagehide",()=>{h.started&&gn(!0)}),h.stats={mined:0,placed:0};function ud(){let u=innerWidth,M=innerHeight;Ut.setSize(u,M,!1),ft.aspect=u/M,ft.updateProjectionMatrix()}addEventListener("resize",ud),ud(),Nn(),X(),Ki(),Ie(),t.creative&&($i("#coinpill").hidden=!0,$i("#modebadge").hidden=!1,_t.btnShop.hidden=!0,_t.hearts.hidden=!0),(Array.isArray(g.vehs)?g.vehs:[]).forEach(u=>{u&&(u.kind==="boat"||u.kind==="minecart"&&u.st)&&Vc(u.kind,u,u.yaw||0,u.kind==="boat"?{y:u.wy}:{st:Object.assign({v:0,lastIn:0},u.st)})}),Ji(),setInterval(Ji,6e4),Xn(),e==="shadow"&&(Se("shadow"),setTimeout(()=>St("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",u=>{u.persisted&&Xn()});let fd=performance.now(),jo=0,Jc=0,wg=new ce("#EFEBDD"),Ag=new ce("#22302F"),Eg=new ce("#E6B48C");function dd(u){requestAnimationFrame(dd);let M=(u-fd)/1e3;fd=u;let E=Math.min(.05,M);h.frames.push(M*1e3),h.frames.length>4e3&&h.frames.shift(),lt.update(h.p.x,h.p.z);let I=lt.ready(h.p.x,h.p.z);if(h.auto&&Ig(E),h.started&&!h.overlay&&I&&Cg(E),h.started&&I&&!h.travelling){let he=f.get(lt.get(h.p.x,h.p.y+.2,h.p.z));he&&he.interact==="shadow_portal"?!h.portalLock&&t.portals&&(h.portalT=(h.portalT||0)+E,h.portalT>1&&pg(e==="shadow"?"overworld":"shadow")):(h.portalLock=!1,h.portalT=0)}h.started&&!h.dead&&qf(O,E)&&(Ki(),h.dirtyMeta=!0),h.time=(h.time+E/$b)%1;let D=h.time*Math.PI*2,W=Math.sin(D),st=e==="shadow"?.42:Math.min(1,Math.max(0,(W+.12)/.42));Q.copy(Ag).lerp(wg,st);let pt=Math.max(0,1-Math.abs(W)/.3)*(st>.05?1:.4);if(Q.lerp(Eg,pt*.55),e==="shadow"&&Q.set("#1C2620"),!(t.creative&&wn("hw_weather","on")==="off")?Nf(h.weather,E):h.weather.level=0,h.ambT=(h.ambT||0)+E,h.ambT>1){h.ambT=0;let he=Math.floor(h.p.x),Ot=Math.floor(h.p.z),jt=!1;for(let De=2;De<14&&!jt;De++)f.flat.opaque[lt.get(he,Math.floor(h.p.y)+De,Ot)]&&(jt=!0);h.underground=jt&&h.p.y<L.height(he,Ot)-4,h.biome=L.biomeOf(he,Ot);let we=Pf({day:st,underground:h.underground});we!==h.musicScene&&(h.musicScene=we,Cf(Lf[we]))}let yt=h.underground||e==="shadow"?null:Uf(h.biome,h.weather),Wt=yt?h.weather.level:0;Wt&&Q.lerp(h.rainSky||(h.rainSky=new ce("#8E9590")),.45*Wt),ut(E,ft.position,yt),Rf(yt==="rain"?Wt:0),Ms(h.overlay==="quiz"||h.overlay==="ask"||h.overlay==="quest"),Lt.uniforms.uDay.value=st*(1-.3*Wt),Lt.uniforms.uFog.value.set(...Tg(Q));let oe=Zo();h.eyeOff*=Math.pow(5e-4,E);let re=zc();if(h.view==="tp"){let he=br(oe,{x:-re.x,y:-re.y,z:-re.z},4,ei,jt=>f.flat.opaque[jt]===1),Ot=he?Math.max(.4,he.dist-.25):4;ft.position.set(oe.x-re.x*Ot,oe.y-re.y*Ot,oe.z-re.z*Ot)}else ft.position.set(oe.x,oe.y,oe.z);ft.rotation.set(h.pitch,h.yaw,0);let Le=ft.far*.8;if(Ue.position.set(ft.position.x+Math.cos(D)*Le,ft.position.y+Math.sin(D)*Le,ft.position.z+.25*Le),Ue.scale.setScalar(Le*.14),H.position.set(ft.position.x-Math.cos(D)*Le,ft.position.y-Math.sin(D)*Le,ft.position.z-.25*Le),H.scale.setScalar(Le*.1),Ue.visible=H.visible=e!=="shadow",dt.visible=h.view==="tp",dt.visible){dt.position.set(h.p.x,h.p.y+(h.ride?$0[h.ride.kind]:0),h.p.z),dt.rotation.y=h.yaw;let he=Math.hypot(h.v.x,h.v.z),Ot=Math.sin(u/120)*Math.min(1,he/4)*.7;Jt.rotation.x=Ot,Nt.rotation.x=-Ot,Dt.rotation.x=-Ot,Kt.rotation.x=Ot;let jt=.35+.65*st;dt.children.forEach(we=>we.material.color.copy(we.userData.base).multiplyScalar(jt))}for(let he in ne)ne[he].color.setScalar(.4+.6*st);sd.color.setScalar(.5+.5*st);for(let he in Lr)Lr[he].color.copy(Lr[he].userData.base).multiplyScalar(.35+.65*st);h.ride&&h.ride.obj&&(h.ride.obj.position.set(h.p.x,h.p.y,h.p.z),h.ride.obj.rotation.y=h.ride.yaw,h.ride.obj.rotation.x=h.ride.pitch||0);let Ce=h.started&&!h.overlay?h.mining.active&&h.mining.src==="screen"?ii("screen",h.mining.sx,h.mining.sy):ii("center"):null;if(Ce){te.visible=!0;let he=kc(Ce.n);if(he){let Ot=1,jt=1,we=1,De=0,$e=0,Yn=0;for(let Vs of he)Ot=Math.min(Ot,Vs[0]),jt=Math.min(jt,Vs[1]),we=Math.min(we,Vs[2]),De=Math.max(De,Vs[3]),$e=Math.max($e,Vs[4]),Yn=Math.max(Yn,Vs[5]);te.scale.set(De-Ot,$e-jt,Yn-we),te.position.set(Ce.x+(Ot+De)/2,Ce.y+(jt+$e)/2,Ce.z+(we+Yn)/2)}else te.scale.set(1,1,1),te.position.set(Ce.x+.5,Ce.y+.5,Ce.z+.5)}else te.visible=!1;let en=h.touchPress;if(og(!h.started||h.overlay||h.mining.active?null:h.touch?en&&!en.drag&&!en.hold?ii("screen",en.x,en.y):null:Ce),h.mining.active&&Ce){let he=Ce.x+","+Ce.y+","+Ce.z;he!==h.mining.k&&(h.mining.k=he,h.mining.t=0),h.mining.t+=E;let Ot=t.creative?f.get(Ce.n).hardness<0?1/0:t.breakTime:Cc(f.get(Ce.n),id()).time;if(Ot===1/0)Ne.visible=!1,h.mining.warned||(St(f.name(Ce.n)+"\u6316\u4E0D\u52D5"),h.mining.warned=!0);else{h.mining.tick=(h.mining.tick||0)+E,h.mining.tick>.25&&(h.mining.tick=0,on("hit",Tr(f.get(Ce.n))));let jt=h.mining.t/Ot;Ne.visible=!0,Ne.position.copy(te.position),Ne.scale.copy(te.scale),Ne.material.map=ye[Math.min(3,Math.floor(jt*4))],jt>=1&&(ig(Ce),h.mining.k="",h.mining.t=0,Ne.visible=!1)}}else Ne.visible=!1,h.mining.active||(h.mining.warned=!1);if(h.rightHeld&&!h.overlay&&(h.placeRepeat-=E,h.placeRepeat<=0&&(Pr(ii("center")),h.placeRepeat=.25)),Rg(E),h.fish){let he=Fu(h.fish,E),Ot=S.slots[h.sel];!Ot||Ot.id!=="fishing_rod"||Math.hypot(h.p.x-h.fish.at.x,h.p.z-h.fish.at.z)>16?qc():(he==="bite"?(St("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),on("pickup")):he==="escape"&&St("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Xc.position.set(h.fish.at.x,h.fish.at.y-.05+(h.fish.phase==="bite"?-.18:Math.sin(u/400)*.03),h.fish.at.z))}if(h.netT=(h.netT||0)+E,h.netT>.25&&(h.netT=0,B.sendState({x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,dim:e,ride:h.ride?h.ride.kind:null})),h.started){h.lookAcc=(h.lookAcc||0)+Math.min(1,Math.abs(h.yaw-(h.lastYaw??h.yaw))+Math.abs(h.pitch-(h.lastPitch??h.pitch))),h.lastYaw=h.yaw,h.lastPitch=h.pitch;let he=Math.hypot(h.p.x-(h.lastPx??h.p.x),h.p.z-(h.lastPz??h.p.z));he<2&&(h.walkAcc=(h.walkAcc||0)+he),h.lastPx=h.p.x,h.lastPz=h.p.z,h.storyT=(h.storyT||0)+E,h.storyT>.5&&(h.storyT=0,vg())}if(h.objTarget&&!_t.objArrow.hidden){let he=h.objTarget,Ot=Math.atan2(-(he.x-h.p.x),-(he.z-h.p.z))-h.yaw;_t.objArrow.style.transform="rotate("+-Ot+"rad)"}if(h.started&&!document.hidden&&!h.dead&&(h.playT=(h.playT||0)+E,h.playT>1800&&(h.playT=0,_t.rest.hidden=!1,on("pickup"))),h.mapT=(h.mapT||0)+E,h.mapT>.3&&(h.mapT=0,J.scan(lt,h.mapDirty),Ko&&fg()),h.cropT=(h.cropT||0)+E,h.cropT>2){h.cropT=0;let he=Date.now();for(let Ot in et){let[jt,we,De]=Ot.split(",").map(Number);if(!lt.ready(jt,De))continue;let $e=f.get(lt.get(jt,we,De));if(!$e||!$e.crop){delete et[Ot];continue}let Yn=xf(et[Ot].t,he,et[Ot].wet);Yn>($e.stage|0)&&(lt.set(jt,we,De,f.num("wheat_"+Yn)),h.dirtyMeta=!0)}}Uc(h.overlay?0:E,st,u),mg(h.overlay?0:E);for(let he in $){let Ot=$[he];Ot.jobs.length&&(zf(Ot,E),h.dirtyMeta=!0,h.overlay==="furnace"&&he===An&&(h.furnUi=(h.furnUi||0)+E)>.5&&(h.furnUi=0,Un()))}Ut.render(k,ft),jo+=M,Jc++,jo>.5&&(_t.dbg&&(_t.dbg.textContent=`${Math.round(Jc/jo)} fps \xB7 \u5340\u584A ${lt.stats.loaded} \xB7 ${gm[L.biomeOf(Math.floor(h.p.x),Math.floor(h.p.z))]} \xB7 ${h.p.x.toFixed(1)}, ${h.p.y.toFixed(1)}, ${h.p.z.toFixed(1)}`),jo=0,Jc=0),!I&&h.started?_t.loading.hidden=!1:_t.loading.hidden=!0}function Tg(u){let M=u.getHexString();return[parseInt(M.slice(0,2),16)/255,parseInt(M.slice(2,4),16)/255,parseInt(M.slice(4,6),16)/255]}function Cg(u){let M=h.keys,E=(M.d?1:0)-(M.a?1:0),I=(M.w?1:0)-(M.s?1:0);h.joy.active&&(E=h.joy.x,I=-h.joy.y);let D=Math.min(1,Math.hypot(E,I));if(D>0){let $e=Math.hypot(E,I);E=E/$e*D,I=I/$e*D}let W=-Math.sin(h.yaw),st=-Math.cos(h.yaw),pt=Math.cos(h.yaw),ct=-Math.sin(h.yaw);if(h.ride&&h.ride.kind!=="horse"){lg(u,E,I,W,st,pt,ct);return}let yt=M.control||!h.fly&&M.shift||h.joy.active&&D>.92,Wt=ei(h.p.x,h.p.y+.1,h.p.z),oe=ei(h.p.x,h.p.y+1,h.p.z),re=f.flat.liquid[Wt]===1||f.flat.liquid[oe]===1,Le=h.fly?10:h.ride?8.5:re?2.6:yt?6.2:4.3,Ce=(W*I+pt*E)*Le,en=(st*I+ct*E)*Le,he=M[" "]||h.jumpHeld,Ot=h.fly&&M.shift||h.downHeld;if(h.fly)h.v.x=Ce,h.v.z=en,h.v.y=((he?1:0)-(Ot?1:0))*8;else{let $e=h.onGround?14:5,Yn=1-Math.exp(-$e*u);h.v.x+=(Ce-h.v.x)*Yn,h.v.z+=(en-h.v.z)*Yn,re?(h.v.y-=9*u,h.v.y<-3&&(h.v.y=-3),he&&(h.v.y=3.4)):f.flat.climb[Wt]||f.flat.climb[oe]?(h.v.y=he||I>.1?3.2:Ot?-3:Math.max(h.v.y-28*u,-1.5),h.fallTop=h.p.y):(h.v.y-=28*u,h.v.y<-40&&(h.v.y=-40),he&&h.onGround&&(h.v.y=h.ride?10.5:8.6,h.onGround=!1))}let jt=h.onGround,we=ac(h.p,h.v,u,It,{canStep:!h.fly,grounded:h.onGround});if(h.onGround=we.onGround,we.stepped&&(h.eyeOff-=we.stepped),h.fallTop==null||h.fly||re||h.onGround&&jt?h.fallTop=h.p.y:h.onGround||(h.fallTop=Math.max(h.fallTop,h.p.y)),h.onGround&&!jt){let $e=Wf(h.fallTop-h.p.y,{water:re,flying:h.fly});$e&&(w($e),St("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),h.fallTop=h.p.y}let De=Math.hypot(h.v.x,h.v.z);h.onGround&&!h.fly&&De>1&&(h.stepT=(h.stepT||0)+u*De,h.stepT>1.8&&(h.stepT=0,on("step",Tr(f.get(ei(h.p.x,h.p.y-.5,h.p.z)))))),h.p.y<-20&&(h.p={x:qt.x,y:qt.y+1,z:qt.z},h.v={x:0,y:0,z:0},h.fallTop=h.p.y)}function Rg(u){let M=h.p.x,E=h.p.y+.9,I=h.p.z;for(let D=h.drops.length-1;D>=0;D--){let W=h.drops[D];W.age+=u;let st=M-W.p.x,pt=E-W.p.y,ct=I-W.p.z,yt=Math.hypot(st,pt,ct);if(yt<1.5&&W.age>.25&&Sn(S,W.id,1,y)===0){k.remove(W.s),h.drops.splice(D,1),h.dirtyMeta=!0,X(),on("pickup");continue}if(yt<4.5&&W.age>.25?(W.v.x=st/yt*6,W.v.y=pt/yt*6,W.v.z=ct/yt*6,W.p.x+=W.v.x*u,W.p.y+=W.v.y*u,W.p.z+=W.v.z*u):(W.v.y-=18*u,W.v.x*=.9,W.v.z*=.9,ac(W.p,W.v,u,It,{w:.25,h:.25})),W.age>300){k.remove(W.s),h.drops.splice(D,1);continue}W.s.position.set(W.p.x,W.p.y+.2+Math.sin(W.age*3)*.06,W.p.z)}}h.auto=Nc.get("auto")==="walk";let pd=0;function Ig(u){h.started||_t.go.click(),pd+=u,h.keys.w=!0,h.keys[" "]=pd%1.6<.15,h.yaw+=u*.08}window.HW={build:Lc,TEST:K0,G:h,reg:f,inv:S,wallet:R,world:lt,Inv:mc,Aud:If,Amb:Ff,chests:Y,crops:et,Farm:Ef,clickSlot:Yt,MODE:n,RULE:t,switchMode:Bc,questState:rt,tradesJson:p,spawnVillagers:In,terr:L,claimPortalRewards:Xn,portals:z,claimedIds:q,mobS:Tt,mobDefs:ht,spawnMob:Te,hitMob:ws,mobAt:Ss,surfaceY:Zt,health:O,hurt:w,Health:Zf,furnaces:$,Smelt:Hf,smeltList:ot,recipes:_,craftCtx:Gt,breakInfo:Cc,start(){_t.go.click()},state(){return{pos:{...h.p},coins:R.coins,inv:No(S),loaded:lt.stats.loaded,stats:{...h.stats},overlay:h.overlay,fly:h.fly}},lookAt(u,M,E){let I=Zo(),D=u-I.x,W=M-I.y,st=E-I.z;h.yaw=Math.atan2(-D,-st),h.pitch=Math.atan2(W,Math.hypot(D,st))},target(){let u=ii("center");return u&&{x:u.x,y:u.y,z:u.z,n:u.n,face:u.face}},mine(u){u?(h.mining.active=!0,h.mining.src="center"):Fn()},use(){return Pr(ii("center"))},key(u,M){h.keys[u]=M},open:dn,close:ze,save:gn,spawn:qt,dismount:Nr,Rail:Nu,ach:N,mapv:J,Fish:zu,bump:Se,bank:K,net:B,backupData:jf,applyPrefs:At,story:A,Story:Qu,QJ:m,DIM:e,bossDamage:od,Shadow:Gu,hitVehicle:Gc,rideVehicle:Hc,ghostState:()=>({visible:ks.visible,sy:Wc[0].scale.y,two:Wc[1].visible}),perf(){return{frames:h.frames.slice(),meshMs:lt.stats.meshMs.slice(),genMs:lt.stats.genMs.slice(),loaded:lt.stats.loaded}},resetPerf(){h.frames.length=0,lt.stats.meshMs.length=0,lt.stats.genMs.length=0},info:()=>({calls:Ut.info.render.calls,tris:Ut.info.render.triangles,geos:Ut.info.memory.geometries,objs:k.children.length}),ready:()=>lt.ready(h.p.x,h.p.z)},requestAnimationFrame(dd)}function tS(){let n=$i("#ui"),t=e=>n.querySelector(e);return Nc.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:$i("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:$i("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),rest:t("#restcard"),restOk:t("#restok"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:$i("#start"),go:$i("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}Qb().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
