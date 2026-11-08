(()=>{var Zg=Object.defineProperty;var ri=(n,t)=>{for(var e in t)Zg(n,e,{get:t[e],enumerable:!0})};var tp=0,Nh=1,ep=2;var Mo=1,np=2,gr=3,ps=0,In=1,Kn=2,Ii=0,xr=1,Uh=2,Fh=3,Oh=4,ip=5;var Ds=100,sp=101,rp=102,op=103,ap=104,lp=200,cp=201,hp=202,up=203,zh=204,Bh=205,fp=206,dp=207,pp=208,mp=209,gp=210,xp=211,yp=212,_p=213,vp=214,Fa=0,Oa=1,za=2,hr=3,Ba=4,ka=5,Va=6,Ha=7,kh=0,Mp=1,bp=2,ui=0,Vh=1,Hh=2,Gh=3,Wh=4,Xh=5,qh=6,Yh=7;var $h=300,ms=301,Ns=302,yl=303,_l=304,bo=306,Ga=1e3,Ai=1001,Wa=1002,dn=1003,Sp=1004;var So=1005;var an=1006,vl=1007;var gs=1008;var Vn=1009,Zh=1010,Jh=1011,yr=1012,Ml=1013,fi=1014,di=1015,pi=1016,bl=1017,Sl=1018,_r=1020,Kh=35902,jh=35899,Qh=1021,tu=1022,jn=1023,Ei=1026,xs=1027,eu=1028,wl=1029,ys=1030,Al=1031;var El=1033,wo=33776,Ao=33777,Eo=33778,To=33779,Tl=35840,Cl=35841,Rl=35842,Il=35843,Pl=36196,Ll=37492,Dl=37496,Nl=37488,Ul=37489,Co=37490,Fl=37491,Ol=37808,zl=37809,Bl=37810,kl=37811,Vl=37812,Hl=37813,Gl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,$l=37819,Zl=37820,Jl=37821,Kl=36492,jl=36494,Ql=36495,tc=36283,ec=36284,Ro=36285,nc=36286;var Qr=2300,Xa=2301,Da=2302,Th=2303,Ch=2400,Rh=2401,Ih=2402;var wp=3200;var nu=0,Ap=1,Wi="",on="srgb",to="srgb-linear",eo="linear",Le="srgb";var Na=7680;var Ep=519,Tp=512,Cp=513,Rp=514,ic=515,Ip=516,Pp=517,sc=518,Lp=519,iu=35044;var su="300 es",hi=2e3,no=2001;function Jg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Kg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dp(){let n=io("canvas");return n.style.display="block",n}var Td={},ur=null;function so(...n){let t="THREE."+n.shift();ur?ur("log",t,...n):console.log(t,...n)}function Np(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function oe(...n){n=Np(n);let t="THREE."+n.shift();if(ur)ur("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ae(...n){n=Np(n);let t="THREE."+n.shift();if(ur)ur("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Rs(...n){let t=n.join(" ");t in Td||(Td[t]=!0,oe(...n))}function Up(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Fp={[Fa]:Oa,[za]:Va,[Ba]:Ha,[hr]:ka,[Oa]:Fa,[Va]:za,[Ha]:Ba,[ka]:hr},Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ua=Math.PI/180,qa=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ee(n,t,e){return Math.max(t,Math.min(e,n))}function jg(n,t){return(n%t+t)%t}function ih(n,t,e){return(1-e)*n+e*t}function Si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cu=class cu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cu.prototype.isVector2=!0;var _e=cu,Ci=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],m=i[s+2],f=i[s+3],d=r[o+0],x=r[o+1],p=r[o+2],M=r[o+3];if(f!==M||c!==d||l!==x||m!==p){let y=c*d+l*x+m*p+f*M;y<0&&(d=-d,x=-x,p=-p,M=-M,y=-y);let g=1-a;if(y<.9995){let P=Math.acos(y),F=Math.sin(P);g=Math.sin(g*P)/F,a=Math.sin(a*P)/F,c=c*g+d*a,l=l*g+x*a,m=m*g+p*a,f=f*g+M*a}else{c=c*g+d*a,l=l*g+x*a,m=m*g+p*a,f=f*g+M*a;let P=1/Math.sqrt(c*c+l*l+m*m+f*f);c*=P,l*=P,m*=P,f*=P}}t[e]=c,t[e+1]=l,t[e+2]=m,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],m=i[s+3],f=r[o],d=r[o+1],x=r[o+2],p=r[o+3];return t[e]=a*p+m*f+c*x-l*d,t[e+1]=c*p+m*d+l*f-a*x,t[e+2]=l*p+m*x+a*d-c*f,t[e+3]=m*p-a*f-c*d-l*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),m=a(s/2),f=a(r/2),d=c(i/2),x=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*m*f+l*x*p,this._y=l*x*f-d*m*p,this._z=l*m*p+d*x*f,this._w=l*m*f-d*x*p;break;case"YXZ":this._x=d*m*f+l*x*p,this._y=l*x*f-d*m*p,this._z=l*m*p-d*x*f,this._w=l*m*f+d*x*p;break;case"ZXY":this._x=d*m*f-l*x*p,this._y=l*x*f+d*m*p,this._z=l*m*p+d*x*f,this._w=l*m*f-d*x*p;break;case"ZYX":this._x=d*m*f-l*x*p,this._y=l*x*f+d*m*p,this._z=l*m*p-d*x*f,this._w=l*m*f+d*x*p;break;case"YZX":this._x=d*m*f+l*x*p,this._y=l*x*f+d*m*p,this._z=l*m*p-d*x*f,this._w=l*m*f-d*x*p;break;case"XZY":this._x=d*m*f-l*x*p,this._y=l*x*f-d*m*p,this._z=l*m*p+d*x*f,this._w=l*m*f+d*x*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],m=e[6],f=e[10],d=i+a+f;if(d>0){let x=.5/Math.sqrt(d+1);this._w=.25/x,this._x=(m-c)*x,this._y=(r-l)*x,this._z=(o-s)*x}else if(i>a&&i>f){let x=2*Math.sqrt(1+i-a-f);this._w=(m-c)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+l)/x}else if(a>f){let x=2*Math.sqrt(1+a-i-f);this._w=(r-l)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(c+m)/x}else{let x=2*Math.sqrt(1+f-i-a);this._w=(o-s)/x,this._x=(r+l)/x,this._y=(c+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,m=e._w;return this._x=i*m+o*a+s*l-r*c,this._y=s*m+o*c+r*a-i*l,this._z=r*m+o*l+i*c-s*a,this._w=o*m-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),m=Math.sin(l);c=Math.sin(c*l)/m,e=Math.sin(e*l)/m,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hu=class hu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),m=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*m,this.y=i+c*m+a*l-r*f,this.z=s+c*f+r*m-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sh.copy(this).projectOnVector(t),this.sub(sh)}reflect(t){return this.sub(sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hu.prototype.isVector3=!0;var j=hu,sh=new j,Cd=new Ci,uu=class uu{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let m=this.elements;return m[0]=t,m[1]=s,m[2]=a,m[3]=e,m[4]=r,m[5]=c,m[6]=i,m[7]=o,m[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],m=i[4],f=i[7],d=i[2],x=i[5],p=i[8],M=s[0],y=s[3],g=s[6],P=s[1],F=s[4],w=s[7],R=s[2],E=s[5],D=s[8];return r[0]=o*M+a*P+c*R,r[3]=o*y+a*F+c*E,r[6]=o*g+a*w+c*D,r[1]=l*M+m*P+f*R,r[4]=l*y+m*F+f*E,r[7]=l*g+m*w+f*D,r[2]=d*M+x*P+p*R,r[5]=d*y+x*F+p*E,r[8]=d*g+x*w+p*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],m=t[8];return e*o*m-e*a*l-i*r*m+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],m=t[8],f=m*o-a*l,d=a*c-m*r,x=l*r-o*c,p=e*f+i*d+s*x;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=f*M,t[1]=(s*l-m*i)*M,t[2]=(a*i-s*o)*M,t[3]=d*M,t[4]=(m*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=x*M,t[7]=(i*c-l*e)*M,t[8]=(o*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rh.makeScale(t,e)),this}rotate(t){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rh.makeRotation(-t)),this}translate(t,e){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uu.prototype.isMatrix3=!0;var pe=uu,rh=new pe,Rd=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qg(){let n={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Le&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[to]:{primaries:t,whitePoint:i,transfer:eo,toXYZ:Rd,fromXYZ:Id,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:i,transfer:Le,toXYZ:Rd,fromXYZ:Id,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}var Se=Qg();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qs,Ya=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qs===void 0&&(qs=io("canvas")),qs.width=t.width,qs.height=t.height;let s=qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=qs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=io("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tx=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oh(s[o].image)):r.push(oh(s[o]))}else r=oh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function oh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ya.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var ex=0,ah=new j,gn=class n extends Ti{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ai,s=Ai,r=an,o=gs,a=jn,c=Vn,l=n.DEFAULT_ANISOTROPY,m=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=rs(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=$h;gn.DEFAULT_ANISOTROPY=1;var fu=class fu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],m=c[4],f=c[8],d=c[1],x=c[5],p=c[9],M=c[2],y=c[6],g=c[10];if(Math.abs(m-d)<.01&&Math.abs(f-M)<.01&&Math.abs(p-y)<.01){if(Math.abs(m+d)<.1&&Math.abs(f+M)<.1&&Math.abs(p+y)<.1&&Math.abs(l+x+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(l+1)/2,w=(x+1)/2,R=(g+1)/2,E=(m+d)/4,D=(f+M)/4,b=(p+y)/4;return F>w&&F>R?F<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(F),s=E/i,r=D/i):w>R?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=E/s,r=b/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=D/r,s=b/r),this.set(i,s,r,e),this}let P=Math.sqrt((y-p)*(y-p)+(f-M)*(f-M)+(d-m)*(d-m));return Math.abs(P)<.001&&(P=1),this.x=(y-p)/P,this.y=(f-M)/P,this.z=(d-m)/P,this.w=Math.acos((l+x+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fu.prototype.isVector4=!0;var Ze=fu,$a=class extends Ti{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new gn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends $a{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ro=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends gn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xl=class xl{constructor(t,e,i,s,r,o,a,c,l,m,f,d,x,p,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,m,f,d,x,p,M,y)}set(t,e,i,s,r,o,a,c,l,m,f,d,x,p,M,y){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=m,g[10]=f,g[14]=d,g[3]=x,g[7]=p,g[11]=M,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),m=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*m,x=o*f,p=a*m,M=a*f;e[0]=c*m,e[4]=-c*f,e[8]=l,e[1]=x+p*l,e[5]=d-M*l,e[9]=-a*c,e[2]=M-d*l,e[6]=p+x*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*m,x=c*f,p=l*m,M=l*f;e[0]=d+M*a,e[4]=p*a-x,e[8]=o*l,e[1]=o*f,e[5]=o*m,e[9]=-a,e[2]=x*a-p,e[6]=M+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*m,x=c*f,p=l*m,M=l*f;e[0]=d-M*a,e[4]=-o*f,e[8]=p+x*a,e[1]=x+p*a,e[5]=o*m,e[9]=M-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*m,x=o*f,p=a*m,M=a*f;e[0]=c*m,e[4]=p*l-x,e[8]=d*l+M,e[1]=c*f,e[5]=M*l+d,e[9]=x*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,x=o*l,p=a*c,M=a*l;e[0]=c*m,e[4]=M-d*f,e[8]=p*f+x,e[1]=f,e[5]=o*m,e[9]=-a*m,e[2]=-l*m,e[6]=x*f+p,e[10]=d-M*f}else if(t.order==="XZY"){let d=o*c,x=o*l,p=a*c,M=a*l;e[0]=c*m,e[4]=-f,e[8]=l*m,e[1]=d*f+M,e[5]=o*m,e[9]=x*f-p,e[2]=p*f-x,e[6]=a*m,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nx,t,ix)}lookAt(t,e,i){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ts.crossVectors(i,zn),ts.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ts.crossVectors(i,zn)),ts.normalize(),sa.crossVectors(zn,ts),s[0]=ts.x,s[4]=sa.x,s[8]=zn.x,s[1]=ts.y,s[5]=sa.y,s[9]=zn.y,s[2]=ts.z,s[6]=sa.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],m=i[1],f=i[5],d=i[9],x=i[13],p=i[2],M=i[6],y=i[10],g=i[14],P=i[3],F=i[7],w=i[11],R=i[15],E=s[0],D=s[4],b=s[8],T=s[12],N=s[1],z=s[5],J=s[9],Q=s[13],O=s[2],B=s[6],q=s[10],K=s[14],rt=s[3],$=s[7],et=s[11],ot=s[15];return r[0]=o*E+a*N+c*O+l*rt,r[4]=o*D+a*z+c*B+l*$,r[8]=o*b+a*J+c*q+l*et,r[12]=o*T+a*Q+c*K+l*ot,r[1]=m*E+f*N+d*O+x*rt,r[5]=m*D+f*z+d*B+x*$,r[9]=m*b+f*J+d*q+x*et,r[13]=m*T+f*Q+d*K+x*ot,r[2]=p*E+M*N+y*O+g*rt,r[6]=p*D+M*z+y*B+g*$,r[10]=p*b+M*J+y*q+g*et,r[14]=p*T+M*Q+y*K+g*ot,r[3]=P*E+F*N+w*O+R*rt,r[7]=P*D+F*z+w*B+R*$,r[11]=P*b+F*J+w*q+R*et,r[15]=P*T+F*Q+w*K+R*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],m=t[2],f=t[6],d=t[10],x=t[14],p=t[3],M=t[7],y=t[11],g=t[15],P=c*x-l*d,F=a*x-l*f,w=a*d-c*f,R=o*x-l*m,E=o*d-c*m,D=o*f-a*m;return e*(M*P-y*F+g*w)-i*(p*P-y*R+g*E)+s*(p*F-M*R+g*D)-r*(p*w-M*E+y*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],m=t[10];return e*(o*m-a*l)-i*(r*m-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],m=t[8],f=t[9],d=t[10],x=t[11],p=t[12],M=t[13],y=t[14],g=t[15],P=e*a-i*o,F=e*c-s*o,w=e*l-r*o,R=i*c-s*a,E=i*l-r*a,D=s*l-r*c,b=m*M-f*p,T=m*y-d*p,N=m*g-x*p,z=f*y-d*M,J=f*g-x*M,Q=d*g-x*y,O=P*Q-F*J+w*z+R*N-E*T+D*b;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/O;return t[0]=(a*Q-c*J+l*z)*B,t[1]=(s*J-i*Q-r*z)*B,t[2]=(M*D-y*E+g*R)*B,t[3]=(d*E-f*D-x*R)*B,t[4]=(c*N-o*Q-l*T)*B,t[5]=(e*Q-s*N+r*T)*B,t[6]=(y*w-p*D-g*F)*B,t[7]=(m*D-d*w+x*F)*B,t[8]=(o*J-a*N+l*b)*B,t[9]=(i*N-e*J-r*b)*B,t[10]=(p*E-M*w+g*P)*B,t[11]=(f*w-m*E-x*P)*B,t[12]=(a*T-o*z-c*b)*B,t[13]=(e*z-i*T+s*b)*B,t[14]=(M*F-p*R-y*P)*B,t[15]=(m*R-f*F+d*P)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,m=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,m*a+i,m*c-s*o,0,l*c-s*a,m*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,m=o+o,f=a+a,d=r*l,x=r*m,p=r*f,M=o*m,y=o*f,g=a*f,P=c*l,F=c*m,w=c*f,R=i.x,E=i.y,D=i.z;return s[0]=(1-(M+g))*R,s[1]=(x+w)*R,s[2]=(p-F)*R,s[3]=0,s[4]=(x-w)*E,s[5]=(1-(d+g))*E,s[6]=(y+P)*E,s[7]=0,s[8]=(p+F)*D,s[9]=(y-P)*D,s[10]=(1-(d+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ys.set(s[0],s[1],s[2]).length(),a=Ys.set(s[4],s[5],s[6]).length(),c=Ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let l=1/o,m=1/a,f=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=m,oi.elements[5]*=m,oi.elements[6]*=m,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,e.setFromRotationMatrix(oi),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=hi,c=!1){let l=this.elements,m=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),x=(i+s)/(i-s),p,M;if(c)p=r/(o-r),M=o*r/(o-r);else if(a===hi)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===no)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=m,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=x,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=hi,c=!1){let l=this.elements,m=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),x=-(i+s)/(i-s),p,M;if(c)p=1/(o-r),M=o/(o-r);else if(a===hi)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===no)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=m,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=x,l[2]=0,l[6]=0,l[10]=p,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};xl.prototype.isMatrix4=!0;var qe=xl,Ys=new j,oi=new qe,nx=new j(0,0,0),ix=new j(1,1,1),ts=new j,sa=new j,zn=new j,Pd=new qe,Ld=new Ci,os=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],m=s[9],f=s[2],d=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,x),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-m,x),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sx=0,Dd=new j,$s=new Ci,zi=new qe,ra=new j,Xr=new j,rx=new j,ox=new Ci,Nd=new j(1,0,0),Ud=new j(0,1,0),Fd=new j(0,0,1),Od={type:"added"},ax={type:"removed"},Zs={type:"childadded",child:null},lh={type:"childremoved",child:null},Rn=class n extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new j,e=new os,i=new Ci,s=new j(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new pe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(Nd,t)}rotateY(t){return this.rotateOnAxis(Ud,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,e){return Dd.copy(t).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nd,t)}translateY(t){return this.translateOnAxis(Ud,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ra.copy(t):ra.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Xr,ra,this.up):zi.lookAt(ra,Xr,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(zi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Od),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ax),lh.child=t,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Od),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,rx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,ox,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,m=c.length;l<m;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),m=o(t.images),f=o(t.shapes),d=o(t.skeletons),x=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),m.length>0&&(i.images=m),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),x.length>0&&(i.animations=x),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let c=[];for(let l in a){let m=a[l];delete m.metadata,c.push(m)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new j(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lx={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let M of t.hand.values()){let y=e.getJointPose(M,i),g=this._getHandJoint(l,M);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let m=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=m.position.distanceTo(f.position),x=.02,p=.005;l.inputState.pinching&&d>x+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=x-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},oa={h:0,s:0,l:0};function ch(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Se.workingColorSpace){if(t=jg(t,1),e=Ee(e,0,1),i=Ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ch(o,r,t+1/3),this.g=ch(o,r,t),this.b=ch(o,r,t-1/3)}return Se.colorSpaceToWorking(this,s),this}setStyle(t,e=on){function i(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let i=Op[t.toLowerCase()];return i!==void 0?this.setHex(i,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Se.workingToColorSpace(yn.copy(this),t),Math.round(Ee(yn.r*255,0,255))*65536+Math.round(Ee(yn.g*255,0,255))*256+Math.round(Ee(yn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(yn.copy(this),e);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,m=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=m<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=m,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=on){Se.workingToColorSpace(yn.copy(this),t);let e=yn.r,i=yn.g,s=yn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(oa);let i=ih(es.h,oa.h,e),s=ih(es.s,oa.s,e),r=ih(es.l,oa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new le;le.NAMES=Op;var ao=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new j,Bi=new j,hh=new j,ki=new j,Js=new j,Ks=new j,zd=new j,uh=new j,fh=new j,dh=new j,ph=new Ze,mh=new Ze,gh=new Ze,wi=class n{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),Bi.subVectors(i,e),hh.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Bi),c=ai.dot(hh),l=Bi.dot(Bi),m=Bi.dot(hh),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,x=(l*c-a*m)*d,p=(o*m-a*c)*d;return r.set(1-x-p,p,x)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(a,ki.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(t,e),mh.fromBufferAttribute(t,i),gh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ph,r.x),o.addScaledVector(mh,r.y),o.addScaledVector(gh,r.z),o}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),Bi.subVectors(t,e),ai.cross(Bi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ai.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Js.subVectors(s,i),Ks.subVectors(r,i),uh.subVectors(t,i);let c=Js.dot(uh),l=Ks.dot(uh);if(c<=0&&l<=0)return e.copy(i);fh.subVectors(t,s);let m=Js.dot(fh),f=Ks.dot(fh);if(m>=0&&f<=m)return e.copy(s);let d=c*f-m*l;if(d<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Js,o);dh.subVectors(t,r);let x=Js.dot(dh),p=Ks.dot(dh);if(p>=0&&x<=p)return e.copy(r);let M=x*l-c*p;if(M<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Ks,a);let y=m*p-x*f;if(y<=0&&f-m>=0&&x-p>=0)return zd.subVectors(r,s),a=(f-m)/(f-m+(x-p)),e.copy(s).addScaledVector(zd,a);let g=1/(y+M+d);return o=M*g,a=d*g,e.copy(i).addScaledVector(Js,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},as=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),la.subVectors(this.max,qr),js.subVectors(t.a,qr),Qs.subVectors(t.b,qr),tr.subVectors(t.c,qr),ns.subVectors(Qs,js),is.subVectors(tr,Qs),As.subVectors(js,tr);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-As.z,As.y,ns.z,0,-ns.x,is.z,0,-is.x,As.z,0,-As.x,-ns.y,ns.x,0,-is.y,is.x,0,-As.y,As.x,0];return!xh(e,js,Qs,tr,la)||(e=[1,0,0,0,1,0,0,0,1],!xh(e,js,Qs,tr,la))?!1:(ca.crossVectors(ns,is),e=[ca.x,ca.y,ca.z],xh(e,js,Qs,tr,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vi=[new j,new j,new j,new j,new j,new j,new j,new j],li=new j,aa=new as,js=new j,Qs=new j,tr=new j,ns=new j,is=new j,As=new j,qr=new j,la=new j,ca=new j,Es=new j;function xh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Es.fromArray(n,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=t.dot(Es),l=e.dot(Es),m=i.dot(Es);if(Math.max(-Math.max(c,l,m),Math.min(c,l,m))>a)return!1}return!0}var rn=new j,ha=new _e,cx=0,Ke=class extends Ti{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=iu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var lo=class extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var co=class extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Cn=class extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},hx=new as,Yr=new j,yh=new j,ls=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Yr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(yh)),this.expandByPoint(Yr.copy(t.center).sub(yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ux=0,Zn=new qe,_h=new Rn,er=new j,Bn=new as,$r=new as,fn=new j,ln=class n extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jg(t)?co:lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,i){return Zn.makeTranslation(t,e,i),this.applyMatrix4(Zn),this}scale(t,e,i){return Zn.makeScale(t,e,i),this.applyMatrix4(Zn),this}lookAt(t){return _h.lookAt(t),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Cn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Bn.min,$r.min),Bn.expandByPoint(fn),fn.addVectors(Bn.max,$r.max),Bn.expandByPoint(fn)):(Bn.expandByPoint($r.min),Bn.expandByPoint($r.max))}Bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,m=a.count;l<m;l++)fn.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(t,l),fn.add(er)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<i.count;b++)a[b]=new j,c[b]=new j;let l=new j,m=new j,f=new j,d=new _e,x=new _e,p=new _e,M=new j,y=new j;function g(b,T,N){l.fromBufferAttribute(i,b),m.fromBufferAttribute(i,T),f.fromBufferAttribute(i,N),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,T),p.fromBufferAttribute(r,N),m.sub(l),f.sub(l),x.sub(d),p.sub(d);let z=1/(x.x*p.y-p.x*x.y);isFinite(z)&&(M.copy(m).multiplyScalar(p.y).addScaledVector(f,-x.y).multiplyScalar(z),y.copy(f).multiplyScalar(x.x).addScaledVector(m,-p.x).multiplyScalar(z),a[b].add(M),a[T].add(M),a[N].add(M),c[b].add(y),c[T].add(y),c[N].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let b=0,T=P.length;b<T;++b){let N=P[b],z=N.start,J=N.count;for(let Q=z,O=z+J;Q<O;Q+=3)g(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let F=new j,w=new j,R=new j,E=new j;function D(b){R.fromBufferAttribute(s,b),E.copy(R);let T=a[b];F.copy(T),F.sub(R.multiplyScalar(R.dot(T))).normalize(),w.crossVectors(E,T);let z=w.dot(c[b])<0?-1:1;o.setXYZW(b,F.x,F.y,F.z,z)}for(let b=0,T=P.length;b<T;++b){let N=P[b],z=N.start,J=N.count;for(let Q=z,O=z+J;Q<O;Q+=3)D(t.getX(Q+0)),D(t.getX(Q+1)),D(t.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,x=i.count;d<x;d++)i.setXYZ(d,0,0,0);let s=new j,r=new j,o=new j,a=new j,c=new j,l=new j,m=new j,f=new j;if(t)for(let d=0,x=t.count;d<x;d+=3){let p=t.getX(d+0),M=t.getX(d+1),y=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,y),m.subVectors(o,r),f.subVectors(s,r),m.cross(f),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,y),a.add(m),c.add(m),l.add(m),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(y,l.x,l.y,l.z)}else for(let d=0,x=e.count;d<x;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),m.subVectors(o,r),f.subVectors(s,r),m.cross(f),i.setXYZ(d+0,m.x,m.y,m.z),i.setXYZ(d+1,m.x,m.y,m.z),i.setXYZ(d+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,c){let l=a.array,m=a.itemSize,f=a.normalized,d=new l.constructor(c.length*m),x=0,p=0;for(let M=0,y=c.length;M<y;M++){a.isInterleavedBufferAttribute?x=c[M]*a.data.stride+a.offset:x=c[M]*m;for(let g=0;g<m;g++)d[p++]=l[x++]}return new Ke(d,m,f)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let m=0,f=l.length;m<f;m++){let d=l[m],x=t(d,i);c.push(x)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],m=[];for(let f=0,d=l.length;f<d;f++){let x=l[f];m.push(x.toJSON(t.data))}m.length>0&&(s[c]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let m=s[l];this.setAttribute(l,m.clone(e))}let r=t.morphAttributes;for(let l in r){let m=[],f=r[l];for(let d=0,x=f.length;d<x;d++)m.push(f[d].clone(e));this.morphAttributes[l]=m}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,m=o.length;l<m;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=iu,this.updateRanges=[],this.version=0,this.uuid=rs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Tn=new j,ho=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vh=new j,fx=new j,dx=new pe,ci=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=vh.subVectors(i,e).cross(fx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(vh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||dx.getNormalMatrix(t),s=this.coplanarPoint(vh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},px=0,Ri=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=xr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ci().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cs=class extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nr,Zr=new j,ir=new j,sr=new j,rr=new _e,Jr=new _e,zp=new qe,ua=new j,Kr=new j,fa=new j,Bd=new _e,Mh=new _e,kd=new _e,Is=class extends Rn{constructor(t=new cs){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new ln;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ja(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new ho(i,3,0,!1)),nr.setAttribute("uv",new ho(i,2,3,!1))}this.geometry=nr,this.material=t,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),zp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;da(ua.set(-.5,-.5,0),sr,o,ir,s,r),da(Kr.set(.5,-.5,0),sr,o,ir,s,r),da(fa.set(.5,.5,0),sr,o,ir,s,r),Bd.set(0,0),Mh.set(1,0),kd.set(1,1);let a=t.ray.intersectTriangle(ua,Kr,fa,!1,Zr);if(a===null&&(da(Kr.set(-.5,.5,0),sr,o,ir,s,r),Mh.set(0,1),a=t.ray.intersectTriangle(ua,fa,Kr,!1,Zr),a===null))return;let c=t.ray.origin.distanceTo(Zr);c<t.near||c>t.far||e.push({distance:c,point:Zr.clone(),uv:wi.getInterpolation(Zr,ua,Kr,fa,Bd,Mh,kd,new _e),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(n,t,e,i,s,r){rr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Jr.x=r*rr.x-s*rr.y,Jr.y=s*rr.x+r*rr.y):Jr.copy(rr),n.copy(t),n.x+=Jr.x,n.y+=Jr.y,n.applyMatrix4(zp)}var Hi=new j,bh=new j,pa=new j,ma=new j,pr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bh.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ma.copy(this.origin).sub(bh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(pa),a=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),m=Math.abs(1-o*o),f,d,x,p;if(m>0)if(f=o*c-a,d=o*a-c,p=r*m,f>=0)if(d>=-p)if(d<=p){let M=1/m;f*=M,d*=M,x=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*c)+l;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),x=-f*f+d*(d+2*c)+l):d<=p?(f=0,d=Math.min(Math.max(-r,-c),r),x=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),x=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),x=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bh).addScaledVector(pa,d),x}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,m=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),m>=0?(r=(t.min.y-d.y)*m,o=(t.max.y-d.y)*m):(r=(t.max.y-d.y)*m,o=(t.min.y-d.y)*m),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,m=a.z,f=t.x-o.x,d=t.y-o.y,x=t.z-o.z,p=e.x-o.x,M=e.y-o.y,y=e.z-o.z,g=i.x-o.x,P=i.y-o.y,F=i.z-o.z,w=Math.abs(c),R=Math.abs(l),E=Math.abs(m),D,b,T,N,z,J,Q,O,B,q,K,rt;if(w>=R&&w>=E?(T=c,J=f,B=p,rt=g,c>=0?(D=l,b=m,N=d,z=x,Q=M,O=y,q=P,K=F):(D=m,b=l,N=x,z=d,Q=y,O=M,q=F,K=P)):R>=E?(T=l,J=d,B=M,rt=P,l>=0?(D=m,b=c,N=x,z=f,Q=y,O=p,q=F,K=g):(D=c,b=m,N=f,z=x,Q=p,O=y,q=g,K=F)):(T=m,J=x,B=y,rt=F,m>=0?(D=c,b=l,N=f,z=d,Q=p,O=M,q=g,K=P):(D=l,b=c,N=d,z=f,Q=M,O=p,q=P,K=g)),T===0)return null;let $=D/T,et=b/T,ot=1/T,wt=N-$*J,Ct=z-et*J,Nt=Q-$*B,_t=O-et*B,Rt=q-$*rt,G=K-et*rt,Y=Rt*_t-G*Nt,gt=wt*G-Ct*Rt,xt=Nt*Ct-_t*wt;if(s){if(Y<0||gt<0||xt<0)return null}else if((Y<0||gt<0||xt<0)&&(Y>0||gt>0||xt>0))return null;let bt=Y+gt+xt;if(bt===0)return null;let It=ot*(Y*J+gt*B+xt*rt);return(bt>0?It<0:It>0)?null:this.at(It/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vd=new qe,Ts=new pr,ga=new ls,Hd=new j,xa=new j,ya=new j,_a=new j,Sh=new j,va=new j,Gd=new j,Ma=new j,De=class extends Rn{constructor(t=new ln,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let m=a[c],f=r[c];m!==0&&(Sh.fromBufferAttribute(f,t),o?va.addScaledVector(Sh,m):va.addScaledVector(Sh.sub(e),m))}e.add(va)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(ga.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ga,Hd)===null||Ts.origin.distanceToSquared(Hd)>(t.far-t.near)**2))&&(Vd.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,m=r.attributes.uv1,f=r.attributes.normal,d=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let y=d[p],g=o[y.materialIndex],P=Math.max(y.start,x.start),F=Math.min(a.count,Math.min(y.start+y.count,x.start+x.count));for(let w=P,R=F;w<R;w+=3){let E=a.getX(w),D=a.getX(w+1),b=a.getX(w+2);s=ba(this,g,t,i,l,m,f,E,D,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,x.start),M=Math.min(a.count,x.start+x.count);for(let y=p,g=M;y<g;y+=3){let P=a.getX(y),F=a.getX(y+1),w=a.getX(y+2);s=ba(this,o,t,i,l,m,f,P,F,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,M=d.length;p<M;p++){let y=d[p],g=o[y.materialIndex],P=Math.max(y.start,x.start),F=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let w=P,R=F;w<R;w+=3){let E=w,D=w+1,b=w+2;s=ba(this,g,t,i,l,m,f,E,D,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let p=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let y=p,g=M;y<g;y+=3){let P=y,F=y+1,w=y+2;s=ba(this,o,t,i,l,m,f,P,F,w),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function mx(n,t,e,i,s,r,o,a){let c;if(t.side===In?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ps,a),c===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ma);return l<e.near||l>e.far?null:{distance:l,point:Ma.clone(),object:n}}function ba(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,xa),n.getVertexPosition(c,ya),n.getVertexPosition(l,_a);let m=mx(n,t,e,i,xa,ya,_a,Gd);if(m){let f=new j;wi.getBarycoord(Gd,xa,ya,_a,f),s&&(m.uv=wi.getInterpolatedAttribute(s,a,c,l,f,new _e)),r&&(m.uv1=wi.getInterpolatedAttribute(r,a,c,l,f,new _e)),o&&(m.normal=wi.getInterpolatedAttribute(o,a,c,l,f,new j),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new j,materialIndex:0};wi.getNormal(xa,ya,_a,d.normal),m.face=d,m.barycoord=f}return m}var Ka=class extends gn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=dn,m=dn,f,d){super(null,o,a,c,l,m,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=new ls,gx=new _e(.5,.5),Sa=new j,uo=class{constructor(t=new ci,e=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],m=r[4],f=r[5],d=r[6],x=r[7],p=r[8],M=r[9],y=r[10],g=r[11],P=r[12],F=r[13],w=r[14],R=r[15];if(s[0].setComponents(l-o,x-m,g-p,R-P).normalize(),s[1].setComponents(l+o,x+m,g+p,R+P).normalize(),s[2].setComponents(l+a,x+f,g+M,R+F).normalize(),s[3].setComponents(l-a,x-f,g-M,R-F).normalize(),i)s[4].setComponents(c,d,y,w).normalize(),s[5].setComponents(l-c,x-d,g-y,R-w).normalize();else if(s[4].setComponents(l-c,x-d,g-y,R-w).normalize(),e===hi)s[5].setComponents(l+c,x+d,g+y,R+w).normalize();else if(e===no)s[5].setComponents(c,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=gx.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ps=class extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ja=new j,Qa=new j,Wd=new qe,jr=new pr,wa=new ls,wh=new j,Xd=new j,tl=class extends Rn{constructor(t=new ln,e=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ja.fromBufferAttribute(e,s-1),Qa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ja.distanceTo(Qa);t.setAttribute("lineDistance",new Cn(i,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,t.ray.intersectsSphere(wa)===!1)return;Wd.copy(s).invert(),jr.copy(t.ray).applyMatrix4(Wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,m=i.index,d=i.attributes.position;if(m!==null){let x=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let M=x,y=p-1;M<y;M+=l){let g=m.getX(M),P=m.getX(M+1),F=Aa(this,t,jr,c,g,P,M);F&&e.push(F)}if(this.isLineLoop){let M=m.getX(p-1),y=m.getX(x),g=Aa(this,t,jr,c,M,y,p-1);g&&e.push(g)}}else{let x=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let M=x,y=p-1;M<y;M+=l){let g=Aa(this,t,jr,c,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=Aa(this,t,jr,c,p-1,x,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Aa(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(ja.fromBufferAttribute(a,s),Qa.fromBufferAttribute(a,r),e.distanceSqToSegment(ja,Qa,wh,Xd)>i)return;wh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(wh);if(!(l<t.near||l>t.far))return{distance:l,point:Xd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var qd=new j,Yd=new j,Ls=class extends tl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)qd.fromBufferAttribute(e,s),Yd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qd.distanceTo(Yd);t.setAttribute("lineDistance",new Cn(i,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mr=class extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$d=new qe,Ph=new pr,Ea=new ls,Ta=new j,fo=class extends Rn{constructor(t=new ln,e=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;$d.copy(s).invert(),Ph.copy(t.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),x=Math.min(l.count,o.start+o.count);for(let p=d,M=x;p<M;p++){let y=l.getX(p);Ta.fromBufferAttribute(f,y),Zd(Ta,y,c,s,t,e,this)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let p=d,M=x;p<M;p++)Ta.fromBufferAttribute(f,p),Zd(Ta,p,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zd(n,t,e,i,s,r,o){let a=Ph.distanceSqToPoint(n);if(a<e){let c=new j;Ph.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends gn{constructor(t=[],e=ms,i,s,r,o,a,c,l,m){super(t,e,i,s,r,o,a,c,l,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jn=class extends gn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends gn{constructor(t,e,i=fi,s,r,o,a=dn,c=dn,l,m=Ei,f=1){if(m!==Ei&&m!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,o,a,c,m,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},el=class extends hs{constructor(t,e=fi,i=ms,s,r,o=dn,a=dn,c,l=Ei){let m={width:t,height:t,depth:1},f=[m,m,m,m,m,m];super(t,t,e,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},je=class n extends ln{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],m=[],f=[],d=0,x=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Cn(l,3)),this.setAttribute("normal",new Cn(m,3)),this.setAttribute("uv",new Cn(f,2));function p(M,y,g,P,F,w,R,E,D,b,T){let N=w/D,z=R/b,J=w/2,Q=R/2,O=E/2,B=D+1,q=b+1,K=0,rt=0,$=new j;for(let et=0;et<q;et++){let ot=et*z-Q;for(let wt=0;wt<B;wt++){let Ct=wt*N-J;$[M]=Ct*P,$[y]=ot*F,$[g]=O,l.push($.x,$.y,$.z),$[M]=0,$[y]=0,$[g]=E>0?1:-1,m.push($.x,$.y,$.z),f.push(wt/D),f.push(1-et/b),K+=1}}for(let et=0;et<b;et++)for(let ot=0;ot<D;ot++){let wt=d+ot+B*et,Ct=d+ot+B*(et+1),Nt=d+(ot+1)+B*(et+1),_t=d+(ot+1)+B*et;c.push(wt,Ct,_t),c.push(Ct,Nt,_t),rt+=6}a.addGroup(x,rt,T),x+=rt,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ca=new j,Ra=new j,Ah=new j,Ia=new wi,go=class extends ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Ua*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],m=["a","b","c"],f=new Array(3),d={},x=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:M,b:y,c:g}=Ia;if(M.fromBufferAttribute(a,l[0]),y.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Ia.getNormal(Ah),f[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,f[1]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let P=0;P<3;P++){let F=(P+1)%3,w=f[P],R=f[F],E=Ia[m[P]],D=Ia[m[F]],b=`${w}_${R}`,T=`${R}_${w}`;T in d&&d[T]?(Ah.dot(d[T].normal)<=r&&(x.push(E.x,E.y,E.z),x.push(D.x,D.y,D.z)),d[T]=null):b in d||(d[b]={index0:l[P],index1:l[F],normal:Ah.clone()})}}for(let p in d)if(d[p]){let{index0:M,index1:y}=d[p];Ca.fromBufferAttribute(a,M),Ra.fromBufferAttribute(a,y),x.push(Ca.x,Ca.y,Ca.z),x.push(Ra.x,Ra.y,Ra.z)}this.setAttribute("position",new Cn(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var xo=class n extends ln{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,m=c+1,f=t/a,d=e/c,x=[],p=[],M=[],y=[];for(let g=0;g<m;g++){let P=g*d-o;for(let F=0;F<l;F++){let w=F*f-r;p.push(w,-P,0),M.push(0,0,1),y.push(F/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let P=0;P<a;P++){let F=P+l*g,w=P+l*(g+1),R=P+1+l*(g+1),E=P+1+l*g;x.push(F,w,E),x.push(w,R,E)}this.setIndex(x),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(M,3)),this.setAttribute("uv",new Cn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Us(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Jd(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Jd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function bn(n){let t={};for(let e=0;e<n.length;e++){let i=Us(n[e]);for(let s in i)t[s]=i[s]}return t}function Jd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function xx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ru(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var Bp={clone:Us,merge:bn},yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=_x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=xx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new j().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},nl=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var il=class extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Eh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var us=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends us{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,a=2*e-i;break;case Ih:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Rh:o=t,c=2*i-e;break;case Ih:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,m=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*m,this._offsetNext=o*m}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,m=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,x=this._weightNext,p=(i-e)/(s-e),M=p*p,y=M*p,g=-d*y+2*d*M-d*p,P=(1+d)*y+(-1.5-2*d)*M+(-.5+d)*p+1,F=(-1-x)*y+(1.5+x)*M+.5*p,w=x*y-x*M;for(let R=0;R!==a;++R)r[R]=g*o[m+R]+P*o[l+R]+F*o[c+R]+w*o[f+R];return r}},ol=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,m=(i-e)/(s-e),f=1-m;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*m;return r}},al=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ll=class extends us{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,m=this.inTangents,f=this.outTangents;if(!m||!f){let p=(i-e)/(s-e),M=1-p;for(let y=0;y!==a;++y)r[y]=o[l+y]*M+o[c+y]*p;return r}let d=a*2,x=t-1;for(let p=0;p!==a;++p){let M=o[l+p],y=o[c+p],g=x*d+p*2,P=f[g],F=f[g+1],w=t*d+p*2,R=m[w],E=m[w+1],D=Mx(i,e,P,R,s);r[p]=kp(D,M,F,E,y)}return r}};function kp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function vx(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Mx(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=kp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=vx(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Eh(t.settings)&&(i.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case Xa:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case Th:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return oe("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Th}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Eh(this.settings)&&(Kd(this.settings.inTangents,t),Kd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){ae("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ae("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Kg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ae("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],m=t[a+1];if(l!==m&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*i,d=f-i,x=f+i;for(let p=0;p!==i;++p){let M=e[f+p];if(M!==e[d+p]||M!==e[x+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let x=0;x!==i;++x)e[d+x]=e[f+x]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Xa;var fs=class extends kn{constructor(t,e,i){super(t,e,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Qr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};cl.prototype.ValueTypeName="color";var hl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};hl.prototype.ValueTypeName="number";var ul=class extends us{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let m=l+a;l!==m;l+=4)Ci.slerpFlat(r,0,o,l-a,o,l,c);return r}},yo=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends kn{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Qr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends kn{constructor(t,e,i,s){super(t,e,i,s)}};fl.prototype.ValueTypeName="vector";var dl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){a++,r===!1&&s.onStart!==void 0&&s.onStart(m,o,a),r=!0},this.itemEnd=function(m){o++,s.onProgress!==void 0&&s.onProgress(m,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),c?c(m):m},this.setURLModifier=function(m){return c=m,this},this.addHandler=function(m,f){return l.push(m,f),this},this.removeHandler=function(m){let f=l.indexOf(m);return f!==-1&&l.splice(f,2),this},this.getHandler=function(m){for(let f=0,d=l.length;f<d;f+=2){let x=l[f],p=l[f+1];if(x.global&&(x.lastIndex=0),x.test(m))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vp=new dl,pl=class{constructor(t){this.manager=t!==void 0?t:Vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pa=new j,La=new Ci,bi=new j,_o=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pa,La,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Pa,La,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,La,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new j,jd=new _e,Qd=new _e,_n=class extends _o{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,jd,Qd),e.subVectors(Qd,jd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vo=class extends _o{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=m*this.view.offsetY,c=a-m*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ar=-90,lr=1,ml=class extends Rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(ar,lr,t,e);s.layers=this.layers,this.add(s);let r=new _n(ar,lr,t,e);r.layers=this.layers,this.add(r);let o=new _n(ar,lr,t,e);o.layers=this.layers,this.add(o);let a=new _n(ar,lr,t,e);a.layers=this.layers,this.add(a);let c=new _n(ar,lr,t,e);c.layers=this.layers,this.add(c);let l=new _n(ar,lr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,m]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(f,d,x),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},gl=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ou="\\[\\]\\.:\\/",bx=new RegExp("["+ou+"]","g"),au="[^"+ou+"]",Sx="[^"+ou.replace("\\.","")+"]",wx=/((?:WC+[\/:])*)/.source.replace("WC",au),Ax=/(WCOD+)?/.source.replace("WCOD",Sx),Ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),Tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),Cx=new RegExp("^"+wx+Ax+Ex+Tx+"$"),Rx=["material","materials","bones","map"],Lh=class{constructor(t,e,i){let s=i||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bx,"")}static parseTrackName(t){let e=Cx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===l){l=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Lh;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vS=new Float32Array(1);var du=class du{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};du.prototype.isMatrix2=!0;var Dh=du;function lu(n,t,e,i){let s=Ix(i);switch(e){case Qh:return n*t;case eu:return n*t/s.components*s.byteLength;case wl:return n*t/s.components*s.byteLength;case ys:return n*t*2/s.components*s.byteLength;case Al:return n*t*2/s.components*s.byteLength;case tu:return n*t*3/s.components*s.byteLength;case jn:return n*t*4/s.components*s.byteLength;case El:return n*t*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:case Il:return Math.max(n,16)*Math.max(t,8)/4;case Tl:case Rl:return Math.max(n,8)*Math.max(t,8)/2;case Pl:case Ll:case Nl:case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Dl:case Co:case Fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kl:case jl:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tc:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ro:case nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ix(n){switch(n){case Vn:case Zh:return{byteLength:1,components:1};case yr:case Jh:case pi:return{byteLength:2,components:1};case bl:case Sl:return{byteLength:2,components:4};case fi:case Ml:case di:return{byteLength:4,components:1};case Kh:case jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cm(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Lx(n){let t=new WeakMap;function e(a,c){let l=a.array,m=a.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,m),a.onUploadCallback();let x;if(l instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)x=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)x=n.SHORT;else if(l instanceof Uint32Array)x=n.UNSIGNED_INT;else if(l instanceof Int32Array)x=n.INT;else if(l instanceof Int8Array)x=n.BYTE;else if(l instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:x,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let m=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,m);else{f.sort((x,p)=>x.start-p.start);let d=0;for(let x=1;x<f.length;x++){let p=f[d],M=f[x];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++d,f[d]=M)}f.length=d+1;for(let x=0,p=f.length;x<p;x++){let M=f[x];n.bufferSubData(l,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let m=t.get(a);(!m||m.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
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
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vx=`#ifdef USE_BATCHING
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
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qx=`#ifdef USE_IRIDESCENCE
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
#endif`,Yx=`#ifdef USE_BUMPMAP
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ny=`#define PI 3.141592653589793
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sy=`vec3 transformedNormal = objectNormal;
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
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
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
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
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
#endif`,Py=`uniform sampler2D dfgLUT;
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
}`,Ly=`
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gy=`#if defined( USE_POINTS_UV )
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
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n_=`#ifdef USE_NORMALMAP
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
#endif`,i_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y_=`float getShadowMask() {
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
}`,__=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,S_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T_=`#ifdef USE_TRANSMISSION
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
#endif`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
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
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
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
}`,k_=`#if DEPTH_PACKING == 3200
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
}`,V_=`#define DISTANCE
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
}`,H_=`#define DISTANCE
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`uniform float scale;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,$_=`uniform vec3 diffuse;
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
}`,Z_=`#define LAMBERT
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
}`,J_=`#define LAMBERT
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
}`,K_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,Q_=`#define NORMAL
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
}`,tv=`#define NORMAL
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
}`,ev=`#define PHONG
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
}`,nv=`#define PHONG
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
}`,iv=`#define STANDARD
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
}`,sv=`#define STANDARD
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
}`,rv=`#define TOON
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
}`,ov=`#define TOON
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
}`,av=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,uv=`uniform float rotation;
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
}`,fv=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:Dx,alphahash_pars_fragment:Nx,alphamap_fragment:Ux,alphamap_pars_fragment:Fx,alphatest_fragment:Ox,alphatest_pars_fragment:zx,aomap_fragment:Bx,aomap_pars_fragment:kx,batching_pars_vertex:Vx,batching_vertex:Hx,begin_vertex:Gx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:qx,bumpmap_pars_fragment:Yx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:Zx,clipping_planes_pars_vertex:Jx,clipping_planes_vertex:Kx,color_fragment:jx,color_pars_fragment:Qx,color_pars_vertex:ty,color_vertex:ey,common:ny,cube_uv_reflection_fragment:iy,defaultnormal_vertex:sy,displacementmap_pars_vertex:ry,displacementmap_vertex:oy,emissivemap_fragment:ay,emissivemap_pars_fragment:ly,colorspace_fragment:cy,colorspace_pars_fragment:hy,envmap_fragment:uy,envmap_common_pars_fragment:fy,envmap_pars_fragment:dy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Ay,envmap_vertex:my,fog_vertex:gy,fog_pars_vertex:xy,fog_fragment:yy,fog_pars_fragment:_y,gradientmap_pars_fragment:vy,lightmap_pars_fragment:My,lights_lambert_fragment:by,lights_lambert_pars_fragment:Sy,lights_pars_begin:wy,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:Cy,lights_phong_pars_fragment:Ry,lights_physical_fragment:Iy,lights_physical_pars_fragment:Py,lights_fragment_begin:Ly,lights_fragment_maps:Dy,lights_fragment_end:Ny,lightprobes_pars_fragment:Uy,logdepthbuf_fragment:Fy,logdepthbuf_pars_fragment:Oy,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:By,map_fragment:ky,map_pars_fragment:Vy,map_particle_fragment:Hy,map_particle_pars_fragment:Gy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:Xy,morphinstance_vertex:qy,morphcolor_vertex:Yy,morphnormal_vertex:$y,morphtarget_pars_vertex:Zy,morphtarget_vertex:Jy,normal_fragment_begin:Ky,normal_fragment_maps:jy,normal_pars_fragment:Qy,normal_pars_vertex:t_,normal_vertex:e_,normalmap_pars_fragment:n_,clearcoat_normal_fragment_begin:i_,clearcoat_normal_fragment_maps:s_,clearcoat_pars_fragment:r_,iridescence_pars_fragment:o_,opaque_fragment:a_,packing:l_,premultiplied_alpha_fragment:c_,project_vertex:h_,dithering_fragment:u_,dithering_pars_fragment:f_,roughnessmap_fragment:d_,roughnessmap_pars_fragment:p_,shadowmap_pars_fragment:m_,shadowmap_pars_vertex:g_,shadowmap_vertex:x_,shadowmask_pars_fragment:y_,skinbase_vertex:__,skinning_pars_vertex:v_,skinning_vertex:M_,skinnormal_vertex:b_,specularmap_fragment:S_,specularmap_pars_fragment:w_,tonemapping_fragment:A_,tonemapping_pars_fragment:E_,transmission_fragment:T_,transmission_pars_fragment:C_,uv_pars_fragment:R_,uv_pars_vertex:I_,uv_vertex:P_,worldpos_vertex:L_,background_vert:D_,background_frag:N_,backgroundCube_vert:U_,backgroundCube_frag:F_,cube_vert:O_,cube_frag:z_,depth_vert:B_,depth_frag:k_,distance_vert:V_,distance_frag:H_,equirect_vert:G_,equirect_frag:W_,linedashed_vert:X_,linedashed_frag:q_,meshbasic_vert:Y_,meshbasic_frag:$_,meshlambert_vert:Z_,meshlambert_frag:J_,meshmatcap_vert:K_,meshmatcap_frag:j_,meshnormal_vert:Q_,meshnormal_frag:tv,meshphong_vert:ev,meshphong_frag:nv,meshphysical_vert:iv,meshphysical_frag:sv,meshtoon_vert:rv,meshtoon_frag:ov,points_vert:av,points_frag:lv,shadow_vert:cv,shadow_frag:hv,sprite_vert:uv,sprite_frag:fv},kt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Li={basic:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:bn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:bn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:bn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new le(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:bn([kt.points,kt.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:bn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:bn([kt.common,kt.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:bn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:bn([kt.sprite,kt.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:bn([kt.common,kt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:bn([kt.lights,kt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Li.physical={uniforms:bn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var rc={r:0,b:0,g:0},dv=new qe,hm=new pe;hm.set(-1,0,0,0,1,0,0,0,1);function pv(n,t,e,i,s,r){let o=new le(0),a=s===!0?0:1,c,l,m=null,f=0,d=null;function x(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){let w=P.backgroundBlurriness>0;F=t.get(F,w)}return F}function p(P){let F=!1,w=x(P);w===null?y(o,a):w&&w.isColor&&(y(w,1),F=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(P,F){let w=x(F);w&&(w.isCubeTexture||w.mapping===bo)?(l===void 0&&(l=new De(new je(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Us(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(F.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hm),l.material.toneMapped=Se.getTransfer(w.colorSpace)!==Le,(m!==w||f!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,m=w,f=w.version,d=n.toneMapping),l.layers.enableAll(),P.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new De(new xo(2,2),new Mn({name:"BackgroundMaterial",uniforms:Us(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.toneMapped=Se.getTransfer(w.colorSpace)!==Le,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||f!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,m=w,f=w.version,d=n.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null))}function y(P,F){P.getRGB(rc,ru(n)),e.buffers.color.setClear(rc.r,rc.g,rc.b,F,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,F=1){o.set(P),a=F,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(P){a=P,y(o,a)},render:p,addToRenderList:M,dispose:g}}function mv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(z,J,Q,O,B){let q=!1,K=f(z,O,Q,J);r!==K&&(r=K,l(r.object)),q=x(z,O,Q,B),q&&p(z,O,Q,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,w(z,J,Q,O),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(z){return n.bindVertexArray(z)}function m(z){return n.deleteVertexArray(z)}function f(z,J,Q,O){let B=O.wireframe===!0,q=i[J.id];q===void 0&&(q={},i[J.id]=q);let K=z.isInstancedMesh===!0?z.id:0,rt=q[K];rt===void 0&&(rt={},q[K]=rt);let $=rt[Q.id];$===void 0&&($={},rt[Q.id]=$);let et=$[B];return et===void 0&&(et=d(c()),$[B]=et),et}function d(z){let J=[],Q=[],O=[];for(let B=0;B<e;B++)J[B]=0,Q[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:Q,attributeDivisors:O,object:z,attributes:{},index:null}}function x(z,J,Q,O){let B=r.attributes,q=J.attributes,K=0,rt=Q.getAttributes();for(let $ in rt)if(rt[$].location>=0){let ot=B[$],wt=q[$];if(wt===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(wt=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(wt=z.instanceColor)),ot===void 0||ot.attribute!==wt||wt&&ot.data!==wt.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function p(z,J,Q,O){let B={},q=J.attributes,K=0,rt=Q.getAttributes();for(let $ in rt)if(rt[$].location>=0){let ot=q[$];ot===void 0&&($==="instanceMatrix"&&z.instanceMatrix&&(ot=z.instanceMatrix),$==="instanceColor"&&z.instanceColor&&(ot=z.instanceColor));let wt={};wt.attribute=ot,ot&&ot.data&&(wt.data=ot.data),B[$]=wt,K++}r.attributes=B,r.attributesNum=K,r.index=O}function M(){let z=r.newAttributes;for(let J=0,Q=z.length;J<Q;J++)z[J]=0}function y(z){g(z,0)}function g(z,J){let Q=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;Q[z]=1,O[z]===0&&(n.enableVertexAttribArray(z),O[z]=1),B[z]!==J&&(n.vertexAttribDivisor(z,J),B[z]=J)}function P(){let z=r.newAttributes,J=r.enabledAttributes;for(let Q=0,O=J.length;Q<O;Q++)J[Q]!==z[Q]&&(n.disableVertexAttribArray(Q),J[Q]=0)}function F(z,J,Q,O,B,q,K){K===!0?n.vertexAttribIPointer(z,J,Q,B,q):n.vertexAttribPointer(z,J,Q,O,B,q)}function w(z,J,Q,O){M();let B=O.attributes,q=Q.getAttributes(),K=J.defaultAttributeValues;for(let rt in q){let $=q[rt];if($.location>=0){let et=B[rt];if(et===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(et=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(et=z.instanceColor)),et!==void 0){let ot=et.normalized,wt=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;let Nt=Ct.buffer,_t=Ct.type,Rt=Ct.bytesPerElement,G=_t===n.INT||_t===n.UNSIGNED_INT||et.gpuType===Ml;if(et.isInterleavedBufferAttribute){let Y=et.data,gt=Y.stride,xt=et.offset;if(Y.isInstancedInterleavedBuffer){for(let bt=0;bt<$.locationSize;bt++)g($.location+bt,Y.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let bt=0;bt<$.locationSize;bt++)y($.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let bt=0;bt<$.locationSize;bt++)F($.location+bt,wt/$.locationSize,_t,ot,gt*Rt,(xt+wt/$.locationSize*bt)*Rt,G)}else{if(et.isInstancedBufferAttribute){for(let Y=0;Y<$.locationSize;Y++)g($.location+Y,et.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Y=0;Y<$.locationSize;Y++)y($.location+Y);n.bindBuffer(n.ARRAY_BUFFER,Nt);for(let Y=0;Y<$.locationSize;Y++)F($.location+Y,wt/$.locationSize,_t,ot,wt*Rt,wt/$.locationSize*Y*Rt,G)}}else if(K!==void 0){let ot=K[rt];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv($.location,ot);break;case 3:n.vertexAttrib3fv($.location,ot);break;case 4:n.vertexAttrib4fv($.location,ot);break;default:n.vertexAttrib1fv($.location,ot)}}}}P()}function R(){T();for(let z in i){let J=i[z];for(let Q in J){let O=J[Q];for(let B in O){let q=O[B];for(let K in q)m(q[K].object),delete q[K];delete O[B]}}delete i[z]}}function E(z){if(i[z.id]===void 0)return;let J=i[z.id];for(let Q in J){let O=J[Q];for(let B in O){let q=O[B];for(let K in q)m(q[K].object),delete q[K];delete O[B]}}delete i[z.id]}function D(z){for(let J in i){let Q=i[J];for(let O in Q){let B=Q[O];if(B[z.id]===void 0)continue;let q=B[z.id];for(let K in q)m(q[K].object),delete q[K];delete B[z.id]}}}function b(z){for(let J in i){let Q=i[J],O=z.isInstancedMesh===!0?z.id:0,B=Q[O];if(B!==void 0){for(let q in B){let K=B[q];for(let rt in K)m(K[rt].object),delete K[rt];delete B[q]}delete Q[O],Object.keys(Q).length===0&&delete i[J]}}}function T(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:y,disableUnusedAttributes:P}}function gv(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,m){m!==0&&(n.drawArraysInstanced(i,c,l,m),e.update(l,i,m))}function a(c,l,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,m);let d=0;for(let x=0;x<m;x++)d+=l[x];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function xv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==jn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let b=D===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Vn&&D!==di&&!b&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",m=c(l);m!==l&&(oe("WebGLRenderer:",l,"not supported, using",m,"instead."),l=m);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),F=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:x,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:w,maxSamples:R,samples:E}}function yv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new ci,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let x=f.length!==0||d||i!==0||s;return s=d,i=f.length,x},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=m(f,d,0)},this.setState=function(f,d,x){let p=f.clippingPlanes,M=f.clipIntersection,y=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!y)r?m(null):l();else{let P=r?0:i,F=P*4,w=g.clippingState||null;c.value=w,w=m(p,d,F,x);for(let R=0;R!==F;++R)w[R]=e[R];g.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(f,d,x,p){let M=f!==null?f.length:0,y=null;if(M!==0){if(y=c.value,p!==!0||y===null){let g=x+M*4,P=d.matrixWorldInverse;a.getNormalMatrix(P),(y===null||y.length<g)&&(y=new Float32Array(g));for(let F=0,w=x;F!==M;++F,w+=4)o.copy(f[F]).applyMatrix4(P,a),o.normal.toArray(y,w),y[w+3]=o.constant}c.value=y,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}var Mr=4,_v=6,vv=20,Mv=256,Io=new vo,Hp=new le,pu=null,mu=0,gu=0,xu=!1,bv=new j,Fs=new j,ac=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=bv}=r;pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=xu,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:pi,format:jn,colorSpace:to,depthBuffer:!1},s=Gp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sv(r)),this._blurMaterial=Av(r,t,e),this._ggxMaterial=wv(r,t,e)}return s}_compileMaterial(t){let e=new De(new ln,t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,i,s,r){let c=new _n(90,1,e,i),l=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,x=f.toneMapping;f.getClearColor(Hp),f.toneMapping=ui,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new je,new vn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,y=M.material,g=!1,P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,g=!0):(y.color.copy(Hp),g=!0);for(let F=0;F<6;F++){let w=F%3;w===0?(c.up.set(0,l[F],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+m[F],r.y,r.z)):w===1?(c.up.set(0,0,l[F]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+m[F],r.z)):(c.up.set(0,l[F],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+m[F]));let R=this._cubeSize;vr(s,w*R,F>2?R:0,R,R),f.setRenderTarget(s),g&&f.render(M,c),f.render(t,c)}f.toneMapping=x,f.autoClear=d,t.background=P}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ms||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;vr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Io)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-m*m),d=l*1.25,x=f*d,{_lodMax:p}=this,M=this._sizeLods[i],y=3*M*(i>p-Mr?i-p+Mr:0),g=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=x,c.mipInt.value=p-e,vr(r,y,g,3*M,2*M),s.setRenderTarget(r),s.render(a,Io),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,vr(t,y,g,3*M,2*M),s.setRenderTarget(t),s.render(a,Io)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let m=this._sizeLods[s],f=3*m*(s>this._lodMax-Mr?s-this._lodMax+Mr:0),d=4*(this._cubeSize-m);vr(e,f,d,3*m,2*m),o.setRenderTarget(e),o.render(c,Io)}};function Sv(n){let t=[],e=[],i=n,s=n-Mr+1+_v;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,m=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,x=3,p=new Float32Array(x*d*f),M=new Float32Array(x*d*f);for(let g=0;g<f;g++){let P=g%3*2/3-1,F=g>2?0:-1,w=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];p.set(w,x*d*g);for(let R=0;R<d;R++){let E=m[R*2]*2-1,D=m[R*2+1]*2-1;g===0?Fs.set(1,D,E):g===1?Fs.set(-E,1,-D):g===2?Fs.set(-E,D,1):g===3?Fs.set(-1,D,-E):g===4?Fs.set(-E,-1,D):Fs.set(E,D,-1),Fs.toArray(M,(g*d+R)*x)}}let y=new ln;y.setAttribute("position",new Ke(p,x)),y.setAttribute("outputDirection",new Ke(M,x)),e.push(new De(y,null)),i>Mr&&i--}return{lodMeshes:e,sizeLods:t}}function Gp(n,t,e){let i=new Ln(n,t,e);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function wv(n,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Av(n,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:vv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Wp(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Xp(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lc=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new po(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Ii});r.uniforms.tEquirect.value=e;let o=new De(s,r),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=an),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Ev(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,x=!1){return d==null?null:x?o(d):r(d)}function r(d){if(d&&d.isTexture){let x=d.mapping;if(x===yl||x===_l)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let M=new lc(p.height);return M.fromEquirectangularTexture(n,d),t.set(d,M),d.addEventListener("dispose",l),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let x=d.mapping,p=x===yl||x===_l,M=x===ms||x===Ns;if(p||M){let y=e.get(d),g=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new ac(n)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{let P=d.image;return p&&P&&P.height>0||M&&P&&c(P)?(i===null&&(i=new ac(n)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",m),y.texture):null}}}return d}function a(d,x){return x===yl?d.mapping=ms:x===_l&&(d.mapping=Ns),d}function c(d){let x=0,p=6;for(let M=0;M<p;M++)d[M]!==void 0&&x++;return x===p}function l(d){let x=d.target;x.removeEventListener("dispose",l);let p=t.get(x);p!==void 0&&(t.delete(x),p.dispose())}function m(d){let x=d.target;x.removeEventListener("dispose",m);let p=e.get(x);p!==void 0&&(e.delete(x),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Tv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function Cv(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let x=r.get(d);x&&(t.remove(x),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let x in d)t.update(d[x],n.ARRAY_BUFFER)}function l(f){let d=[],x=f.index,p=f.attributes.position,M=0;if(p===void 0)return;if(x!==null){let P=x.array;M=x.version;for(let F=0,w=P.length;F<w;F+=3){let R=P[F+0],E=P[F+1],D=P[F+2];d.push(R,E,E,D,D,R)}}else{let P=p.array;M=p.version;for(let F=0,w=P.length/3-1;F<w;F+=3){let R=F+0,E=F+1,D=F+2;d.push(R,E,E,D,D,R)}}let y=new(p.count>=65535?co:lo)(d,1);y.version=M;let g=r.get(f);g&&t.remove(g),r.set(f,y)}function m(f){let d=r.get(f);if(d){let x=f.index;x!==null&&d.version<x.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:m}}function Rv(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,x){x!==0&&(n.drawElementsInstanced(i,d,r,f*o,x),e.update(d,i,x))}function m(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,x);let M=0;for(let y=0;y<x;y++)M+=d[y];e.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=m}function Iv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Pv(n,t,e){let i=new WeakMap,s=new Ze;function r(o,a,c){let l=o.morphTargetInfluences,m=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=m!==void 0?m.length:0,d=i.get(a);if(d===void 0||d.count!==f){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let x=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],P=a.morphAttributes.color||[],F=0;x===!0&&(F=1),p===!0&&(F=2),M===!0&&(F=3);let w=a.attributes.position.count*F,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let E=new Float32Array(w*R*4*f),D=new ro(E,w,R,f);D.type=di,D.needsUpdate=!0;let b=F*4;for(let N=0;N<f;N++){let z=y[N],J=g[N],Q=P[N],O=w*R*4*N;for(let B=0;B<z.count;B++){let q=B*b;x===!0&&(s.fromBufferAttribute(z,B),E[O+q+0]=s.x,E[O+q+1]=s.y,E[O+q+2]=s.z,E[O+q+3]=0),p===!0&&(s.fromBufferAttribute(J,B),E[O+q+4]=s.x,E[O+q+5]=s.y,E[O+q+6]=s.z,E[O+q+7]=0),M===!0&&(s.fromBufferAttribute(Q,B),E[O+q+8]=s.x,E[O+q+9]=s.y,E[O+q+10]=s.z,E[O+q+11]=Q.itemSize===4?s.w:1)}}d={count:f,texture:D,size:new _e(w,R)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let M=0;M<l.length;M++)x+=l[M];let p=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Lv(n,t,e,i,s){let r=new WeakMap;function o(l){let m=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==m&&(t.update(d),r.set(d,m)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==m&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,m))),l.isSkinnedMesh){let x=l.skeleton;r.get(x)!==m&&(x.update(),r.set(x,m))}return d}function a(){r=new WeakMap}function c(l){let m=l.target;m.removeEventListener("dispose",c),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:a}}var Dv={[Vh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[Wh]:"ACES_FILMIC_TONE_MAPPING",[qh]:"AGX_TONE_MAPPING",[Yh]:"NEUTRAL_TONE_MAPPING",[Xh]:"CUSTOM_TONE_MAPPING"};function Nv(n,t,e,i,s,r){let o=new Ln(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ln;l.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Cn([0,2,0,0,2,0],2));let m=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new De(l,m),d=new vo(-1,1,1,-1,0,1),x=null,p=null,M=!1,y,g=null,P=[],F=!1;this.setSize=function(w,R){o.setSize(w,R),a!==null&&a.setSize(w,R),c!==null&&c.setSize(w,R);for(let E=0;E<P.length;E++){let D=P[E];D.setSize&&D.setSize(w,R)}},this.setEffects=function(w){P=w,F=P.length>0&&P[0].isRenderPass===!0;let R=o.width,E=o.height;P.length>0&&a===null&&(a=new Ln(R,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(R,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<P.length;D++){let b=P[D];b.setSize&&b.setSize(R,E)}},this.begin=function(w,R){if(M||w.toneMapping===ui&&P.length===0)return!1;if(g=R,R!==null){let E=R.width,D=R.height;(o.width!==E||o.height!==D)&&this.setSize(E,D)}return F===!1&&w.setRenderTarget(o),y=w.toneMapping,w.toneMapping=ui,!0},this.hasRenderPass=function(){return F},this.end=function(w,R){w.toneMapping=y,M=!0;let E=o,D=a;for(let b=0;b<P.length;b++){let T=P[b];T.enabled!==!1&&(T.render(w,D,E,R),T.needsSwap!==!1&&(E=D,D=D===a?c:a))}if(x!==w.outputColorSpace||p!==w.toneMapping){x=w.outputColorSpace,p=w.toneMapping,m.defines={},Se.getTransfer(x)===Le&&(m.defines.SRGB_TRANSFER="");let b=Dv[p];b&&(m.defines[b]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(g),w.render(f,d),g=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),m.dispose()}}var um=new gn,vu=new hs(1,1),fm=new ro,dm=new Za,pm=new po,qp=[],Yp=[],$p=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function Sr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=qp[s];if(r===void 0&&(r=new Float32Array(s),qp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function uc(n,t){let e=Yp[t];e===void 0&&(e=new Int32Array(t),Yp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Uv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function Ov(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function Bv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;Jp.set(i),n.uniformMatrix2fv(this.addr,!1,Jp),hn(e,i)}}function kv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;Zp.set(i),n.uniformMatrix3fv(this.addr,!1,Zp),hn(e,i)}}function Vv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,i))return;$p.set(i),n.uniformMatrix4fv(this.addr,!1,$p),hn(e,i)}}function Hv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function Wv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function Xv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function qv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Yv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function $v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function Zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function Jv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vu.compareFunction=e.isReversedDepthBuffer()?sc:ic,r=vu):r=um,e.setTexture2D(t||r,s)}function Kv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||dm,s)}function jv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||pm,s)}function Qv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||fm,s)}function tM(n){switch(n){case 5126:return Uv;case 35664:return Fv;case 35665:return Ov;case 35666:return zv;case 35674:return Bv;case 35675:return kv;case 35676:return Vv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return $v;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Qv}}function eM(n,t){n.uniform1fv(this.addr,t)}function nM(n,t){let e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function iM(n,t){let e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function sM(n,t){let e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function rM(n,t){let e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function oM(n,t){let e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function aM(n,t){let e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lM(n,t){n.uniform1iv(this.addr,t)}function cM(n,t){n.uniform2iv(this.addr,t)}function hM(n,t){n.uniform3iv(this.addr,t)}function uM(n,t){n.uniform4iv(this.addr,t)}function fM(n,t){n.uniform1uiv(this.addr,t)}function dM(n,t){n.uniform2uiv(this.addr,t)}function pM(n,t){n.uniform3uiv(this.addr,t)}function mM(n,t){n.uniform4uiv(this.addr,t)}function gM(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=vu:o=um;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function xM(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dm,r[o])}function yM(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pm,r[o])}function _M(n,t,e){let i=this.cache,s=t.length,r=uc(e,s);cn(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fm,r[o])}function vM(n){switch(n){case 5126:return eM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return hM;case 35669:case 35673:return uM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return _M}}var Mu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tM(e.type)}},bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vM(e.type)}},Su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},yu=/(\w+)(\])?(\[|\.)?/g;function Kp(n,t){n.seq.push(t),n.map[t.id]=t}function MM(n,t,e){let i=n.name,s=i.length;for(yu.lastIndex=0;;){let r=yu.exec(i),o=yu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kp(e,l===void 0?new Mu(a,n,t):new bu(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Su(a),Kp(e,f)),e=f}}}var br=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);MM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function jp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var bM=37297,SM=0;function wM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Qp=new pe;function AM(n){Se._getMatrix(Qp,Se.workingColorSpace,n);let t=`mat3( ${Qp.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(n)){case eo:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+wM(n.getShaderSource(t),a)}else return r}function EM(n,t){let e=AM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var TM={[Vh]:"Linear",[Hh]:"Reinhard",[Gh]:"Cineon",[Wh]:"ACESFilmic",[qh]:"AgX",[Yh]:"Neutral",[Xh]:"Custom"};function CM(n,t){let e=TM[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oc=new j;function RM(){Se.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),t=oc.y.toFixed(4),e=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function PM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function LM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Lo(n){return n!==""}function em(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(DM,UM)}var NM=new Map;function UM(n,t){let e=xe[t];if(e===void 0){let i=NM.get(t);if(i!==void 0)e=xe[i],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wu(e)}var FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(n){return n.replace(FM,OM)}function OM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var zM={[Mo]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function BM(n){return zM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kM={[ms]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function VM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var HM={[Ns]:"ENVMAP_MODE_REFRACTION"};function GM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":HM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var WM={[kh]:"ENVMAP_BLENDING_MULTIPLY",[Mp]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};function XM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":WM[n.combine]||"ENVMAP_BLENDING_NONE"}function qM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function YM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=BM(e),l=VM(e),m=GM(e),f=XM(e),d=qM(e),x=IM(e),p=PM(r),M=s.createProgram(),y,g,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Lo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(y=[sm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[sm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+m:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?xe.tonemapping_pars_fragment:"",e.toneMapping!==ui?CM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,EM("linearToOutputTexel",e.outputColorSpace),RM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),o=wu(o),o=em(o,e),o=nm(o,e),a=wu(a),a=em(a,e),a=nm(a,e),o=im(o),a=im(a),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let F=P+y+o,w=P+g+a,R=jp(s,s.VERTEX_SHADER,F),E=jp(s,s.FRAGMENT_SHADER,w);s.attachShader(M,R),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(z){if(n.debug.checkShaderErrors){let J=s.getProgramInfoLog(M)||"",Q=s.getShaderInfoLog(R)||"",O=s.getShaderInfoLog(E)||"",B=J.trim(),q=Q.trim(),K=O.trim(),rt=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,R,E);else{let et=tm(s,R,"vertex"),ot=tm(s,E,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+B+`
`+et+`
`+ot)}else B!==""?oe("WebGLProgram: Program Info Log:",B):(q===""||K==="")&&($=!1);$&&(z.diagnostics={runnable:rt,programLog:B,vertexShader:{log:q,prefix:y},fragmentShader:{log:K,prefix:g}})}s.deleteShader(R),s.deleteShader(E),b=new br(s,M),T=LM(s,M)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,bM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=E,this}var $M=0,Au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Eu(t),e.set(t,i)),i}},Eu=class{constructor(t){this.id=$M++,this.code=t,this.usedTimes=0}};function ZM(n){return n===ys||n===Co||n===Ro}function JM(n,t,e,i,s,r){let o=new oo,a=new Au,c=new Set,l=[],m=new Map,f=i.logarithmicDepthBuffer,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function M(b,T,N,z,J,Q){let O=z.fog,B=J.geometry,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,K=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,rt=t.get(b.envMap||q,K),$=rt&&rt.mapping===bo?rt.image.height:null,et=x[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&oe("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,wt=ot!==void 0?ot.length:0,Ct=0;B.morphAttributes.position!==void 0&&(Ct=1),B.morphAttributes.normal!==void 0&&(Ct=2),B.morphAttributes.color!==void 0&&(Ct=3);let Nt,_t,Rt,G;if(et){let Oe=Li[et];Nt=Oe.vertexShader,_t=Oe.fragmentShader}else{Nt=b.vertexShader,_t=b.fragmentShader;let Oe=a.getVertexShaderStage(b),be=a.getFragmentShaderStage(b);a.update(b,Oe,be),Rt=Oe.id,G=be.id}let Y=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),xt=J.isInstancedMesh===!0,bt=J.isBatchedMesh===!0,It=!!b.map,se=!!b.matcap,Wt=!!rt,ft=!!b.aoMap,he=!!b.lightMap,Ht=!!b.bumpMap&&b.wireframe===!1,ee=!!b.normalMap,de=!!b.displacementMap,Je=!!b.emissiveMap,ye=!!b.metalnessMap,Fe=!!b.roughnessMap,H=b.anisotropy>0,ke=b.clearcoat>0,ve=b.dispersion>0,U=b.retroreflectivity>0,v=b.iridescence>0,Z=b.sheen>0,nt=b.transmission>0,at=H&&!!b.anisotropyMap,Et=ke&&!!b.clearcoatMap,Dt=ke&&!!b.clearcoatNormalMap,ct=ke&&!!b.clearcoatRoughnessMap,dt=v&&!!b.iridescenceMap,Pt=v&&!!b.iridescenceThicknessMap,Yt=Z&&!!b.sheenColorMap,Ft=Z&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,jt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ue=nt&&!!b.transmissionMap,W=nt&&!!b.thicknessMap,At=!!b.gradientMap,ht=!!b.alphaMap,Tt=b.alphaTest>0,Lt=!!b.alphaHash,pt=!!b.extensions,Qt=ui;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=n.toneMapping);let $t={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:Nt,fragmentShader:_t,defines:b.defines,customVertexShaderID:Rt,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:bt,batchingColor:bt&&J._colorsTexture!==null,instancing:xt,instancingColor:xt&&J.instanceColor!==null,instancingMorph:xt&&J.morphTexture!==null,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:se,envMap:Wt,envMapMode:Wt&&rt.mapping,envMapCubeUVHeight:$,aoMap:ft,lightMap:he,bumpMap:Ht,normalMap:ee,displacementMap:de,emissiveMap:Je,normalMapObjectSpace:ee&&b.normalMapType===Ap,normalMapTangentSpace:ee&&b.normalMapType===nu,packedNormalMap:ee&&b.normalMapType===nu&&ZM(b.normalMap.format),metalnessMap:ye,roughnessMap:Fe,anisotropy:H,anisotropyMap:at,clearcoat:ke,clearcoatMap:Et,clearcoatNormalMap:Dt,clearcoatRoughnessMap:ct,dispersion:ve,retroreflection:U,iridescence:v,iridescenceMap:dt,iridescenceThicknessMap:Pt,sheen:Z,sheenColorMap:Yt,sheenRoughnessMap:Ft,specularMap:Ut,specularColorMap:jt,specularIntensityMap:ne,transmission:nt,transmissionMap:ue,thicknessMap:W,gradientMap:At,opaque:b.transparent===!1&&b.blending===xr&&b.alphaToCoverage===!1,alphaMap:ht,alphaTest:Tt,alphaHash:Lt,combine:b.combine,mapUv:It&&p(b.map.channel),aoMapUv:ft&&p(b.aoMap.channel),lightMapUv:he&&p(b.lightMap.channel),bumpMapUv:Ht&&p(b.bumpMap.channel),normalMapUv:ee&&p(b.normalMap.channel),displacementMapUv:de&&p(b.displacementMap.channel),emissiveMapUv:Je&&p(b.emissiveMap.channel),metalnessMapUv:ye&&p(b.metalnessMap.channel),roughnessMapUv:Fe&&p(b.roughnessMap.channel),anisotropyMapUv:at&&p(b.anisotropyMap.channel),clearcoatMapUv:Et&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&p(b.sheenRoughnessMap.channel),specularMapUv:Ut&&p(b.specularMap.channel),specularColorMapUv:jt&&p(b.specularColorMap.channel),specularIntensityMapUv:ne&&p(b.specularIntensityMap.channel),transmissionMapUv:ue&&p(b.transmissionMap.channel),thicknessMapUv:W&&p(b.thicknessMap.channel),alphaMapUv:ht&&p(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ee||H),vertexNormals:!!B.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!B.attributes.uv&&(It||ht),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||B.attributes.normal===void 0&&ee===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&Se.getTransfer(b.map.colorSpace)===Le,decodeVideoTextureEmissive:Je&&b.emissiveMap.isVideoTexture===!0&&Se.getTransfer(b.emissiveMap.colorSpace)===Le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Kn,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&b.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function y(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)T.push(N),T.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(g(T,b),P(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function g(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numSunLights),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numSunLightShadows),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function P(b,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function F(b){let T=x[b.type],N;if(T){let z=Li[T];N=Bp.clone(z.uniforms)}else N=b.uniforms;return N}function w(b,T){let N=m.get(T);return N!==void 0?++N.usedTimes:(N=new YM(n,T,b,s),l.push(N),m.set(T,N)),N}function R(b){if(--b.usedTimes===0){let T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),m.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function D(){a.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:F,acquireProgram:w,releaseProgram:R,releaseShaderCache:E,programs:l,dispose:D}}function KM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function rm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function om(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d){let x=0;return d.isInstancedMesh&&(x+=2),d.isSkinnedMesh&&(x+=1),x}function a(d,x,p,M,y,g){let P=n[t];return P===void 0?(P={id:d.id,object:d,geometry:x,material:p,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:y,group:g},n[t]=P):(P.id=d.id,P.object=d,P.geometry=x,P.material=p,P.materialVariant=o(d),P.groupOrder=M,P.renderOrder=d.renderOrder,P.z=y,P.group=g),t++,P}function c(d,x,p,M,y,g,P){P.reversedDepth===!0&&(y=-y);let F=a(d,x,p,M,y,g);p.transmission>0?i.push(F):p.transparent===!0?s.push(F):e.push(F)}function l(d,x,p,M,y,g){let P=a(d,x,p,M,y,g);p.transmission>0?i.unshift(P):p.transparent===!0?s.unshift(P):e.unshift(P)}function m(d,x){e.length>1&&e.sort(d||jM),i.length>1&&i.sort(x||rm),s.length>1&&s.sort(x||rm)}function f(){for(let d=t,x=n.length;d<x;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:m}}function QM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new om,n.set(i,[o])):s>=r.length?(o=new om,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function tb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new le};break;case"SpotLight":e={position:new j,direction:new j,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function eb(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var nb=0;function ib(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sb(n){let t=new tb,e=eb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);let s=new j,r=new qe,o=new qe;function a(l){let m=0,f=0,d=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let x=0,p=0,M=0,y=0,g=0,P=0,F=0,w=0,R=0,E=0,D=0,b=0,T=0,N=0;l.sort(ib);for(let J=0,Q=l.length;J<Q;J++){let O=l[J],B=O.color,q=O.intensity,K=O.distance,rt=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ys?rt=O.shadow.map.texture:rt=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)m+=B.r*q,f+=B.g*q,d+=B.b*q;else if(O.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(O.sh.coefficients[$],q);N++}else if(O.isSunLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[p]=ot,i.sunShadowMap[p]=rt;let wt=et.getViewportCount();for(let Ct=0;Ct<wt;Ct++)i.sunShadowMatrix[M+Ct]=et.getMatrix(Ct),i.sunShadowCascade[M+Ct]=et._cascadeData[Ct];M+=wt,p++}i.sun[x]=$,x++}else if(O.isDirectionalLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,i.directionalShadow[y]=ot,i.directionalShadowMap[y]=rt,i.directionalShadowMatrix[y]=O.shadow.matrix,R++}i.directional[y]=$,y++}else if(O.isSpotLight){let $=t.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(B).multiplyScalar(q),$.distance=K,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,i.spot[P]=$;let et=O.shadow;if(O.map&&(i.spotLightMap[b]=O.map,b++,et.updateMatrices(O),O.castShadow&&T++),i.spotLightMatrix[P]=et.matrix,O.castShadow){let ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,i.spotShadow[P]=ot,i.spotShadowMap[P]=rt,D++}P++}else if(O.isRectAreaLight){let $=t.get(O);$.color.copy(B).multiplyScalar(q),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),i.rectArea[F]=$,F++}else if(O.isPointLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),$.distance=O.distance,$.decay=O.decay,O.castShadow){let et=O.shadow,ot=e.get(O);ot.shadowIntensity=et.intensity,ot.shadowBias=et.bias,ot.shadowNormalBias=et.normalBias,ot.shadowRadius=et.radius,ot.shadowMapSize=et.mapSize,ot.shadowCameraNear=et.camera.near,ot.shadowCameraFar=et.camera.far,i.pointShadow[g]=ot,i.pointShadowMap[g]=rt,i.pointShadowMatrix[g]=O.shadow.matrix,E++}i.point[g]=$,g++}else if(O.isHemisphereLight){let $=t.get(O);$.skyColor.copy(O.color).multiplyScalar(q),$.groundColor.copy(O.groundColor).multiplyScalar(q),i.hemi[w]=$,w++}}F>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=f,i.ambient[2]=d;let z=i.hash;(z.sunLength!==x||z.directionalLength!==y||z.pointLength!==g||z.spotLength!==P||z.rectAreaLength!==F||z.hemiLength!==w||z.numSunShadows!==p||z.numDirectionalShadows!==R||z.numPointShadows!==E||z.numSpotShadows!==D||z.numSpotMaps!==b||z.numLightProbes!==N)&&(i.sun.length=x,i.directional.length=y,i.spot.length=P,i.rectArea.length=F,i.point.length=g,i.hemi.length=w,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=N,z.sunLength=x,z.directionalLength=y,z.pointLength=g,z.spotLength=P,z.rectAreaLength=F,z.hemiLength=w,z.numSunShadows=p,z.numDirectionalShadows=R,z.numPointShadows=E,z.numSpotShadows=D,z.numSpotMaps=b,z.numLightProbes=N,i.version=nb++)}function c(l,m){let f=0,d=0,x=0,p=0,M=0,y=0,g=m.matrixWorldInverse;for(let P=0,F=l.length;P<F;P++){let w=l[P];if(w.isSunLight){let R=i.sun[f];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(g),f++}else if(w.isDirectionalLight){let R=i.directional[d];R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),d++}else if(w.isSpotLight){let R=i.spot[p];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),p++}else if(w.isRectAreaLight){let R=i.rectArea[M];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){let R=i.point[x];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(g),x++}else if(w.isHemisphereLight){let R=i.hemi[y];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:i}}function am(n){let t=new sb(n),e=[],i=[],s=[];function r(d){f.camera=d,e.length=0,i.length=0,s.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function m(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:m,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function rb(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new am(n),t.set(s,[a])):r>=o.length?(a=new am(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
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
}`,lb=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],cb=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],lm=new qe,Po=new j,_u=new j;function hb(n,t,e){let i=new uo,s=new _e,r=new _e,o=new Ze,a=new il,c=new sl,l={},m=e.maxTextureSize,f={[ps]:In,[In]:ps,[Kn]:Kn},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),x=d.clone();x.defines.HORIZONTAL_PASS=1;let p=new ln;p.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new De(p,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let g=this.type;this.render=function(E,D,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;this.type===np&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mo);let T=n.getRenderTarget(),N=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Ii),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let Q=g!==this.type;Q&&D.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(B=>B.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,B=E.length;O<B;O++){let q=E[O],K=q.shadow;if(K===void 0){oe("WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let rt=K.getFrameExtents();s.multiply(rt),r.copy(K.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/rt.x),s.x=r.x*rt.x,K.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/rt.y),s.y=r.y*rt.y,K.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=$,K.map===null||Q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===gr){if(q.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ln(s.x,s.y,{format:ys,type:pi,minFilter:an,magFilter:an,generateMipmaps:!1}),K.map.texture.name=q.name+".shadowMap",K.map.depthTexture=new hs(s.x,s.y,di),K.map.depthTexture.name=q.name+".shadowMapDepth",K.map.depthTexture.format=Ei,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=dn,K.map.depthTexture.magFilter=dn}else q.isPointLight?(K.map=new lc(s.x),K.map.depthTexture=new el(s.x,fi)):(K.map=new Ln(s.x,s.y),K.map.depthTexture=new hs(s.x,s.y,fi)),K.map.depthTexture.name=q.name+".shadowMap",K.map.depthTexture.format=Ei,this.type===Mo?(K.map.depthTexture.compareFunction=$?sc:ic,K.map.depthTexture.minFilter=an,K.map.depthTexture.magFilter=an):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=dn,K.map.depthTexture.magFilter=dn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let et=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();q.isPointLight!==!0&&K.updateMatrices(q,b);for(let ot=0;ot<et;ot++){let wt=K.getCamera(ot);if(q.isPointLight){let Ct=K.camera,Nt=K.matrix,_t=q.distance||Ct.far;_t!==Ct.far&&(Ct.far=_t,Ct.updateProjectionMatrix()),Po.setFromMatrixPosition(q.matrixWorld),Ct.position.copy(Po),_u.copy(Ct.position),_u.add(lb[ot]),Ct.up.copy(cb[ot]),Ct.lookAt(_u),Ct.updateMatrixWorld(),Nt.makeTranslation(-Po.x,-Po.y,-Po.z),lm.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),K._frustum.setFromProjectionMatrix(lm,Ct.coordinateSystem,Ct.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,ot),n.clear();else{ot===0&&(n.setRenderTarget(K.map),n.clear());let Ct=K.getViewport(ot);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),J.viewport(o)}i=K.getFrustum(ot),w(D,b,wt,q,this.type)}K.isPointLightShadow!==!0&&this.type===gr&&P(K,b),K.needsUpdate=!1}g=this.type,y.needsUpdate=!1,n.setRenderTarget(T,N,z)};function P(E,D){let b=t.update(M);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,x.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,x.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ln(s.x,s.y,{format:ys,type:pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,b,d,M,null),x.uniforms.shadow_pass.value=E.mapPass.texture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,b,x,M,null)}function F(E,D,b,T){let N=null,z=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0)N=z;else if(N=b.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let J=N.uuid,Q=D.uuid,O=l[J];O===void 0&&(O={},l[J]=O);let B=O[Q];B===void 0&&(B=N.clone(),O[Q]=B,D.addEventListener("dispose",R)),N=B}if(N.visible=D.visible,N.wireframe=D.wireframe,T===gr?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:f[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let J=n.properties.get(N);J.light=b}return N}function w(E,D,b,T,N){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===gr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let Q=t.update(E),O=E.material;if(Array.isArray(O)){let B=Q.groups;for(let q=0,K=B.length;q<K;q++){let rt=B[q],$=O[rt.materialIndex];if($&&$.visible){let et=F(E,$,T,N);E.onBeforeShadow(n,E,D,b,Q,et,rt),n.renderBufferDirect(b,null,Q,et,E,rt),E.onAfterShadow(n,E,D,b,Q,et,rt)}}}else if(O.visible){let B=F(E,O,T,N);E.onBeforeShadow(n,E,D,b,Q,B,null),n.renderBufferDirect(b,null,Q,B,E,null),E.onAfterShadow(n,E,D,b,Q,B,null)}}let J=E.children;for(let Q=0,O=J.length;Q<O;Q++)w(J[Q],D,b,T,N)}function R(E){E.target.removeEventListener("dispose",R);for(let b in l){let T=l[b],N=E.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function ub(n,t){function e(){let W=!1,At=new Ze,ht=null,Tt=new Ze(0,0,0,0);return{setMask:function(Lt){ht!==Lt&&!W&&(n.colorMask(Lt,Lt,Lt,Lt),ht=Lt)},setLocked:function(Lt){W=Lt},setClear:function(Lt,pt,Qt,$t,Oe){Oe===!0&&(Lt*=$t,pt*=$t,Qt*=$t),At.set(Lt,pt,Qt,$t),Tt.equals(At)===!1&&(n.clearColor(Lt,pt,Qt,$t),Tt.copy(At))},reset:function(){W=!1,ht=null,Tt.set(-1,0,0,0)}}}function i(){let W=!1,At=!1,ht=null,Tt=null,Lt=null;return{setReversed:function(pt){if(At!==pt){let Qt=t.get("EXT_clip_control");pt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),At=pt;let $t=Lt;Lt=null,this.setClear($t)}},getReversed:function(){return At},setTest:function(pt){pt?Y(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(pt){ht!==pt&&!W&&(n.depthMask(pt),ht=pt)},setFunc:function(pt){if(At&&(pt=Fp[pt]),Tt!==pt){switch(pt){case Fa:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case Ha:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Tt=pt}},setLocked:function(pt){W=pt},setClear:function(pt){Lt!==pt&&(Lt=pt,At&&(pt=1-pt),n.clearDepth(pt))},reset:function(){W=!1,ht=null,Tt=null,Lt=null,At=!1}}}function s(){let W=!1,At=null,ht=null,Tt=null,Lt=null,pt=null,Qt=null,$t=null,Oe=null;return{setTest:function(be){W||(be?Y(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(be){At!==be&&!W&&(n.stencilMask(be),At=be)},setFunc:function(be,An,Un){(ht!==be||Tt!==An||Lt!==Un)&&(n.stencilFunc(be,An,Un),ht=be,Tt=An,Lt=Un)},setOp:function(be,An,Un){(pt!==be||Qt!==An||$t!==Un)&&(n.stencilOp(be,An,Un),pt=be,Qt=An,$t=Un)},setLocked:function(be){W=be},setClear:function(be){Oe!==be&&(n.clearStencil(be),Oe=be)},reset:function(){W=!1,At=null,ht=null,Tt=null,Lt=null,pt=null,Qt=null,$t=null,Oe=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,m={},f={},d={},x=new WeakMap,p=[],M=null,y=!1,g=null,P=null,F=null,w=null,R=null,E=null,D=null,b=new le(0,0,0),T=0,N=!1,z=null,J=null,Q=null,O=null,B=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,rt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),K=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=rt>=2);let et=null,ot={},wt=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Nt=new Ze().fromArray(wt),_t=new Ze().fromArray(Ct);function Rt(W,At,ht,Tt){let Lt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(W,pt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qt=0;Qt<ht;Qt++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,Tt,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(At+Qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return pt}let G={};G[n.TEXTURE_2D]=Rt(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=Rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=Rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=Rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(hr),Ht(!1),ee(Nh),Y(n.CULL_FACE),ft(Ii);function Y(W){m[W]!==!0&&(n.enable(W),m[W]=!0)}function gt(W){m[W]!==!1&&(n.disable(W),m[W]=!1)}function xt(W,At){return d[W]!==At?(n.bindFramebuffer(W,At),d[W]=At,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=At),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=At),!0):!1}function bt(W,At){let ht=p,Tt=!1;if(W){ht=x.get(At),ht===void 0&&(ht=[],x.set(At,ht));let Lt=W.textures;if(ht.length!==Lt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Qt=Lt.length;pt<Qt;pt++)ht[pt]=n.COLOR_ATTACHMENT0+pt;ht.length=Lt.length,Tt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,Tt=!0);Tt&&n.drawBuffers(ht)}function It(W){return M!==W?(n.useProgram(W),M=W,!0):!1}let se={[Ds]:n.FUNC_ADD,[sp]:n.FUNC_SUBTRACT,[rp]:n.FUNC_REVERSE_SUBTRACT};se[op]=n.MIN,se[ap]=n.MAX;let Wt={[lp]:n.ZERO,[cp]:n.ONE,[hp]:n.SRC_COLOR,[zh]:n.SRC_ALPHA,[gp]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[fp]:n.DST_ALPHA,[up]:n.ONE_MINUS_SRC_COLOR,[Bh]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[dp]:n.ONE_MINUS_DST_ALPHA,[xp]:n.CONSTANT_COLOR,[yp]:n.ONE_MINUS_CONSTANT_COLOR,[_p]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(W,At,ht,Tt,Lt,pt,Qt,$t,Oe,be){if(W===Ii){y===!0&&(gt(n.BLEND),y=!1);return}if(y===!1&&(Y(n.BLEND),y=!0),W!==ip){if(W!==g||be!==N){if((P!==Ds||R!==Ds)&&(n.blendEquation(n.FUNC_ADD),P=Ds,R=Ds),be)switch(W){case xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uh:n.blendFunc(n.ONE,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ae("WebGLState: Invalid blending: ",W);break}else switch(W){case xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fh:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",W);break}F=null,w=null,E=null,D=null,b.set(0,0,0),T=0,g=W,N=be}return}Lt=Lt||At,pt=pt||ht,Qt=Qt||Tt,(At!==P||Lt!==R)&&(n.blendEquationSeparate(se[At],se[Lt]),P=At,R=Lt),(ht!==F||Tt!==w||pt!==E||Qt!==D)&&(n.blendFuncSeparate(Wt[ht],Wt[Tt],Wt[pt],Wt[Qt]),F=ht,w=Tt,E=pt,D=Qt),($t.equals(b)===!1||Oe!==T)&&(n.blendColor($t.r,$t.g,$t.b,Oe),b.copy($t),T=Oe),g=W,N=!1}function he(W,At){W.side===Kn?gt(n.CULL_FACE):Y(n.CULL_FACE);let ht=W.side===In;At&&(ht=!ht),Ht(ht),W.blending===xr&&W.transparent===!1?ft(Ii):ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Tt=W.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Je(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(W){z!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),z=W)}function ee(W){W!==tp?(Y(n.CULL_FACE),W!==J&&(W===Nh?n.cullFace(n.BACK):W===ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),J=W}function de(W){W!==Q&&(K&&n.lineWidth(W),Q=W)}function Je(W,At,ht){W?(Y(n.POLYGON_OFFSET_FILL),(O!==At||B!==ht)&&(O=At,B=ht,o.getReversed()&&(At=-At),n.polygonOffset(At,ht))):gt(n.POLYGON_OFFSET_FILL)}function ye(W){W?Y(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Fe(W){W===void 0&&(W=n.TEXTURE0+q-1),et!==W&&(n.activeTexture(W),et=W)}function H(W,At,ht){ht===void 0&&(et===null?ht=n.TEXTURE0+q-1:ht=et);let Tt=ot[ht];Tt===void 0&&(Tt={type:void 0,texture:void 0},ot[ht]=Tt),(Tt.type!==W||Tt.texture!==At)&&(et!==ht&&(n.activeTexture(ht),et=ht),n.bindTexture(W,At||G[W]),Tt.type=W,Tt.texture=At)}function ke(){let W=ot[et];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ve(){try{n.compressedTexImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function v(){try{n.texSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function Z(){try{n.texSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function nt(){try{n.compressedTexSubImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function at(){try{n.compressedTexSubImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function Et(){try{n.texStorage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function Dt(){try{n.texStorage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function ct(){try{n.texImage2D(...arguments)}catch(W){ae("WebGLState:",W)}}function dt(){try{n.texImage3D(...arguments)}catch(W){ae("WebGLState:",W)}}function Pt(W){return f[W]!==void 0?f[W]:n.getParameter(W)}function Yt(W,At){f[W]!==At&&(n.pixelStorei(W,At),f[W]=At)}function Ft(W){Nt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Nt.copy(W))}function Ut(W){_t.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),_t.copy(W))}function jt(W,At){let ht=l.get(At);ht===void 0&&(ht=new WeakMap,l.set(At,ht));let Tt=ht.get(W);Tt===void 0&&(Tt=n.getUniformBlockIndex(At,W.name),ht.set(W,Tt))}function ne(W,At){let Tt=l.get(At).get(W);c.get(At)!==Tt&&(n.uniformBlockBinding(At,Tt,W.__bindingPointIndex),c.set(At,Tt))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},f={},et=null,ot={},d={},x=new WeakMap,p=[],M=null,y=!1,g=null,P=null,F=null,w=null,R=null,E=null,D=null,b=new le(0,0,0),T=0,N=!1,z=null,J=null,Q=null,O=null,B=null,Nt.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:gt,bindFramebuffer:xt,drawBuffers:bt,useProgram:It,setBlending:ft,setMaterial:he,setFlipSided:Ht,setCullFace:ee,setLineWidth:de,setPolygonOffset:Je,setScissorTest:ye,activeTexture:Fe,bindTexture:H,unbindTexture:ke,compressedTexImage2D:ve,compressedTexImage3D:U,texImage2D:ct,texImage3D:dt,pixelStorei:Yt,getParameter:Pt,updateUBOMapping:jt,uniformBlockBinding:ne,texStorage2D:Et,texStorage3D:Dt,texSubImage2D:v,texSubImage3D:Z,compressedTexSubImage2D:nt,compressedTexSubImage3D:at,scissor:Ft,viewport:Ut,reset:ue}}function fb(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _e,m=new WeakMap,f=new Set,d,x=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,v){return p?new OffscreenCanvas(U,v):io("canvas")}function y(U,v,Z){let nt=1,at=ve(U);if((at.width>Z||at.height>Z)&&(nt=Z/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Et=Math.floor(nt*at.width),Dt=Math.floor(nt*at.height);d===void 0&&(d=M(Et,Dt));let ct=v?M(Et,Dt):d;return ct.width=Et,ct.height=Dt,ct.getContext("2d").drawImage(U,0,0,Et,Dt),oe("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Et+"x"+Dt+")."),ct}else return"data"in U&&oe("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),U;return U}function g(U){return U.generateMipmaps}function P(U){n.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(U,v,Z,nt,at,Et=!1){if(U!==null){if(n[U]!==void 0)return n[U];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Dt;nt&&(Dt=t.get("EXT_texture_norm16"),Dt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=v;if(v===n.RED&&(Z===n.FLOAT&&(ct=n.R32F),Z===n.HALF_FLOAT&&(ct=n.R16F),Z===n.UNSIGNED_BYTE&&(ct=n.R8),Z===n.UNSIGNED_SHORT&&Dt&&(ct=Dt.R16_EXT),Z===n.SHORT&&Dt&&(ct=Dt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ct=n.R8UI),Z===n.UNSIGNED_SHORT&&(ct=n.R16UI),Z===n.UNSIGNED_INT&&(ct=n.R32UI),Z===n.BYTE&&(ct=n.R8I),Z===n.SHORT&&(ct=n.R16I),Z===n.INT&&(ct=n.R32I)),v===n.RG&&(Z===n.FLOAT&&(ct=n.RG32F),Z===n.HALF_FLOAT&&(ct=n.RG16F),Z===n.UNSIGNED_BYTE&&(ct=n.RG8),Z===n.UNSIGNED_SHORT&&Dt&&(ct=Dt.RG16_EXT),Z===n.SHORT&&Dt&&(ct=Dt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ct=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ct=n.RG16UI),Z===n.UNSIGNED_INT&&(ct=n.RG32UI),Z===n.BYTE&&(ct=n.RG8I),Z===n.SHORT&&(ct=n.RG16I),Z===n.INT&&(ct=n.RG32I)),v===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ct=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(ct=n.RGB16UI),Z===n.UNSIGNED_INT&&(ct=n.RGB32UI),Z===n.BYTE&&(ct=n.RGB8I),Z===n.SHORT&&(ct=n.RGB16I),Z===n.INT&&(ct=n.RGB32I)),v===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ct=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(ct=n.RGBA16UI),Z===n.UNSIGNED_INT&&(ct=n.RGBA32UI),Z===n.BYTE&&(ct=n.RGBA8I),Z===n.SHORT&&(ct=n.RGBA16I),Z===n.INT&&(ct=n.RGBA32I)),v===n.RGB&&(Z===n.UNSIGNED_SHORT&&Dt&&(ct=Dt.RGB16_EXT),Z===n.SHORT&&Dt&&(ct=Dt.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(ct=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(ct=n.R11F_G11F_B10F)),v===n.RGBA){let dt=Et?eo:Se.getTransfer(at);Z===n.FLOAT&&(ct=n.RGBA32F),Z===n.HALF_FLOAT&&(ct=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ct=dt===Le?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&Dt&&(ct=Dt.RGBA16_EXT),Z===n.SHORT&&Dt&&(ct=Dt.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ct=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ct=n.RGB5_A1)}return(ct===n.R16F||ct===n.R32F||ct===n.RG16F||ct===n.RG32F||ct===n.RGBA16F||ct===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function R(U,v){let Z;return U?v===null||v===fi||v===_r?Z=n.DEPTH24_STENCIL8:v===di?Z=n.DEPTH32F_STENCIL8:v===yr&&(Z=n.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===_r?Z=n.DEPTH_COMPONENT24:v===di?Z=n.DEPTH_COMPONENT32F:v===yr&&(Z=n.DEPTH_COMPONENT16),Z}function E(U,v){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==dn&&U.minFilter!==an?Math.log2(Math.max(v.width,v.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?v.mipmaps.length:1}function D(U){let v=U.target;v.removeEventListener("dispose",D),T(v),v.isVideoTexture&&m.delete(v),v.isHTMLTexture&&f.delete(v)}function b(U){let v=U.target;v.removeEventListener("dispose",b),z(v)}function T(U){let v=i.get(U);if(v.__webglInit===void 0)return;let Z=U.source,nt=x.get(Z);if(nt){let at=nt[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&N(U),Object.keys(nt).length===0&&x.delete(Z)}i.remove(U)}function N(U){let v=i.get(U);n.deleteTexture(v.__webglTexture);let Z=U.source,nt=x.get(Z);delete nt[v.__cacheKey],o.memory.textures--}function z(U){let v=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let at=0;at<v.__webglFramebuffer[nt].length;at++)n.deleteFramebuffer(v.__webglFramebuffer[nt][at]);else n.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)n.deleteFramebuffer(v.__webglFramebuffer[nt]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=U.textures;for(let nt=0,at=Z.length;nt<at;nt++){let Et=i.get(Z[nt]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),o.memory.textures--),i.remove(Z[nt])}i.remove(U)}let J=0;function Q(){J=0}function O(){return J}function B(U){J=U}function q(){let U=J;return U>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,U}function K(U){let v=[];return v.push(U.wrapS),v.push(U.wrapT),v.push(U.wrapR||0),v.push(U.magFilter),v.push(U.minFilter),v.push(U.anisotropy),v.push(U.internalFormat),v.push(U.format),v.push(U.type),v.push(U.generateMipmaps),v.push(U.premultiplyAlpha),v.push(U.flipY),v.push(U.unpackAlignment),v.push(U.colorSpace),v.join()}function rt(U,v){let Z=i.get(U);if(U.isVideoTexture&&H(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){let nt=U.image;if(nt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(Z,U,v);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+v)}function $(U,v){let Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){gt(Z,U,v);return}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+v)}function et(U,v){let Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){gt(Z,U,v);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+v)}function ot(U,v){let Z=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Z.__version!==U.version){xt(Z,U,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+v)}let wt={[Ga]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[Wa]:n.MIRRORED_REPEAT},Ct={[dn]:n.NEAREST,[Sp]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[vl]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},Nt={[Tp]:n.NEVER,[Lp]:n.ALWAYS,[Cp]:n.LESS,[ic]:n.LEQUAL,[Rp]:n.EQUAL,[sc]:n.GEQUAL,[Ip]:n.GREATER,[Pp]:n.NOTEQUAL};function _t(U,v){if(v.type===di&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===an||v.magFilter===vl||v.magFilter===So||v.magFilter===gs||v.minFilter===an||v.minFilter===vl||v.minFilter===So||v.minFilter===gs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,wt[v.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,wt[v.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,wt[v.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Ct[v.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,Nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==So&&v.minFilter!==gs||v.type===di&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Rt(U,v){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,v.addEventListener("dispose",D));let nt=v.source,at=x.get(nt);at===void 0&&(at={},x.set(nt,at));let Et=K(v);if(Et!==U.__cacheKey){at[Et]===void 0&&(at[Et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),at[Et].usedTimes++;let Dt=at[U.__cacheKey];Dt!==void 0&&(at[U.__cacheKey].usedTimes--,Dt.usedTimes===0&&N(v)),U.__cacheKey=Et,U.__webglTexture=at[Et].texture}return Z}function G(U,v,Z){return Math.floor(Math.floor(U/Z)/v)}function Y(U,v,Z,nt){let Et=U.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,Z,nt,v.data);else{Et.sort((Yt,Ft)=>Yt.start-Ft.start);let Dt=0;for(let Yt=1;Yt<Et.length;Yt++){let Ft=Et[Dt],Ut=Et[Yt],jt=Ft.start+Ft.count,ne=G(Ut.start,v.width,4),ue=G(Ft.start,v.width,4);Ut.start<=jt+1&&ne===ue&&G(Ut.start+Ut.count-1,v.width,4)===ne?Ft.count=Math.max(Ft.count,Ut.start+Ut.count-Ft.start):(++Dt,Et[Dt]=Ut)}Et.length=Dt+1;let ct=e.getParameter(n.UNPACK_ROW_LENGTH),dt=e.getParameter(n.UNPACK_SKIP_PIXELS),Pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Yt=0,Ft=Et.length;Yt<Ft;Yt++){let Ut=Et[Yt],jt=Math.floor(Ut.start/4),ne=Math.ceil(Ut.count/4),ue=jt%v.width,W=Math.floor(jt/v.width),At=ne,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),e.pixelStorei(n.UNPACK_SKIP_ROWS,W),e.texSubImage2D(n.TEXTURE_2D,0,ue,W,At,ht,Z,nt,v.data)}U.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ct),e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Pt)}}function gt(U,v,Z){let nt=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=n.TEXTURE_3D);let at=Rt(U,v),Et=v.source;e.bindTexture(nt,U.__webglTexture,n.TEXTURE0+Z);let Dt=i.get(Et);if(Et.version!==Dt.__version||at===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ht=Se.getPrimaries(Se.workingColorSpace),Tt=v.colorSpace===Wi?null:Se.getPrimaries(v.colorSpace),Lt=v.colorSpace===Wi||ht===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let dt=y(v.image,!1,s.maxTextureSize);dt=ke(v,dt);let Pt=r.convert(v.format,v.colorSpace),Yt=r.convert(v.type),Ft=w(v.internalFormat,Pt,Yt,v.normalized,v.colorSpace,v.isVideoTexture);_t(nt,v);let Ut,jt=v.mipmaps,ne=v.isVideoTexture!==!0,ue=Dt.__version===void 0||at===!0,W=Et.dataReady,At=E(v,dt);if(v.isDepthTexture)Ft=R(v.format===xs,v.type),ue&&(ne?e.texStorage2D(n.TEXTURE_2D,1,Ft,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Pt,Yt,null));else if(v.isDataTexture)if(jt.length>0){ne&&ue&&e.texStorage2D(n.TEXTURE_2D,At,Ft,jt[0].width,jt[0].height);for(let ht=0,Tt=jt.length;ht<Tt;ht++)Ut=jt[ht],ne?W&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Ut.width,Ut.height,Pt,Yt,Ut.data):e.texImage2D(n.TEXTURE_2D,ht,Ft,Ut.width,Ut.height,0,Pt,Yt,Ut.data);v.generateMipmaps=!1}else ne?(ue&&e.texStorage2D(n.TEXTURE_2D,At,Ft,dt.width,dt.height),W&&Y(v,dt,Pt,Yt)):e.texImage2D(n.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Pt,Yt,dt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ne&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ft,jt[0].width,jt[0].height,dt.depth);for(let ht=0,Tt=jt.length;ht<Tt;ht++)if(Ut=jt[ht],v.format!==jn)if(Pt!==null)if(ne){if(W)if(v.layerUpdates.size>0){let Lt=lu(Ut.width,Ut.height,v.format,v.type);for(let pt of v.layerUpdates){let Qt=Ut.data.subarray(pt*Lt/Ut.data.BYTES_PER_ELEMENT,(pt+1)*Lt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,pt,Ut.width,Ut.height,1,Pt,Qt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Ut.width,Ut.height,dt.depth,Pt,Ut.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,Ft,Ut.width,Ut.height,dt.depth,0,Ut.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Ut.width,Ut.height,dt.depth,Pt,Yt,Ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,Ft,Ut.width,Ut.height,dt.depth,0,Pt,Yt,Ut.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ne&&ue&&e.texStorage2D(n.TEXTURE_2D,At,Ft,jt[0].width,jt[0].height);for(let ht=0,Tt=jt.length;ht<Tt;ht++)Ut=jt[ht],v.format!==jn?Pt!==null?ne?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Ut.width,Ut.height,Pt,Ut.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,Ft,Ut.width,Ut.height,0,Ut.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?W&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Ut.width,Ut.height,Pt,Yt,Ut.data):e.texImage2D(n.TEXTURE_2D,ht,Ft,Ut.width,Ut.height,0,Pt,Yt,Ut.data)}else if(v.isDataArrayTexture)if(ne){if(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,Ft,dt.width,dt.height,dt.depth),W)if(v.layerUpdates.size>0){let ht=lu(dt.width,dt.height,v.format,v.type);for(let Tt of v.layerUpdates){let Lt=dt.data.subarray(Tt*ht/dt.data.BYTES_PER_ELEMENT,(Tt+1)*ht/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Tt,dt.width,dt.height,1,Pt,Yt,Lt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Yt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,dt.width,dt.height,dt.depth,0,Pt,Yt,dt.data);else if(v.isData3DTexture)ne?(ue&&e.texStorage3D(n.TEXTURE_3D,At,Ft,dt.width,dt.height,dt.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Yt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,dt.width,dt.height,dt.depth,0,Pt,Yt,dt.data);else if(v.isFramebufferTexture){if(ue)if(ne)e.texStorage2D(n.TEXTURE_2D,At,Ft,dt.width,dt.height);else{let ht=dt.width,Tt=dt.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,Ft,ht,Tt,0,Pt,Yt,null),ht>>=1,Tt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),dt.parentNode!==ht){ht.appendChild(dt),f.add(v),ht.onpaint=Tt=>{let Lt=Tt.changedElements;for(let pt of f)Lt.includes(pt.image)&&(pt.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,dt);else{let Lt=n.RGBA,pt=n.RGBA,Qt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Lt,pt,Qt,dt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(jt.length>0){if(ne&&ue){let ht=ve(jt[0]);e.texStorage2D(n.TEXTURE_2D,At,Ft,ht.width,ht.height)}for(let ht=0,Tt=jt.length;ht<Tt;ht++)Ut=jt[ht],ne?W&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Pt,Yt,Ut):e.texImage2D(n.TEXTURE_2D,ht,Ft,Pt,Yt,Ut);v.generateMipmaps=!1}else if(ne){if(ue){let ht=ve(dt);e.texStorage2D(n.TEXTURE_2D,At,Ft,ht.width,ht.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Yt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Ft,Pt,Yt,dt);g(v)&&P(nt),Dt.__version=Et.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function xt(U,v,Z){if(v.image.length!==6)return;let nt=Rt(U,v),at=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+Z);let Et=i.get(at);if(at.version!==Et.__version||nt===!0){e.activeTexture(n.TEXTURE0+Z);let Dt=Se.getPrimaries(Se.workingColorSpace),ct=v.colorSpace===Wi?null:Se.getPrimaries(v.colorSpace),dt=v.colorSpace===Wi||Dt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Pt=v.isCompressedTexture||v.image[0].isCompressedTexture,Yt=v.image[0]&&v.image[0].isDataTexture,Ft=[];for(let pt=0;pt<6;pt++)!Pt&&!Yt?Ft[pt]=y(v.image[pt],!0,s.maxCubemapSize):Ft[pt]=Yt?v.image[pt].image:v.image[pt],Ft[pt]=ke(v,Ft[pt]);let Ut=Ft[0],jt=r.convert(v.format,v.colorSpace),ne=r.convert(v.type),ue=w(v.internalFormat,jt,ne,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,At=Et.__version===void 0||nt===!0,ht=at.dataReady,Tt=E(v,Ut);_t(n.TEXTURE_CUBE_MAP,v);let Lt;if(Pt){W&&At&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,ue,Ut.width,Ut.height);for(let pt=0;pt<6;pt++){Lt=Ft[pt].mipmaps;for(let Qt=0;Qt<Lt.length;Qt++){let $t=Lt[Qt];v.format!==jn?jt!==null?W?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,0,0,$t.width,$t.height,jt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,ue,$t.width,$t.height,0,$t.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,0,0,$t.width,$t.height,jt,ne,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,ue,$t.width,$t.height,0,jt,ne,$t.data)}}}else{if(Lt=v.mipmaps,W&&At){Lt.length>0&&Tt++;let pt=ve(Ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,ue,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Yt){W?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ft[pt].width,Ft[pt].height,jt,ne,Ft[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,Ft[pt].width,Ft[pt].height,0,jt,ne,Ft[pt].data);for(let Qt=0;Qt<Lt.length;Qt++){let Oe=Lt[Qt].image[pt].image;W?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,0,0,Oe.width,Oe.height,jt,ne,Oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,ue,Oe.width,Oe.height,0,jt,ne,Oe.data)}}else{W?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,jt,ne,Ft[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ue,jt,ne,Ft[pt]);for(let Qt=0;Qt<Lt.length;Qt++){let $t=Lt[Qt];W?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,0,0,jt,ne,$t.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,ue,jt,ne,$t.image[pt])}}}g(v)&&P(n.TEXTURE_CUBE_MAP),Et.__version=at.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function bt(U,v,Z,nt,at,Et){let Dt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),dt=w(Z.internalFormat,Dt,ct,Z.normalized,Z.colorSpace),Pt=i.get(v),Yt=i.get(Z);if(Yt.__renderTarget=v,!Pt.__hasExternalTextures){let Ft=Math.max(1,v.width>>Et),Ut=Math.max(1,v.height>>Et);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,Et,dt,Ft,Ut,v.depth,0,Dt,ct,null):e.texImage2D(at,Et,dt,Ft,Ut,0,Dt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,U),Fe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,at,Yt.__webglTexture,0,ye(v)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,at,Yt.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(U,v,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,U),v.depthBuffer){let nt=v.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,Et=R(v.stencilBuffer,at),Dt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Fe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(v),Et,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(v),Et,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Et,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,U)}else{let nt=v.textures;for(let at=0;at<nt.length;at++){let Et=nt[at],Dt=r.convert(Et.format,Et.colorSpace),ct=r.convert(Et.type),dt=w(Et.internalFormat,Dt,ct,Et.normalized,Et.colorSpace);Fe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(v),dt,v.width,v.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(v),dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,dt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(U,v,Z){let nt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,U),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=i.get(v.depthTexture);if(at.__renderTarget=v,(!at.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt){if(at.__webglInit===void 0&&(at.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),at.__webglTexture===void 0){at.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v.depthTexture);let Pt=r.convert(v.depthTexture.format),Yt=r.convert(v.depthTexture.type),Ft;v.depthTexture.format===Ei?Ft=n.DEPTH_COMPONENT24:v.depthTexture.format===xs&&(Ft=n.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Ft,v.width,v.height,0,Pt,Yt,null)}}else rt(v.depthTexture,0);let Et=at.__webglTexture,Dt=ye(v),ct=nt?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,dt=v.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ei)Fe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,ct,Et,0,Dt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,ct,Et,0);else if(v.depthTexture.format===xs)Fe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,ct,Et,0,Dt):n.framebufferTexture2D(n.FRAMEBUFFER,dt,ct,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(U){let v=i.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==U.depthTexture){let nt=U.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),nt){let at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=nt}if(U.depthTexture&&!v.__autoAllocateDepthBuffer)if(Z)for(let nt=0;nt<6;nt++)se(v.__webglFramebuffer[nt],U,nt);else{let nt=U.texture.mipmaps;nt&&nt.length>0?se(v.__webglFramebuffer[0],U,0):se(v.__webglFramebuffer,U,0)}else if(Z){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]===void 0)v.__webglDepthbuffer[nt]=n.createRenderbuffer(),It(v.__webglDepthbuffer[nt],U,!1);else{let at=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=v.__webglDepthbuffer[nt];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Et)}}else{let nt=U.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),It(v.__webglDepthbuffer,U,!1);else{let at=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(U,v,Z){let nt=i.get(U);v!==void 0&&bt(nt.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Wt(U)}function he(U){let v=U.texture,Z=i.get(U),nt=i.get(v);U.addEventListener("dispose",b);let at=U.textures,Et=U.isWebGLCubeRenderTarget===!0,Dt=at.length>1;if(Dt||(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=v.version,o.memory.textures++),Et){Z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[ct]=[];for(let dt=0;dt<v.mipmaps.length;dt++)Z.__webglFramebuffer[ct][dt]=n.createFramebuffer()}else Z.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)Z.__webglFramebuffer[ct]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let ct=0,dt=at.length;ct<dt;ct++){let Pt=i.get(at[ct]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(U.samples>0&&Fe(U)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){let dt=at[ct];Z.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ct]);let Pt=r.convert(dt.format,dt.colorSpace),Yt=r.convert(dt.type),Ft=w(dt.internalFormat,Pt,Yt,dt.normalized,dt.colorSpace,U.isXRRenderTarget===!0),Ut=ye(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,Ft,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),It(Z.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)bt(Z.__webglFramebuffer[ct][dt],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else bt(Z.__webglFramebuffer[ct],U,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(v)&&P(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ct=0,dt=at.length;ct<dt;ct++){let Pt=at[ct],Yt=i.get(Pt),Ft=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ft=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ft,Yt.__webglTexture),_t(Ft,Pt),bt(Z.__webglFramebuffer,U,Pt,n.COLOR_ATTACHMENT0+ct,Ft,0),g(Pt)&&P(Ft)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ct=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,nt.__webglTexture),_t(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)bt(Z.__webglFramebuffer[dt],U,v,n.COLOR_ATTACHMENT0,ct,dt);else bt(Z.__webglFramebuffer,U,v,n.COLOR_ATTACHMENT0,ct,0);g(v)&&P(ct),e.unbindTexture()}U.depthBuffer&&Wt(U)}function Ht(U){let v=U.textures;for(let Z=0,nt=v.length;Z<nt;Z++){let at=v[Z];if(g(at)){let Et=F(U),Dt=i.get(at).__webglTexture;e.bindTexture(Et,Dt),P(Et),e.unbindTexture()}}}let ee=[],de=[];function Je(U){if(U.samples>0){if(Fe(U)===!1){let v=U.textures,Z=U.width,nt=U.height,at=n.COLOR_BUFFER_BIT,Et=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(U),ct=v.length>1;if(ct)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);let dt=U.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Pt]);let Yt=i.get(v[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,Z,nt,0,0,Z,nt,at,n.NEAREST),c===!0&&(ee.length=0,de.length=0,ee.push(n.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(ee.push(Et),de.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[Pt]);let Yt=i.get(v[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let v=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ye(U){return Math.min(s.maxSamples,U.samples)}function Fe(U){let v=i.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(U){let v=o.render.frame;m.get(U)!==v&&(m.set(U,v),U.update())}function ke(U,v){let Z=U.colorSpace,nt=U.format,at=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==to&&Z!==Wi&&(Se.getTransfer(Z)===Le?(nt!==jn||at!==Vn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",Z)),v}function ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.getTextureUnits=O,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=et,this.setTextureCube=ot,this.rebindTextures=ft,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function db(n,t){function e(i,s=Wi){let r,o=Se.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zh)return n.BYTE;if(i===Jh)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===Ml)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Qh)return n.ALPHA;if(i===tu)return n.RGB;if(i===jn)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===eu)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===ys)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===wo||i===Ao||i===Eo||i===To)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Cl||i===Rl||i===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Ll||i===Dl||i===Nl||i===Ul||i===Co||i===Fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Ll)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return r.COMPRESSED_R11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Co)return r.COMPRESSED_RG11_EAC;if(i===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===zl||i===Bl||i===kl||i===Vl||i===Hl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Zl||i===Jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$l)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===jl||i===Ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===ec||i===Ro||i===nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`,Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mn({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cu=class extends Ti{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,m=null,f=null,d=null,x=null,p=null,M=typeof XRWebGLBinding<"u",y=new Tu,g={},P=e.getContextAttributes(),F=null,w=null,R=[],E=[],D=new _e,b=null,T=null,N=new _n;N.viewport=new Ze;let z=new _n;z.viewport=new Ze;let J=[N,z],Q=new gl,O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=R[G];return Y===void 0&&(Y=new dr,R[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=R[G];return Y===void 0&&(Y=new dr,R[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=R[G];return Y===void 0&&(Y=new dr,R[G]=Y),Y.getHandSpace()};function q(G){let Y=E.indexOf(G.inputSource);if(Y===-1)return;let gt=R[Y];gt!==void 0&&(gt.update(G.inputSource,G.frame,l||o),gt.dispatchEvent({type:G.type,data:G.inputSource}))}function K(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",rt);for(let G=0;G<R.length;G++){let Y=E[G];Y!==null&&(E[G]=null,R[G].disconnect(Y))}O=null,B=null,y.reset();for(let G in g)delete g[G];if(t.setRenderTarget(F),x=null,d=null,f=null,s=null,w=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(D.width,D.height,!1),T!==null){let G=T.camera;G.fov=T.fov,G.zoom=T.zoom,G.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:x},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",rt),P.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,xt=null,bt=null;P.depth&&(bt=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=P.stencil?xs:Ei,xt=P.stencil?_r:fi);let It={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ln(d.textureWidth,d.textureHeight,{format:jn,type:Vn,depthTexture:new hs(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let gt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Ln(x.framebufferWidth,x.framebufferHeight,{format:jn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function rt(G){for(let Y=0;Y<G.removed.length;Y++){let gt=G.removed[Y],xt=E.indexOf(gt);xt>=0&&(E[xt]=null,R[xt].disconnect(gt))}for(let Y=0;Y<G.added.length;Y++){let gt=G.added[Y],xt=E.indexOf(gt);if(xt===-1){for(let It=0;It<R.length;It++)if(It>=E.length){E.push(gt),xt=It;break}else if(E[It]===null){E[It]=gt,xt=It;break}if(xt===-1)break}let bt=R[xt];bt&&bt.connect(gt)}}let $=new j,et=new j;function ot(G,Y,gt){$.setFromMatrixPosition(Y.matrixWorld),et.setFromMatrixPosition(gt.matrixWorld);let xt=$.distanceTo(et),bt=Y.projectionMatrix.elements,It=gt.projectionMatrix.elements,se=bt[14]/(bt[10]-1),Wt=bt[14]/(bt[10]+1),ft=(bt[9]+1)/bt[5],he=(bt[9]-1)/bt[5],Ht=(bt[8]-1)/bt[0],ee=(It[8]+1)/It[0],de=se*Ht,Je=se*ee,ye=xt/(-Ht+ee),Fe=ye*-Ht;if(Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(ye),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),bt[10]===-1)G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let H=se+ye,ke=Wt+ye,ve=de-Fe,U=Je+(xt-Fe),v=ft*Wt/ke*H,Z=he*Wt/ke*H;G.projectionMatrix.makePerspective(ve,U,v,Z,H,ke),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function wt(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Y=G.near,gt=G.far;y.texture!==null&&(y.depthNear>0&&(Y=y.depthNear),y.depthFar>0&&(gt=y.depthFar)),Q.near=z.near=N.near=Y,Q.far=z.far=N.far=gt,(O!==Q.near||B!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),O=Q.near,B=Q.far),Q.layers.mask=G.layers.mask|6,N.layers.mask=Q.layers.mask&-5,z.layers.mask=Q.layers.mask&-3;let xt=G.parent,bt=Q.cameras;wt(Q,xt);for(let It=0;It<bt.length;It++)wt(bt[It],xt);bt.length===2?ot(Q,N,z):Q.projectionMatrix.copy(N.projectionMatrix),T===null&&G.isPerspectiveCamera&&(T={camera:G,fov:G.fov,zoom:G.zoom}),Ct(G,Q,xt)};function Ct(G,Y,gt){gt===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(gt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=qa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&x===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(G){return g[G]};let Nt=null;function _t(G,Y){if(m=Y.getViewerPose(l||o),p=Y,m!==null){let gt=m.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let xt=!1;gt.length!==Q.cameras.length&&(Q.cameras.length=0,xt=!0);for(let Wt=0;Wt<gt.length;Wt++){let ft=gt[Wt],he=null;if(x!==null)he=x.getViewport(ft);else{let ee=f.getViewSubImage(d,ft);he=ee.viewport,Wt===0&&(t.setRenderTargetTextures(w,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(w))}let Ht=J[Wt];Ht===void 0&&(Ht=new _n,Ht.layers.enable(Wt),Ht.viewport=new Ze,J[Wt]=Ht),Ht.matrix.fromArray(ft.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(ft.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(he.x,he.y,he.width,he.height),Wt===0&&(Q.matrix.copy(Ht.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),xt===!0&&Q.cameras.push(Ht)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let Wt=f.getDepthInformation(gt[0]);Wt&&Wt.isValid&&Wt.texture&&y.init(Wt,s.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let Wt=0;Wt<gt.length;Wt++){let ft=gt[Wt].camera;if(ft){let he=g[ft];he||(he=new mo,g[ft]=he);let Ht=f.getCameraImage(ft);he.sourceTexture=Ht}}}}for(let gt=0;gt<R.length;gt++){let xt=E[gt],bt=R[gt];xt!==null&&bt!==void 0&&bt.update(xt,Y,l||o)}Nt&&Nt(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),p=null}let Rt=new cm;Rt.setAnimationLoop(_t),this.setAnimationLoop=function(G){Nt=G},this.dispose=function(){}}},gb=new qe,mm=new pe;mm.set(-1,0,0,0,1,0,0,0,1);function xb(n,t){function e(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function i(y,g){g.color.getRGB(y.fogColor.value,ru(n)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,P,F,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(y,g):g.isMeshLambertMaterial?(r(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(y,g),f(y,g)):g.isMeshPhongMaterial?(r(y,g),m(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(y,g),d(y,g),g.isMeshPhysicalMaterial&&x(y,g,w)):g.isMeshMatcapMaterial?(r(y,g),p(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),M(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&a(y,g)):g.isPointsMaterial?c(y,g,P,F):g.isSpriteMaterial?l(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,e(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===In&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,e(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===In&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,e(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,e(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let P=t.get(g),F=P.envMap,w=P.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(gb.makeRotationFromEuler(w)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(mm),y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform))}function a(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function c(y,g,P,F){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*P,y.scale.value=F*.5,g.map&&(y.map.value=g.map,e(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,e(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,e(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function f(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function d(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function x(y,g,P){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.retroreflectivity>0&&(y.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,y.specularIntensityMapTransform))}function p(y,g){g.matcap&&(y.matcap.value=g.matcap)}function M(y,g){let P=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yb(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,R){let E=R.program;i.uniformBlockBinding(w,E)}function l(w,R){let E=s[w.id];E===void 0&&(y(w),E=m(w),s[w.id]=E,w.addEventListener("dispose",P));let D=R.program;i.updateUBOMapping(w,D);let b=t.render.frame;r[w.id]!==b&&(d(w),r[w.id]=b)}function m(w){let R=f();w.__bindingPointIndex=R;let E=n.createBuffer(),D=w.__size,b=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,E),E}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let R=s[w.id],E=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let b=0,T=E.length;b<T;b++){let N=E[b];if(Array.isArray(N))for(let z=0,J=N.length;z<J;z++)x(N[z],b,z,D);else x(N,b,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(w,R,E,D){if(M(w,R,E,D)===!0){let b=w.__offset,T=w.value;if(Array.isArray(T)){let N=0;for(let z=0;z<T.length;z++){let J=T[z],Q=g(J);p(J,w.__data,N),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,w.__data)}}function p(w,R,E){typeof w=="number"||typeof w=="boolean"?R[0]=w:w.isMatrix3?(R[0]=w.elements[0],R[1]=w.elements[1],R[2]=w.elements[2],R[3]=0,R[4]=w.elements[3],R[5]=w.elements[4],R[6]=w.elements[5],R[7]=0,R[8]=w.elements[6],R[9]=w.elements[7],R[10]=w.elements[8],R[11]=0):ArrayBuffer.isView(w)?R.set(new w.constructor(w.buffer,w.byteOffset,R.length)):w.toArray(R,E)}function M(w,R,E,D){let b=w.value,T=R+"_"+E;if(D[T]===void 0)return typeof b=="number"||typeof b=="boolean"?D[T]=b:ArrayBuffer.isView(b)?D[T]=b.slice():D[T]=b.clone(),!0;{let N=D[T];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return D[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(N.equals(b)===!1)return N.copy(b),!0}}return!1}function y(w){let R=w.uniforms,E=0,D=16;for(let T=0,N=R.length;T<N;T++){let z=Array.isArray(R[T])?R[T]:[R[T]];for(let J=0,Q=z.length;J<Q;J++){let O=z[J],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,K=B.length;q<K;q++){let rt=B[q],$=g(rt),et=E%D,ot=et%$.boundary,wt=et+ot;E+=ot,wt!==0&&D-wt<$.storage&&(E+=D-wt),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=$.storage}}}let b=E%D;return b>0&&(E+=D-b),w.__size=E,w.__cache={},this}function g(w){let R={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(R.boundary=4,R.storage=4):w.isVector2?(R.boundary=8,R.storage=8):w.isVector3||w.isColor?(R.boundary=16,R.storage=12):w.isVector4?(R.boundary=16,R.storage=16):w.isMatrix3?(R.boundary=48,R.storage=48):w.isMatrix4?(R.boundary=64,R.storage=64):w.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(R.boundary=16,R.storage=w.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",w),R}function P(w){let R=w.target;R.removeEventListener("dispose",P);let E=o.indexOf(R.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function F(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:F}}var _b=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;function vb(){return Pi===null&&(Pi=new Ka(_b,16,16,ys,pi),Pi.name="DFG_LUT",Pi.minFilter=an,Pi.magFilter=an,Pi.wrapS=Ai,Pi.wrapT=Ai,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var cc=class{constructor(t={}){let{canvas:e=Dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:x=Vn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let M=x,y=new Set([El,Al,wl]),g=new Set([Vn,fi,yr,_r,bl,Sl]),P=new Uint32Array(4),F=new Int32Array(4),w=new j,R=null,E=null,D=[],b=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,z=!1,J=null,Q=null,O=null,B=null;this._outputColorSpace=on;let q=0,K=0,rt=null,$=-1,et=null,ot=new Ze,wt=new Ze,Ct=null,Nt=new le(0),_t=0,Rt=e.width,G=e.height,Y=1,gt=null,xt=null,bt=new Ze(0,0,Rt,G),It=new Ze(0,0,Rt,G),se=!1,Wt=new uo,ft=!1,he=!1,Ht=new qe,ee=new j,de=new Ze,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Fe(){return rt===null?Y:1}let H=i;function ke(A,k){return e.getContext(A,k)}let ve,U,v,Z,nt,at,Et,Dt,ct,dt,Pt,Yt,Ft,Ut,jt,ne,ue,W,At,ht,Tt,Lt,pt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:m,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",An,!1),H===null){let k="webgl2";if(H=ke(k,A),H===null)throw ke(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(A){throw e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",An,!1),ae("WebGLRenderer: "+A.message),A}function Qt(){ve=new Tv(H),ve.init(),Tt=new db(H,ve),U=new xv(H,ve,t,Tt),v=new ub(H,ve),U.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),Q=H.createFramebuffer(),O=H.createFramebuffer(),B=H.createFramebuffer(),Z=new Iv(H),nt=new KM,at=new fb(H,ve,v,nt,U,Tt,Z),Et=new Ev(N),Dt=new Lx(H),Lt=new mv(H,Dt),ct=new Cv(H,Dt,Z,Lt),dt=new Lv(H,ct,Dt,Lt,Z),W=new Pv(H,U,at),jt=new yv(nt),Pt=new JM(N,Et,ve,U,Lt,jt),Yt=new xb(N,nt),Ft=new QM,Ut=new rb(ve),ue=new pv(N,Et,v,dt,p,c),ne=new hb(N,dt,U),pt=new yb(H,Z,U,v),At=new gv(H,ve,Z),ht=new Rv(H,ve,Z),Z.programs=Pt.programs,N.capabilities=U,N.extensions=ve,N.properties=nt,N.renderLists=Ft,N.shadowMap=ne,N.state=v,N.info=Z}M!==Vn&&(T=new Nv(M,e.width,e.height,a,s,r));let $t=new Cu(N,H);this.xr=$t,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(Rt,G,!1))},this.getSize=function(A){return A.set(Rt,G)},this.setSize=function(A,k,it=!0){if($t.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=A,G=k,e.width=Math.floor(A*Y),e.height=Math.floor(k*Y),it===!0&&(e.style.width=A+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Rt*Y,G*Y).floor()},this.setDrawingBufferSize=function(A,k,it){Rt=A,G=k,Y=it,e.width=Math.floor(A*it),e.height=Math.floor(k*it),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(M===Vn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,k,it,tt){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,k,it,tt),v.viewport(ot.copy(bt).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(It)},this.setScissor=function(A,k,it,tt){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,k,it,tt),v.scissor(wt.copy(It).multiplyScalar(Y).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){v.setScissorTest(se=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,it=!0){let tt=0;if(A){let X=!1;if(rt!==null){let Bt=rt.texture.format;X=y.has(Bt)}if(X){let Bt=rt.texture.type,qt=g.has(Bt),Ot=ue.getClearColor(),Jt=ue.getClearAlpha(),Xt=Ot.r,fe=Ot.g,ge=Ot.b;qt?(P[0]=Xt,P[1]=fe,P[2]=ge,P[3]=Jt,H.clearBufferuiv(H.COLOR,0,P)):(F[0]=Xt,F[1]=fe,F[2]=ge,F[3]=Jt,H.clearBufferiv(H.COLOR,0,F))}else tt|=H.COLOR_BUFFER_BIT}k&&(tt|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(tt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&H.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",An,!1),ue.dispose(),Ft.dispose(),Ut.dispose(),nt.dispose(),Et.dispose(),dt.dispose(),Lt.dispose(),pt.dispose(),Pt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Wn),$t.removeEventListener("sessionend",Ki),yt.stop()};function Oe(A){A.preventDefault(),so("WebGLRenderer: Context Lost."),z=!0}function be(){so("WebGLRenderer: Context Restored."),z=!1;let A=Z.autoReset,k=ne.enabled,it=ne.autoUpdate,tt=ne.needsUpdate,X=ne.type;Qt(),Z.autoReset=A,ne.enabled=k,ne.autoUpdate=it,ne.needsUpdate=tt,ne.type=X}function An(A){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Un(A){let k=A.target;k.removeEventListener("dispose",Un),zc(k)}function zc(A){Bc(A),nt.remove(A)}function Bc(A){let k=nt.get(A).programs;k!==void 0&&(k.forEach(function(it){Pt.releaseProgram(it)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,it,tt,X,Bt){k===null&&(k=Je);let qt=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ot=Vc(A,k,it,tt,X);v.setMaterial(tt,qt);let Jt=it.index,Xt=1;if(tt.wireframe===!0){if(Jt=ct.getWireframeAttribute(it),Jt===void 0)return;Xt=2}let fe=it.drawRange,ge=it.attributes.position,Zt=fe.start*Xt,Te=(fe.start+fe.count)*Xt;Bt!==null&&(Zt=Math.max(Zt,Bt.start*Xt),Te=Math.min(Te,(Bt.start+Bt.count)*Xt)),Jt!==null?(Zt=Math.max(Zt,0),Te=Math.min(Te,Jt.count)):ge!=null&&(Zt=Math.max(Zt,0),Te=Math.min(Te,ge.count));let He=Te-Zt;if(He<0||He===1/0)return;Lt.setup(X,tt,Ot,it,Jt);let Ve,Ne=At;if(Jt!==null&&(Ve=Dt.get(Jt),Ne=ht,Ne.setIndex(Ve)),X.isMesh)tt.wireframe===!0?(v.setLineWidth(tt.wireframeLinewidth*Fe()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(X.isLine){let nn=tt.linewidth;nn===void 0&&(nn=1),v.setLineWidth(nn*Fe()),X.isLineSegments?Ne.setMode(H.LINES):X.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else X.isPoints?Ne.setMode(H.POINTS):X.isSprite&&Ne.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Ne.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let nn=X._multiDrawStarts,Vt=X._multiDrawCounts,tn=X._multiDrawCount,we=Jt?Dt.get(Jt).bytesPerElement:1,En=nt.get(tt).currentProgram.getUniforms();for(let Xn=0;Xn<tn;Xn++)En.setValue(H,"_gl_DrawID",Xn),Ne.render(nn[Xn]/we,Vt[Xn])}else if(X.isInstancedMesh)Ne.renderInstances(Zt,He,X.count);else if(it.isInstancedBufferGeometry){let nn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Vt=Math.min(it.instanceCount,nn);Ne.renderInstances(Zt,He,Vt)}else Ne.render(Zt,He)};function Ji(A,k,it,tt){J!==null&&A.isNodeMaterial&&J.setObject(tt,A),ft===!0&&jt.setState(A,it,!1),A.transparent===!0&&A.side===Kn&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,ws(A,k,tt),A.side=ps,A.needsUpdate=!0,ws(A,k,tt),A.side=Kn):ws(A,k,tt)}this.compile=function(A,k,it=null){it===null&&(it=A),J!==null&&J.renderStart(A,k,it),E=Ut.get(it),E.init(k),b.push(E),it.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),A!==it&&A.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),J!==null&&J.updateLights(E.state.lightsArray),he=this.localClippingEnabled,ft=jt.init(this.clippingPlanes,he),ft===!0&&jt.setGlobalState(this.clippingPlanes,k),J!==null&&ne.render(E.state.shadowsArray,it,k);let tt=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Bt=X.material;if(Bt)if(Array.isArray(Bt))for(let qt=0;qt<Bt.length;qt++){let Ot=Bt[qt];Ji(Ot,it,k,X),tt.add(Ot)}else Ji(Bt,it,k,X),tt.add(Bt)}),E=b.pop(),J!==null&&J.renderEnd(),tt},this.compileAsync=function(A,k,it=null){let tt=this.compile(A,k,it);return new Promise(X=>{function Bt(){if(tt.forEach(function(qt){let Jt=nt.get(qt).currentProgram;(Jt===void 0||Jt.isReady())&&tt.delete(qt)}),tt.size===0){X(A);return}setTimeout(Bt,10)}ve.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ss=null;function ks(A){Ss&&Ss(A)}function Wn(){yt.stop()}function Ki(){yt.start()}let yt=new cm;yt.setAnimationLoop(ks),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){Ss=A,$t.setAnimationLoop(A),A===null?yt.stop():yt.start()},$t.addEventListener("sessionstart",Wn),$t.addEventListener("sessionend",Ki),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;J!==null&&J.renderStart(A,k);let it=$t.enabled===!0&&$t.isPresenting===!0,tt=T!==null&&(rt===null||it)&&T.begin(N,rt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&($t.cameraAutoUpdate===!0&&$t.updateCamera(k),k=$t.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,k,rt),E=Ut.get(A,b.length),E.init(k),E.state.textureUnits=at.getTextureUnits(),b.push(E),Ht.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Wt.setFromProjectionMatrix(Ht,hi,k.reversedDepth),he=this.localClippingEnabled,ft=jt.init(this.clippingPlanes,he),R=Ft.get(A,D.length),R.init(),D.push(R),$t.enabled===!0&&$t.isPresenting===!0){let qt=N.xr.getDepthSensingMesh();qt!==null&&St(qt,k,-1/0,N.sortObjects)}St(A,k,0,N.sortObjects),R.finish(),J!==null&&J.updateLights(E.state.lightsArray),N.sortObjects===!0&&R.sort(gt,xt),ye=$t.enabled===!1||$t.isPresenting===!1||$t.hasDepthSensing()===!1,ye&&ue.addToRenderList(R,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&jt.beginShadows();let X=E.state.shadowsArray;if(ne.render(X,A,k),ft===!0&&jt.endShadows(),(tt&&T.hasRenderPass())===!1){let qt=R.opaque,Ot=R.transmissive;if(E.setupLights(),k.isArrayCamera){let Jt=k.cameras;if(Ot.length>0)for(let Xt=0,fe=Jt.length;Xt<fe;Xt++){let ge=Jt[Xt];Me(qt,Ot,A,ge)}ye&&ue.render(A);for(let Xt=0,fe=Jt.length;Xt<fe;Xt++){let ge=Jt[Xt];jo(R,A,ge,ge.viewport)}}else Ot.length>0&&Me(qt,Ot,A,k),ye&&ue.render(A),jo(R,A,k)}rt!==null&&K===0&&(at.updateMultisampleRenderTarget(rt),at.updateRenderTargetMipmap(rt)),tt&&T.end(N),A.isScene===!0&&A.onAfterRender(N,A,k),Lt.resetDefaultState(),$=-1,et=null,b.pop(),b.length>0?(E=b[b.length-1],at.setTextureUnits(E.state.textureUnits),ft===!0&&jt.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?R=D[D.length-1]:R=null,J!==null&&J.renderEnd()};function St(A,k,it,tt){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Wt)){tt&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);let qt=dt.update(A),Ot=A.material;Ot.visible&&R.push(A,qt,Ot,it,de.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Wt))){let qt=dt.update(A),Ot=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),de.copy(qt.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(Ot)){let Jt=qt.groups;for(let Xt=0,fe=Jt.length;Xt<fe;Xt++){let ge=Jt[Xt],Zt=Ot[ge.materialIndex];Zt&&Zt.visible&&R.push(A,qt,Zt,it,de.z,ge,k)}}else Ot.visible&&R.push(A,qt,Ot,it,de.z,null,k)}}let Bt=A.children;for(let qt=0,Ot=Bt.length;qt<Ot;qt++)St(Bt[qt],k,it,tt)}function jo(A,k,it,tt){let{opaque:X,transmissive:Bt,transparent:qt}=A;E.setupLightsView(it),ft===!0&&jt.setGlobalState(N.clippingPlanes,it),tt&&v.viewport(ot.copy(tt)),X.length>0&&ii(X,k,it),Bt.length>0&&ii(Bt,k,it),qt.length>0&&ii(qt,k,it),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Me(A,k,it,tt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[tt.id]===void 0){let Zt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[tt.id]=new Ln(1,1,{generateMipmaps:!0,type:Zt?pi:Vn,minFilter:gs,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let Bt=E.state.transmissionRenderTarget[tt.id],qt=tt.viewport||ot;Bt.setSize(qt.z*N.transmissionResolutionScale,qt.w*N.transmissionResolutionScale);let Ot=N.getRenderTarget(),Jt=N.getActiveCubeFace(),Xt=N.getActiveMipmapLevel();N.setRenderTarget(Bt),N.getClearColor(Nt),_t=N.getClearAlpha(),_t<1&&N.setClearColor(16777215,.5),N.clear(),ye&&ue.render(it);let fe=N.toneMapping;N.toneMapping=ui;let ge=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),E.setupLightsView(tt),ft===!0&&jt.setGlobalState(N.clippingPlanes,tt),ii(A,it,tt),at.updateMultisampleRenderTarget(Bt),at.updateRenderTargetMipmap(Bt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Te=0,He=k.length;Te<He;Te++){let Ve=k[Te],{object:Ne,geometry:nn,material:Vt,group:tn}=Ve;if(Vt.side===Kn&&Ne.layers.test(tt.layers)){let we=Vt.side;Vt.side=In,Vt.needsUpdate=!0,Oi(Ne,it,tt,nn,Vt,tn),Vt.side=we,Vt.needsUpdate=!0,Zt=!0}}Zt===!0&&(at.updateMultisampleRenderTarget(Bt),at.updateRenderTargetMipmap(Bt))}N.setRenderTarget(Ot,Jt,Xt),N.setClearColor(Nt,_t),ge!==void 0&&(tt.viewport=ge),N.toneMapping=fe}function ii(A,k,it){let tt=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Bt=A.length;X<Bt;X++){let qt=A[X],{object:Ot,geometry:Jt,group:Xt}=qt,fe=qt.material;fe.allowOverride===!0&&tt!==null&&(fe=tt),Ot.layers.test(it.layers)&&Oi(Ot,k,it,Jt,fe,Xt)}}function Oi(A,k,it,tt,X,Bt){J!==null&&X.isNodeMaterial&&J.setObject(A,X),A.onBeforeRender(N,k,it,tt,X,Bt),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(N,k,it,tt,A,Bt),X.transparent===!0&&X.side===Kn&&X.forceSinglePass===!1?(X.side=In,X.needsUpdate=!0,N.renderBufferDirect(it,k,tt,X,A,Bt),X.side=ps,X.needsUpdate=!0,N.renderBufferDirect(it,k,tt,X,A,Bt),X.side=Kn):N.renderBufferDirect(it,k,tt,X,A,Bt),A.onAfterRender(N,k,it,tt,X,Bt)}function ws(A,k,it){k.isScene!==!0&&(k=Je);let tt=nt.get(A),X=E.state.lights,Bt=E.state.shadowsArray,qt=X.state.version,Ot=Pt.getParameters(A,X.state,Bt,k,it,E.state.lightProbeGridArray),Jt=Pt.getProgramCacheKey(Ot),Xt=tt.programs;tt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,tt.fog=k.fog;let fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;tt.envMap=Et.get(A.envMap||tt.environment,fe),tt.envMapRotation=tt.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",Un),Xt=new Map,tt.programs=Xt);let ge=Xt.get(Jt);if(ge!==void 0){if(tt.currentProgram===ge&&tt.lightsStateVersion===qt)return Qo(A,Ot),ge}else Ot.uniforms=Pt.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,it,Ot),A.onBeforeCompile(Ot,N),ge=Pt.acquireProgram(Ot,Jt),Xt.set(Jt,ge),tt.uniforms=Ot.uniforms;let Zt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=jt.uniform),Qo(A,Ot),tt.needsLights=Pn(A),tt.lightsStateVersion=qt,tt.needsLights&&(Zt.ambientLightColor.value=X.state.ambient,Zt.lightProbe.value=X.state.probe,Zt.sunLights.value=X.state.sun,Zt.sunLightShadows.value=X.state.sunShadow,Zt.directionalLights.value=X.state.directional,Zt.directionalLightShadows.value=X.state.directionalShadow,Zt.spotLights.value=X.state.spot,Zt.spotLightShadows.value=X.state.spotShadow,Zt.rectAreaLights.value=X.state.rectArea,Zt.ltc_1.value=X.state.rectAreaLTC1,Zt.ltc_2.value=X.state.rectAreaLTC2,Zt.pointLights.value=X.state.point,Zt.pointLightShadows.value=X.state.pointShadow,Zt.hemisphereLights.value=X.state.hemi,Zt.sunShadowMatrix.value=X.state.sunShadowMatrix,Zt.sunShadowCascade.value=X.state.sunShadowCascade,Zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Zt.spotLightMatrix.value=X.state.spotLightMatrix,Zt.spotLightMap.value=X.state.spotLightMap,Zt.pointShadowMatrix.value=X.state.pointShadowMatrix),tt.lightProbeGrid=E.state.lightProbeGridArray.length>0,tt.currentProgram=ge,tt.uniformsList=null,ge}function Vs(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=br.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Qo(A,k){let it=nt.get(A);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function kc(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(k.matrixWorld);for(let it=0,tt=A.length;it<tt;it++){let X=A[it];if(X.texture!==null&&X.boundingBox.containsPoint(w))return X}return null}function Vc(A,k,it,tt,X){k.isScene!==!0&&(k=Je),at.resetTextureUnits();let Bt=k.fog,qt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?k.environment:null,Ot=rt===null?N.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Se.workingColorSpace,Jt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Xt=Et.get(tt.envMap||qt,Jt),fe=tt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ge=!!it.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Zt=!!it.morphAttributes.position,Te=!!it.morphAttributes.normal,He=!!it.morphAttributes.color,Ve=ui;tt.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ve=N.toneMapping);let Ne=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,nn=Ne!==void 0?Ne.length:0,Vt=nt.get(tt),tn=E.state.lights;if(ft===!0&&(he===!0||A!==et)){let ze=A===et&&tt.id===$;jt.setState(tt,A,ze)}let we=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==tn.state.version||Vt.outputColorSpace!==Ot||X.isBatchedMesh&&Vt.batching===!1||!X.isBatchedMesh&&Vt.batching===!0||X.isBatchedMesh&&Vt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Vt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Vt.instancing===!1||!X.isInstancedMesh&&Vt.instancing===!0||X.isSkinnedMesh&&Vt.skinning===!1||!X.isSkinnedMesh&&Vt.skinning===!0||X.isInstancedMesh&&Vt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Vt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Vt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Vt.instancingMorph===!1&&X.morphTexture!==null||Vt.envMap!==Xt||tt.fog===!0&&Vt.fog!==Bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==jt.numPlanes||Vt.numIntersection!==jt.numIntersection)||Vt.vertexAlphas!==fe||Vt.vertexTangents!==ge||Vt.morphTargets!==Zt||Vt.morphNormals!==Te||Vt.morphColors!==He||Vt.toneMapping!==Ve||Vt.morphTargetsCount!==nn||!!Vt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Vt.__version=tt.version);let En=Vt.currentProgram;we===!0&&(En=ws(tt,k,X),J&&tt.isNodeMaterial&&J.onUpdateProgram(tt,En,Vt));let Xn=!1,Fn=!1,si=!1,Re=En.getUniforms(),Xe=Vt.uniforms;if(v.useProgram(En.program)&&(Xn=!0,Fn=!0,si=!0),tt.id!==$&&($=tt.id,Fn=!0),Vt.needsLights){let ze=kc(E.state.lightProbeGridArray,X);Vt.lightProbeGrid!==ze&&(Vt.lightProbeGrid=ze,Fn=!0)}if(Xn||et!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Re.setValue(H,"projectionMatrix",A.projectionMatrix),Re.setValue(H,"viewMatrix",A.matrixWorldInverse);let _i=Re.map.cameraPosition;_i!==void 0&&_i.setValue(H,ee.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Re.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Re.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),et!==A&&(et=A,Fn=!0,si=!0)}if(Vt.needsLights&&(tn.state.sunShadowMap.length>0&&Re.setValue(H,"sunShadowMap",tn.state.sunShadowMap,at),tn.state.directionalShadowMap.length>0&&Re.setValue(H,"directionalShadowMap",tn.state.directionalShadowMap,at),tn.state.spotShadowMap.length>0&&Re.setValue(H,"spotShadowMap",tn.state.spotShadowMap,at),tn.state.pointShadowMap.length>0&&Re.setValue(H,"pointShadowMap",tn.state.pointShadowMap,at)),X.isSkinnedMesh){Re.setOptional(H,X,"bindMatrix"),Re.setOptional(H,X,"bindMatrixInverse");let ze=X.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Re.setValue(H,"boneTexture",ze.boneTexture,at))}X.isBatchedMesh&&(Re.setOptional(H,X,"batchingTexture"),Re.setValue(H,"batchingTexture",X._matricesTexture,at),Re.setOptional(H,X,"batchingIdTexture"),Re.setValue(H,"batchingIdTexture",X._indirectTexture,at),Re.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&Re.setValue(H,"batchingColorTexture",X._colorsTexture,at));let qn=it.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&W.update(X,it,En),(Fn||Vt.receiveShadow!==X.receiveShadow)&&(Vt.receiveShadow=X.receiveShadow,Re.setValue(H,"receiveShadow",X.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&k.environment!==null&&(Xe.envMapIntensity.value=k.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=vb()),Fn){if(Re.setValue(H,"toneMappingExposure",N.toneMappingExposure),Vt.needsLights&&ta(Xe,si),Bt&&tt.fog===!0&&Yt.refreshFogUniforms(Xe,Bt),Yt.refreshMaterialUniforms(Xe,tt,Y,G,E.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.lightProbeGrid){let ze=Vt.lightProbeGrid;Xe.probesSH.value=ze.texture,Xe.probesMin.value.copy(ze.boundingBox.min),Xe.probesMax.value.copy(ze.boundingBox.max),Xe.probesResolution.value.copy(ze.resolution)}br.upload(H,Vs(Vt),Xe,at)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(br.upload(H,Vs(Vt),Xe,at),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Re.setValue(H,"center",X.center),Re.setValue(H,"modelViewMatrix",X.modelViewMatrix),Re.setValue(H,"normalMatrix",X.normalMatrix),Re.setValue(H,"modelMatrix",X.matrixWorld),tt.uniformsGroups!==void 0){let ze=tt.uniformsGroups;for(let _i=0,vi=ze.length;_i<vi;_i++){let ji=ze[_i];pt.update(ji,En),pt.bind(ji,En)}}return En}function ta(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Pn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(A,k,it){let tt=nt.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),nt.get(A.texture).__webglTexture=k,nt.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:it,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let it=nt.get(A);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,it=0){rt=A,q=k,K=it;let tt=null,X=!1,Bt=!1;if(A){let Ot=nt.get(A);if(Ot.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,Ot.__webglFramebuffer),ot.copy(A.viewport),wt.copy(A.scissor),Ct=A.scissorTest,v.viewport(ot),v.scissor(wt),v.setScissorTest(Ct),$=-1;return}else if(Ot.__webglFramebuffer===void 0)at.setupRenderTarget(A);else if(Ot.__hasExternalTextures)at.rebindTextures(A,nt.get(A.texture).__webglTexture,nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let fe=A.depthTexture;if(Ot.__boundDepthTexture!==fe){if(fe!==null&&nt.has(fe)&&(A.width!==fe.image.width||A.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(A)}}let Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Bt=!0);let Xt=nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?tt=Xt[k][it]:tt=Xt[k],X=!0):A.samples>0&&at.useMultisampledRTT(A)===!1?tt=nt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?tt=Xt[it]:tt=Xt,ot.copy(A.viewport),wt.copy(A.scissor),Ct=A.scissorTest}else ot.copy(bt).multiplyScalar(Y).floor(),wt.copy(It).multiplyScalar(Y).floor(),Ct=se;if(it!==0&&(tt=Q),v.bindFramebuffer(H.FRAMEBUFFER,tt)&&v.drawBuffers(A,tt),v.viewport(ot),v.scissor(wt),v.setScissorTest(Ct),X){let Ot=nt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ot.__webglTexture,it)}else if(Bt){let Ot=k;for(let Jt=0;Jt<A.textures.length;Jt++){let Xt=nt.get(A.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,Xt.__webglTexture,it,Ot)}}else if(A!==null&&it!==0){let Ot=nt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,it)}$=-1};function Fr(A){let k=nt.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=U.textureFormatReadable(A.format),k.__typeReadable=U.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,it,tt,X,Bt,qt,Ot=0){if(!(A&&A.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt){v.bindFramebuffer(H.FRAMEBUFFER,Jt);try{let Xt=A.textures[Ot],fe=Xt.format,ge=Xt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot);let Zt=Fr(Xt);if(Zt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-tt&&it>=0&&it<=A.height-X&&H.readPixels(k,it,tt,X,Tt.convert(fe),Tt.convert(ge),Bt)}finally{let Xt=rt!==null?nt.get(rt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,k,it,tt,X,Bt,qt,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt)if(k>=0&&k<=A.width-tt&&it>=0&&it<=A.height-X){v.bindFramebuffer(H.FRAMEBUFFER,Jt);let Xt=A.textures[Ot],fe=Xt.format,ge=Xt.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot);let Zt=Fr(Xt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Te),H.bufferData(H.PIXEL_PACK_BUFFER,Bt.byteLength,H.STREAM_READ),H.readPixels(k,it,tt,X,Tt.convert(fe),Tt.convert(ge),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let He=rt!==null?nt.get(rt).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,He);let Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Up(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Te),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Bt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Te),H.deleteSync(Ve),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,it=0){let tt=Math.pow(2,-it),X=Math.floor(A.image.width*tt),Bt=Math.floor(A.image.height*tt),qt=k!==null?k.x:0,Ot=k!==null?k.y:0;at.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,qt,Ot,X,Bt),v.unbindTexture()},this.copyTextureToTexture=function(A,k,it=null,tt=null,X=0,Bt=0){let qt,Ot,Jt,Xt,fe,ge,Zt,Te,He,Ve=A.isCompressedTexture?A.mipmaps[Bt]:A.image;if(it!==null)qt=it.max.x-it.min.x,Ot=it.max.y-it.min.y,Jt=it.isBox3?it.max.z-it.min.z:1,Xt=it.min.x,fe=it.min.y,ge=it.isBox3?it.min.z:0;else{let Xe=Math.pow(2,-X);qt=Math.floor(Ve.width*Xe),Ot=Math.floor(Ve.height*Xe),A.isDataArrayTexture?Jt=Ve.depth:A.isData3DTexture?Jt=Math.floor(Ve.depth*Xe):Jt=1,Xt=0,fe=0,ge=0}tt!==null?(Zt=tt.x,Te=tt.y,He=tt.z):(Zt=0,Te=0,He=0);let Ne=Tt.convert(k.format),nn=Tt.convert(k.type),Vt;k.isData3DTexture?(at.setTexture3D(k,0),Vt=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(at.setTexture2DArray(k,0),Vt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(k,0),Vt=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let tn=v.getParameter(H.UNPACK_ROW_LENGTH),we=v.getParameter(H.UNPACK_IMAGE_HEIGHT),En=v.getParameter(H.UNPACK_SKIP_PIXELS),Xn=v.getParameter(H.UNPACK_SKIP_ROWS),Fn=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Xt),v.pixelStorei(H.UNPACK_SKIP_ROWS,fe),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ge);let si=A.isDataArrayTexture||A.isData3DTexture,Re=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let Xe=nt.get(A),qn=nt.get(k),ze=nt.get(Xe.__renderTarget),_i=nt.get(qn.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,ze.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let vi=0;vi<Jt;vi++)si&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(A).__webglTexture,X,ge+vi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nt.get(k).__webglTexture,Bt,He+vi)),H.blitFramebuffer(Xt,fe,qt,Ot,Zt,Te,qt,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||nt.has(A)){let Xe=nt.get(A),qn=nt.get(k);v.bindFramebuffer(H.READ_FRAMEBUFFER,O),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,B);for(let ze=0;ze<Jt;ze++)si?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.__webglTexture,X,ge+ze):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Xe.__webglTexture,X),Re?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qn.__webglTexture,Bt,He+ze):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qn.__webglTexture,Bt),X!==0?H.blitFramebuffer(Xt,fe,qt,Ot,Zt,Te,qt,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):Re?H.copyTexSubImage3D(Vt,Bt,Zt,Te,He+ze,Xt,fe,qt,Ot):H.copyTexSubImage2D(Vt,Bt,Zt,Te,Xt,fe,qt,Ot);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Re?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Vt,Bt,Zt,Te,He,qt,Ot,Jt,Ne,nn,Ve.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Vt,Bt,Zt,Te,He,qt,Ot,Jt,Ne,Ve.data):H.texSubImage3D(Vt,Bt,Zt,Te,He,qt,Ot,Jt,Ne,nn,Ve):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Bt,Zt,Te,qt,Ot,Ne,nn,Ve.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Bt,Zt,Te,Ve.width,Ve.height,Ne,Ve.data):H.texSubImage2D(H.TEXTURE_2D,Bt,Zt,Te,qt,Ot,Ne,nn,Ve);v.pixelStorei(H.UNPACK_ROW_LENGTH,tn),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,we),v.pixelStorei(H.UNPACK_SKIP_PIXELS,En),v.pixelStorei(H.UNPACK_SKIP_ROWS,Xn),v.pixelStorei(H.UNPACK_SKIP_IMAGES,Fn),Bt===0&&k.generateMipmaps&&H.generateMipmap(Vt),v.unbindTexture()},this.initRenderTarget=function(A){nt.get(A).__webglFramebuffer===void 0&&at.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?at.setTextureCube(A,0):A.isData3DTexture?at.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?at.setTexture2DArray(A,0):at.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){q=0,K=0,rt=null,v.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var Mb=["top","side","bottom"],bb={slab_bottom:1,slab_top:1,stairs:1},gm=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function Sb(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],gm[n.facing|0]]:null}function xm(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let T of t){if(!T||typeof T.id!="string")throw new Error("block without id");if(!Number.isInteger(T.n)||T.n<0||T.n>255)throw new Error("bad n for "+T.id);if(i[T.n])throw new Error("duplicate n "+T.n+" ("+T.id+")");if(s[T.id])throw new Error("duplicate id "+T.id);let N=T.colors||{},z=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},T);if(z.placeable=z.n!==0&&!z.liquid,z.colors={top:N.top||"#888888",side:N.side||N.top||"#888888",bottom:N.bottom||N.top||"#888888"},z.opaque=z.solid&&!z.transparent&&!z.cutout&&!bb[z.shape],z.tile={},z.tileOf&&s[z.tileOf])z.tile=Object.assign({},s[z.tileOf].tile);else if(z.n!==0){let J={};for(let Q of Mb){let O=z.colors[Q]+"|"+(z.pattern==="grass"||z.pattern==="log"||z.pattern==="lamp"||z.pattern==="table"||z.pattern==="stele"||z.pattern==="torch"||z.pattern==="bed"||z.pattern==="snow"||z.pattern==="lantern"||z.pattern==="bookshelf"||z.pattern==="hay"||z.pattern==="barrel"||z.pattern==="chest"||z.pattern==="farmland"?Q:"");J[O]===void 0&&(J[O]=r.length,r.push({block:z.id,face:Q,color:z.colors[Q],pattern:z.pattern,accent:z.accent||null,top:z.colors.top})),z.tile[Q]=J[O]}}i[z.n]=z,s[z.id]=z}if(!s.air)throw new Error("registry needs air");for(let T of e){if(s[T.id])throw new Error("duplicate id "+T.id);s[T.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},T)}for(let T in s){let N=s[T].drops;if(N&&N!=="self"&&!s[N])throw new Error(T+" drops unknown "+N)}let o=T=>(typeof T=="number"?i[T]:s[T])||null,a=new Uint8Array(256),c=new Uint8Array(256),l=new Uint8Array(256),m=new Uint8Array(256),f=new Uint8Array(256),d=new Uint8Array(256),x={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7,ramp:8},p=new Uint8Array(256),M=new Array(256).fill(null),y=new Uint8Array(256),g=new Uint8Array(256),P=new Uint8Array(256),F=new Uint8Array(256),w=new Uint8Array(256),R=new Int16Array(256).fill(-1),E=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((T,N)=>{T&&(y[N]=T.solid?1:0,g[N]=T.opaque?1:0,P[N]=T.transparent?1:0,F[N]=T.emissive?1:0,w[N]=T.liquid?1:0,a[N]=T.light!=null?T.light:T.emissive?15:0,c[N]=T.liquid?2:0,l[N]=x[T.shape]||0,m[N]=T.cutout?1:0,f[N]=T.climbable?1:0,d[N]=T.plant?1:0,p[N]=T.facing|0,T.solid&&(M[N]=Sb(T)),N&&(R[N]=T.tile.top,E[N]=T.tile.side,D[N]=T.tile.bottom))});let b=(n&&n.blueprints||[]).map(T=>Object.assign({kind:"blueprint"},T));return{blocks:i.filter(Boolean),items:e.map(T=>s[T.id]),blueprints:b,tiles:r,get:o,toolOf:T=>{let N=T&&s[T];return N&&N.kind==="item"&&N.tool&&typeof N.tool=="object"?N.tool:null},num:T=>{let N=s[T];if(!N||N.kind!=="block")throw new Error("no block "+T);return N.n},name:T=>{let N=o(T);return N?N.name_zh:String(T)},maxStack:T=>{let N=s[T];return N?N.maxStack:64},dropOf:T=>{let N=i[T];return!N||!N.drops?null:N.drops==="self"?N.id:N.drops},breakTime:T=>{let N=i[T];return!N||N.hardness<0?1/0:.25+N.hardness*.55},flat:{solid:y,opaque:g,trans:P,emit:F,liquid:w,tileTop:R,tileSide:E,tileBottom:D,lightEmit:a,attn:c,shape:l,cutout:m,climb:f,plant:d,facing:p,boxes:M}}}var Xi=n=>Math.floor(n/16);var me=(n,t,e)=>(t*16+e)*16+n;var Di=(n,t)=>n+","+t,ym=n=>n.split(",").map(Number);function Ru(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Xi(n),s=Xi(e);return{cx:i,cz:s,i:me(n-i*16,t,e-s*16)}}function _m(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Hn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var _s=(n,t,e)=>Hn(n,t,0,e);function wb(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Iu=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Ab=.5*(Math.sqrt(3)-1),Do=(3-Math.sqrt(3))/6;function Ni(n){let t=wb(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*Ab,a=Math.floor(s+o),c=Math.floor(r+o),l=(a+c)*Do,m=s-(a-l),f=r-(c-l),d=m>f?1:0,x=1-d,p=m-d+Do,M=f-x+Do,y=m-1+2*Do,g=f-1+2*Do,P=a&255,F=c&255,w=0,R,E;return R=.5-m*m-f*f,R>0&&(E=Iu[i[P+i[F]]&7],R*=R,w+=R*R*(E[0]*m+E[1]*f)),R=.5-p*p-M*M,R>0&&(E=Iu[i[P+d+i[F+x]]&7],R*=R,w+=R*R*(E[0]*p+E[1]*M)),R=.5-y*y-g*g,R>0&&(E=Iu[i[P+1+i[F+1]]&7],R*=R,w+=R*R*(E[0]*y+E[1]*g)),70*w}}function qi(n,t,e,i){let s=1,r=1,o=0,a=0;for(let c=0;c<i;c++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function Pu(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),c=t(e-r),l=t(i-o),m=t(s-a),f=(x,p,M)=>Hn(n,r+x,o+p,a+M),d=(x,p,M)=>x+(p-x)*M;return d(d(d(f(0,0,0),f(1,0,0),c),d(f(0,1,0),f(1,1,0),c),l),d(d(f(0,0,1),f(1,0,1),c),d(f(0,1,1),f(1,1,1),c),l),m)}}var wr=160,mi=18,Lu=[[0,1],[-1,0],[0,-1],[1,0]];function vm(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var Eb=(n,t,e)=>e&1?[t,n]:[n,t];function Mm(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(c,l){let m=c+","+l;if(i.has(m))return i.get(m);let f=null,d=x=>Hn(n+909,c,x,l);if(d(0)<.45&&e&&e.houses&&e.houses.length){let x=Math.floor((c+.2+d(1)*.6)*wr),p=Math.floor((l+.2+d(2)*.6)*wr),M=t.biomeOf(x,p),y=t.height(x,p),g=(M==="plains"||M==="desert")&&Math.hypot(x,p)>110;if(g&&y>s+1)for(let P=0;P<16&&g;P++)for(let F of[7,14]){let w=t.height(x+Math.round(Math.cos(P*.39)*F),p+Math.round(Math.sin(P*.39)*F));(Math.abs(w-y)>3||w<=s)&&(g=!1)}else g=!1;if(g){let P=[],F=[],w=3+Math.floor(d(3)*4),R=(E,D,b,T)=>{let N=r[E];if(!N)return null;let[z,J]=Eb(N.size[0],N.size[2],T),Q={tpl:E,rot:T,x0:D-(z>>1),z0:b-(J>>1),y,w:z,d:J,h:N.size[1]};return P.push(Q),Q};R("well",x,p,0),R("lamp_post",x+3,p+3,0),R("lamp_post",x-3,p-3,0);for(let E=0;E<w;E++){let D=E/w*Math.PI*2+d(10+E)*.5,b=9+d(20+E)*3,T=x+Math.round(Math.cos(D)*b),N=p+Math.round(Math.sin(D)*b),z=x-T,J=p-N,Q=0,O=-1/0;Lu.forEach((ot,wt)=>{let Ct=ot[0]*z+ot[1]*J;Ct>O&&(O=Ct,Q=wt)});let B=e.houses[Math.floor(d(30+E)*e.houses.length)],q=R(B,T,N,Q);if(!q)continue;let K=r[B],[rt,$]=vm(K.door[0],K.door[1],K.size[0],K.size[2],Q),et={x:q.x0+rt+Lu[Q][0],z:q.z0+$+Lu[Q][1]};F.push({ax:x,az:p,bx:et.x,bz:et.z})}f={id:m,x,z:p,y,biome:M,structures:P,paths:F,villagers:2+Math.floor(d(4)*3)}}}return i.set(m,f),f}function a(c,l,m,f){let d=[];for(let x=Math.floor((l-mi)/wr);x<=Math.floor((f+mi)/wr);x++)for(let p=Math.floor((c-mi)/wr);p<=Math.floor((m+mi)/wr);p++){let M=o(p,x);M&&M.x+mi>=c&&M.x-mi<=m&&M.z+mi>=l&&M.z-mi<=f&&d.push(M)}return d}return{plan:o,around:a,chunk:(c,l)=>a(c*16,l*16,c*16+16-1,l*16+16-1)}}function bm(n,t,e,i,s,r,o){let a=t*16,c=e*16,l=(p,M)=>p>=a&&p<a+16&&M>=c&&M<c+16,m=i.biome==="desert",f=m?s.desert||{}:{},d=p=>{let M=s.palette[p];if(!M)return null;let y=f[M]||M;return r.byId(y)},x=m?r.byId("sandstone"):r.byId("cobblestone");for(let p of i.paths){let M=Math.max(Math.abs(p.bx-p.ax),Math.abs(p.bz-p.az));for(let y=0;y<=M;y++){let g=Math.round(p.ax+(p.bx-p.ax)*y/M),P=Math.round(p.az+(p.bz-p.az)*y/M);if(!l(g,P))continue;let F=o.height(g,P),w=me(g-a,F,P-c);n[w]&&n[w]!==r.water&&(n[w]=r.path);for(let R=F+1;R<Math.min(64,F+4);R++){let E=me(g-a,R,P-c);(n[E]===r.leaves||n[E]===r.log||R===F+1)&&(n[E]=0)}}}for(let p of i.structures){let M=s.templates[p.tpl];if(!M)continue;let[y,,g]=M.size;for(let P=0;P<g;P++)for(let F=0;F<y;F++){let[w,R]=vm(F,P,y,g,p.rot),E=p.x0+w,D=p.z0+R;if(!l(E,D))continue;let b=E-a,T=D-c;for(let N=p.y-1;N>Math.max(0,p.y-8);N--){let z=me(b,N,T);if(n[z]&&n[z]!==r.water)break;n[z]=x}for(let N=p.y+M.size[1];N<Math.min(64,p.y+M.size[1]+3);N++)n[me(b,N,T)]=0;M.layers.forEach((N,z)=>{let J=(N[P]||"")[F];if(!J||J===" ")return;let Q=p.y+z;Q>=64||(n[me(b,Q,T)]=J==="."?0:d(J)||0)})}}}var vs=192;function Sm(n,t,e){let i=e&&e.ruins,s=new Map;function r(a,c){let l=a+","+c;if(s.has(l))return s.get(l);let m=null;if(i){let f=p=>_s(n+9001+p*31,a,c),d=a*vs+24+Math.floor(f(2)*(vs-48)),x=c*vs+24+Math.floor(f(3)*(vs-48));if(f(1)<i.chance&&Math.hypot(d,x)>140){let p=i.byBiome[t.biomeOf(d,x)],M=Array.isArray(p)?p[Math.floor(f(4)*p.length)]:p,y=M&&i.templates[M];if(y&&!(t.villages&&t.villages.around(d-40,x-40,d+40,x+40).length)){let g=y.layers[0][0].length,P=y.layers[0].length;m={id:l,kind:M,x:d-(g>>1),z:x-(P>>1),y:t.height(d,x)+(y.yoff||0),w:g,d:P,h:y.layers.length}}}}return s.set(l,m),m}function o(a,c,l,m){let f=[];for(let d=Math.floor((c-32)/vs);d<=Math.floor((m+32)/vs);d++)for(let x=Math.floor((a-32)/vs);x<=Math.floor((l+32)/vs);x++){let p=r(x,d);p&&p.x<=l&&p.x+p.w>a&&p.z<=m&&p.z+p.d>c&&f.push(p)}return f}return{around:o,chunk:(a,c)=>o(a*16,c*16,a*16+16-1,c*16+16-1),at:(a,c)=>o(Math.floor(a),Math.floor(c),Math.floor(a),Math.floor(c))[0]||null}}function wm(n,t,e,i,s,r){let o=s.ruins.templates[i.kind],a=s.ruins.palette,c=t*16,l=e*16,m=o.foundation?r(o.foundation):0,f=r("water");o.layers.forEach((d,x)=>d.forEach((p,M)=>{for(let y=0;y<p.length;y++){let g=p[y];if(g===" ")continue;let P=i.x+y-c,F=i.z+M-l,w=i.y+x;if(!(P<0||P>=16||F<0||F>=16||w<=0||w>=64)&&(n[me(P,w,F)]=g==="."?0:r(a[g]),x===0&&m))for(let R=w-1,E=0;R>0&&E<8;R--,E++){let D=n[me(P,R,F)];if(D&&D!==f)break;n[me(P,R,F)]=m}}}))}function Am(n,t,e){let i=(Math.imul(n,73856093)^Math.imul(t,19349663)^Math.imul(e,83492791))>>>0||1;return()=>{i=i+1831565813>>>0;let s=i;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}function Em(n,t,e,i){let s=n.createInventory(27);for(let r of t||[])if(e()<r.p){let o=r.min+Math.floor(e()*(r.max-r.min+1));if(o>0){let a;do a=Math.floor(e()*27);while(s.slots[a]&&s.slots.some(c=>!c));s.slots[a]||(s.slots[a]={id:r.id,count:Math.min(o,i?i(r.id):64)})}}return s}var Dn=24;var Cm={shadow:"\u6697\u5F71\u754C",ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},Tm=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3},{ore:"dark",y0:2,y1:11,count:2,chance:.5,size:3}],Ar=112;function Rm(n,t,e){let i=O=>t.num(O),s=O=>{try{return i(O)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s,r.dark=s("dark_crystal_ore")||r.stone;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=Ni(n),c=Ni(n+101),l=Ni(n+202),m=Ni(n+303),f=Ni(n+404),d=Pu(n+505),x=Pu(n+606);function p(O,B){let q=qi(a,O/190,B/190,3),K=qi(c,O/55,B/55,4),rt=Math.max(0,qi(l,O/130,B/130,2)-.1),$=27+q*9+K*6+rt*rt*75;return Math.max(4,Math.min(54,Math.floor($)))}let M=Ni(n+808);function y(O,B){let q=p(O,B),K=qi(M,O/900,B/900,2),rt=Math.min(1,Math.max(0,(Math.hypot(O,B)-240)/80)),$=Math.min(1,Math.max(0,(-.18-K)/.17)),et=$*$*(3-2*$)*rt;return et>0&&(q=Math.round(q*(1-et)+(Dn-14)*et)),q<Dn-1?Math.max(3,Math.floor(Dn-1-(Dn-1-q)*1.8)):q}function g(O,B){let q=(_s(n+3,O,B)-.5)*.025;return{t:qi(m,O/420,B/420,2)+q,u:qi(f,O/380,B/380,2)-q}}function P(O,B,q=y(O,B)){if(q<Dn-1)return"ocean";let{t:K,u:rt}=g(O,B);return K<-.3?"snow":K>.28&&rt<.05?"desert":rt>.12?"forest":"plains"}let F=null;function w(){if(F)return F;let O=(B,q)=>{let K=y(B,q);return K>=Dn+2&&Math.abs(y(B+1,q)-K)<2&&Math.abs(y(B,q+1)-K)<2};for(let B=0;B<400;B+=2)for(let q=0;q<Math.max(1,B*2);q++){let K=q/Math.max(1,B*2)*Math.PI*2,rt=Math.round(Math.cos(K)*B),$=Math.round(Math.sin(K)*B);if(O(rt,$)&&O(rt+3,$+2))return F={x:rt+.5,y:y(rt,$)+1,z:$+.5,stele:{x:rt+3,y:y(rt+3,$+2)+1,z:$+2},portal:{x:rt-3,y:Math.max(Dn+1,y(rt-3,$+2))+1,z:$+2}},F}return F={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},F}function R(O,B){let q=[],K=O*16,rt=B*16,$=Math.floor((K-80)/Ar),et=Math.floor((K+16+80)/Ar),ot=Math.floor((rt-80)/Ar),wt=Math.floor((rt+16+80)/Ar);for(let Ct=ot;Ct<=wt;Ct++)for(let Nt=$;Nt<=et;Nt++){let _t=xt=>Hn(n+707,Nt,xt,Ct);if(_t(0)>.25)continue;let Rt=(Nt+_t(1))*Ar,G=(Ct+_t(2))*Ar,Y=_t(3)*Math.PI,gt=40+_t(4)*30;q.push({ax:Rt-Math.cos(Y)*gt/2,az:G-Math.sin(Y)*gt/2,dx:Math.cos(Y)*gt,dz:Math.sin(Y)*gt,len:gt,floor:7+Math.floor(_t(5)*6),w:1.6+_t(6)*1.2})}return q}function E(O,B){let q=new Uint8Array(16384),K=O*16,rt=B*16,$=18,et=new Int16Array($*$);for(let Rt=-1;Rt<=16;Rt++)for(let G=-1;G<=16;G++)et[(Rt+1)*$+G+1]=y(K+G,rt+Rt);let ot=w(),wt=new Array(256);for(let Rt=0;Rt<16;Rt++)for(let G=0;G<16;G++){let Y=K+G,gt=rt+Rt,xt=et[(Rt+1)*$+G+1],bt=Math.max(Math.abs(et[(Rt+1)*$+G]-xt),Math.abs(et[(Rt+1)*$+G+2]-xt),Math.abs(et[Rt*$+G+1]-xt),Math.abs(et[(Rt+2)*$+G+1]-xt))>=3,It=wt[Rt*16+G]=P(Y,gt,xt),se=xt<=Dn+1,Wt,ft;It==="ocean"||se||It==="desert"?(Wt=r.sand,ft=r.sand):bt?(Wt=r.stone,ft=r.stone):It==="snow"?(Wt=r.snow,ft=r.dirt):(Wt=r.grass,ft=r.dirt);for(let he=0;he<=xt;he++){let Ht;if(he===0?Ht=r.bedrock:he===xt?Ht=Wt:he>=xt-3?Ht=ft:It==="desert"&&he>=xt-7?Ht=r.sandstone:Ht=r.stone,Ht===r.stone&&bt&&he>=xt-4){let ee=Hn(n,Y,he,gt);ee<.06?Ht=r.coal:ee<.09?Ht=r.iron:ee<.096&&(Ht=r.ruby)}q[me(G,he,Rt)]=Ht}for(let he=xt+1;he<=Dn;he++)q[me(G,he,Rt)]=he===Dn&&It==="snow"?r.ice:r.water}D(q,O,B,et,$);for(let Rt=0;Rt<Tm.length;Rt++){let G=Tm[Rt],Y=r[G.ore];for(let gt=0;gt<G.count;gt++){let xt=Wt=>Hn(n+31*Rt+Wt,O*977+gt,Wt,B*131+gt);if(xt(9)>G.chance)continue;let bt=Math.floor(xt(1)*16),It=G.y0+Math.floor(xt(2)*(G.y1-G.y0)),se=Math.floor(xt(3)*16);for(let Wt=0;Wt<G.size;Wt++){bt>=0&&bt<16&&se>=0&&se<16&&It>0&&It<64&&q[me(bt,It,se)]===r.stone&&(q[me(bt,It,se)]=Y);let ft=Math.floor(xt(10+Wt)*6);ft===0?bt++:ft===1?bt--:ft===2?It++:ft===3?It--:ft===4?se++:se--}}}let Ct=e?J.chunk(O,B):[];b(q,O,B,et,$,wt,ot,Ct);for(let Rt of Ct)bm(q,O,B,Rt,e,r,z);if(Q)for(let Rt of Q.chunk(O,B))wm(q,O,B,Rt,e,r.byId);let Nt=ot.stele;if(Math.floor(Nt.x/16)===O&&Math.floor(Nt.z/16)===B){let Rt=Nt.x-K,G=Nt.z-rt;q[me(Rt,Nt.y,G)]=r.stele,q[me(Rt,Nt.y+1,G)]=r.stele}let _t=ot.portal;if(r.portal&&_t&&Math.floor(_t.x/16)===O&&Math.floor(_t.z/16)===B){let Rt=_t.x-K,G=_t.z-rt;for(let Y=Math.max(1,_t.y-3);Y<_t.y;Y++)(!q[me(Rt,Y,G)]||q[me(Rt,Y,G)]===r.water)&&(q[me(Rt,Y,G)]=r.stone);q[me(Rt,_t.y,G)]=r.portal,q[me(Rt,_t.y+1,G)]=r.portal}return q}function D(O,B,q,K,rt){let $=B*16,et=q*16,ot=4,wt=16/ot+1,Ct=64/ot+1,Nt=new Float32Array(wt*wt*Ct);for(let G=0;G<Ct;G++)for(let Y=0;Y<wt;Y++)for(let gt=0;gt<wt;gt++){let xt=$+gt*ot,bt=G*ot,It=et+Y*ot,se=d(xt/22,bt/14,It/22)-.5,Wt=x(xt/22,bt/14,It/22)-.5;Nt[(G*wt+Y)*wt+gt]=se*se+Wt*Wt}let _t=(G,Y,gt)=>Nt[(Y*wt+gt)*wt+G],Rt=R(B,q);for(let G=0;G<16;G++)for(let Y=0;Y<16;Y++){let gt=K[(G+1)*rt+Y+1],xt=gt<=Dn+1,bt=xt?gt-5:gt,It=Y>>2,se=G>>2,Wt=(Y&3)/ot,ft=(G&3)/ot;for(let ee=3;ee<=bt;ee++){let de=ee>>2,Je=(ee&3)/ot,ye=_t(It,de,se)+(_t(It+1,de,se)-_t(It,de,se))*Wt,Fe=_t(It,de,se+1)+(_t(It+1,de,se+1)-_t(It,de,se+1))*Wt,H=_t(It,de+1,se)+(_t(It+1,de+1,se)-_t(It,de+1,se))*Wt,ke=_t(It,de+1,se+1)+(_t(It+1,de+1,se+1)-_t(It,de+1,se+1))*Wt;if((ye+(Fe-ye)*ft)*(1-Je)+(H+(ke-H)*ft)*Je<.008){let U=me(Y,ee,G);O[U]!==r.bedrock&&O[U]!==r.water&&(O[U]=0)}}if(!Rt.length||xt)continue;let he=$+Y,Ht=et+G;for(let ee of Rt){let de=Math.max(0,Math.min(1,((he-ee.ax)*ee.dx+(Ht-ee.az)*ee.dz)/(ee.len*ee.len))),Je=ee.ax+ee.dx*de,ye=ee.az+ee.dz*de,Fe=Math.hypot(he-Je,Ht-ye),H=ee.w*Math.sin(Math.PI*de);if(Fe<H)for(let ke=ee.floor+Math.floor(Fe*2);ke<=gt;ke++){let ve=me(Y,ke,G);O[ve]!==r.water&&(O[ve]=0)}}}}function b(O,B,q,K,rt,$,et,ot){let wt=B*16,Ct=q*16;for(let Nt=0;Nt<16;Nt++)for(let _t=0;_t<16;_t++){let Rt=wt+_t,G=Ct+Nt,Y=K[(Nt+1)*rt+_t+1],gt=$[Nt*16+_t];if(Y+1>=64||Math.hypot(Rt-et.x,G-et.z)<48)continue;let xt=O[me(_t,Y,Nt)],bt=me(_t,Y+1,Nt);if(O[bt])continue;let It=_s(n+11,Rt,G),se=_s(n+13,Rt,G);xt===r.grass?It<.012&&o.length?O[bt]=o[Math.floor(se*o.length)]:It<(gt==="plains"?.1:.05)&&r.tallgrass?O[bt]=r.tallgrass:gt==="forest"&&It<.08&&r.fern?O[bt]=r.fern:gt==="forest"&&It<.084&&r.mushR&&(O[bt]=se<.5?r.mushR:r.mushB):xt===r.sand&&gt==="desert"&&Y>Dn+1&&It<.008&&r.deadbush&&(O[bt]=r.deadbush)}for(let Nt=2;Nt<14;Nt++)for(let _t=2;_t<14;_t++){let Rt=wt+_t,G=Ct+Nt,Y=K[(Nt+1)*rt+_t+1],gt=$[Nt*16+_t],xt=O[me(_t,Y,Nt)];if(Math.abs(Rt-et.x)<7&&Math.abs(G-et.z)<7||ot.some(Wt=>Math.abs(Rt-Wt.x)<mi+2&&Math.abs(G-Wt.z)<mi+2))continue;let bt=_s(n+7,Rt,G),It=_s(n+9,Rt,G);if(gt==="desert"&&xt===r.sand&&Y>Dn+1&&bt<.008&&r.cactus){let Wt=1+Math.floor(It*3);for(let ft=Y+1;ft<=Y+Wt&&ft<64;ft++)O[me(_t,ft,Nt)]=r.cactus;continue}if(gt==="snow"&&xt===r.snow&&bt<.02){N(O,_t,Nt,Y,5+Math.floor(It*3));continue}let se=gt==="forest"?.035:gt==="plains"?.003:0;xt===r.grass&&bt<se&&T(O,_t,Nt,Y,Rt,G,4+Math.floor(It*2))}}function T(O,B,q,K,rt,$,et){let ot=K+et;if(!(ot+2>=64)){for(let wt=ot-2;wt<=ot+1;wt++){let Ct=wt>=ot?1:2;for(let Nt=-Ct;Nt<=Ct;Nt++)for(let _t=-Ct;_t<=Ct;_t++){if(Ct===2&&Math.abs(_t)===2&&Math.abs(Nt)===2&&Hn(n,rt+_t,wt,$+Nt)<.6)continue;let Rt=me(B+_t,wt,q+Nt);O[Rt]===r.air&&(O[Rt]=r.leaves)}}O[me(B,K,q)]=r.dirt;for(let wt=K+1;wt<=ot;wt++)O[me(B,wt,q)]=r.log}}function N(O,B,q,K,rt){let $=K+rt;if(!($+2>=64)){for(let et=K+2;et<=$+1;et++){let ot=$+1-et,wt=ot>=4?2:ot>=1?1:0;for(let Ct=-wt;Ct<=wt;Ct++)for(let Nt=-wt;Nt<=wt;Nt++){if(wt===2&&Math.abs(Nt)+Math.abs(Ct)>3)continue;let _t=me(B+Nt,et,q+Ct);O[_t]===r.air&&(O[_t]=r.sleaves)}}O[me(B,K,q)]=r.dirt;for(let et=K+1;et<=$;et++)O[me(B,et,q)]=r.slog}}let z={height:y,baseHeight:p,biomeOf:P,climate:g,genChunk:E,findSpawn:w,SEA:Dn},J=Mm(n,z,e);z.villages=J;let Q=e&&e.ruins?Sm(n,z,e):null;return z.ruins=Q,z}function Nu(n,t,e,i,s,r,o){let a=i/2,c=n-a,l=n+a,m=t,f=t+s,d=e-a,x=e+a,p=Math.floor(c),M=Math.floor(l-1e-6),y=Math.floor(m),g=Math.floor(f-1e-6),P=Math.floor(d),F=Math.floor(x-1e-6),w=!1;for(let R=y;R<=g;R++)for(let E=P;E<=F;E++)for(let D=p;D<=M;D++){let b=r(D,R,E);if(!b)continue;let T=b===!0?Cb:b;for(let N of T){let z=D+N[0],J=R+N[1],Q=E+N[2],O=D+N[3],B=R+N[4],q=E+N[5];if(!(O<=c+1e-6||z>=l-1e-6||B<=m+1e-6||J>=f-1e-6||q<=d+1e-6||Q>=x-1e-6)){if(!o)return!0;w=!0,o.push([z,J,Q,O,B,q])}}}return w}var Cb=[[0,0,0,1,1,1]],No=(n,t,e,i,s,r)=>Nu(n,t,e,i,s,r,null),Im=(n,t,e=.6,i=1.8)=>!No(n.x,n.y,n.z,e,i,t);function fc(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,c=r/2,l=!1,m=0,f=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,d=Math.max(1,Math.ceil(f/.3)),x=e/d,p=[];for(let M=0;M<d;M++){let y=t.y*x;y&&(p.length=0,Nu(n.x,n.y+y,n.z,r,o,i,p)?(y<0?(n.y=Math.max(...p.map(g=>g[4])),l=!0):n.y=Math.min(...p.map(g=>g[1]))-o,t.y=0):n.y+=y);for(let g of["x","z"]){let P=t[g]*x;if(!P)continue;let F={x:n.x,y:n.y,z:n.z};if(F[g]+=P,p.length=0,!Nu(F.x,F.y,F.z,r,o,i,p)){n[g]=F[g];continue}if(a&&(l||s.grounded)){let R=Math.max(...p.map(E=>E[4]));if(R-n.y>0&&R-n.y<=1.01&&!No(F.x,R,F.z,r,o,i)&&!No(n.x,R,n.z,r,o,i)){m+=R-n.y,n.y=R,n[g]=F[g];continue}}let w=g==="x"?0:2;n[g]=P>0?Math.min(...p.map(R=>R[w]))-c-1e-4:Math.max(...p.map(R=>R[w+3]))+c+1e-4,No(n.x,n.y,n.z,r,o,i)&&(n[g]=F[g]-P),t[g]=0}}return!l&&t.y<=0&&No(n.x,n.y-.02,n.z,r,o,i)&&(l=!0),{onGround:l,stepped:m}}function Rb(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],c=null;for(let l of r){let m=[e+l[0],i+l[1],s+l[2]],f=[e+l[3],i+l[4],s+l[5]],d=0,x=1/0,p=-1,M=!0;for(let y=0;y<3&&M;y++){if(Math.abs(a[y])<1e-12){(o[y]<m[y]||o[y]>f[y])&&(M=!1);continue}let g=(m[y]-o[y])/a[y],P=(f[y]-o[y])/a[y];g>P&&([g,P]=[P,g]),g>d&&(d=g,p=y),P<x&&(x=P),d>x&&(M=!1)}if(M&&(!c||d<c.t)){let y=[0,0,0];p>=0&&(y[p]=-Math.sign(a[p])),c={t:d,face:p>=0?y:null}}}return c}function Er(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),c=Math.floor(n.z),l=Math.sign(t.x),m=Math.sign(t.y),f=Math.sign(t.z),d=l?Math.abs(1/t.x):1/0,x=m?Math.abs(1/t.y):1/0,p=f?Math.abs(1/t.z):1/0,M=l?(l>0?o+1-n.x:n.x-o)*d:1/0,y=m?(m>0?a+1-n.y:n.y-a)*x:1/0,g=f?(f>0?c+1-n.z:n.z-c)*p:1/0,P=[0,0,0],F=0;for(;F<=e;){let w=i(o,a,c);if(w&&s(w)){let R=r&&r(w);if(!R)return{x:o,y:a,z:c,n:w,face:P,dist:F};let E=Rb(n,t,o,a,c,R);if(E&&E.t<=e)return{x:o,y:a,z:c,n:w,face:E.face||P,dist:E.t}}M<y&&M<g?(o+=l,F=M,M+=d,P=[-l,0,0]):y<g?(a+=m,F=y,y+=x,P=[0,-m,0]):(c+=f,F=g,g+=p,P=[0,0,-f])}return null}var ku={};ri(ku,{ACC:()=>Dm,BOOST:()=>Uu,BRAKE:()=>Um,CONN:()=>gi,DECAY:()=>Fm,DIR:()=>Fo,FRIC:()=>Nm,MAX:()=>Uo,OPP:()=>Cr,SLOPE_G:()=>Fu,UP:()=>Ui,blockId:()=>Oo,connect:()=>pc,isStraight:()=>Ou,linked:()=>Om,mount:()=>zu,next:()=>zo,pos:()=>mc,shapeOf:()=>Tr,step:()=>Bu});var gi={ns:["n","s"],ew:["e","w"],ne:["n","e"],nw:["n","w"],se:["s","e"],sw:["s","w"],asc_n:["n","s"],asc_s:["s","n"],asc_e:["e","w"],asc_w:["w","e"]},Ui={asc_n:"n",asc_s:"s",asc_e:"e",asc_w:"w"},Fo={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]},Cr={n:"s",s:"n",e:"w",w:"e"},Ib=["ns","ew","ne","nw","se","sw"],Pm={n:[.5,0],s:[.5,1],e:[1,.5],w:[0,.5]},Dm=3,Uo=6,Uu=11,Nm=.8,Um=6,Fm=1.5,Fu=2.5,Ou=n=>n==="ns"||n==="ew"||!!Ui[n],Oo=(n,t)=>(n?"powered_rail":"rail")+(t==="ns"?"":"_"+t),dc=(n,t)=>gi[n].find(e=>e!==t);function Tr(n,t){return!t||n===t?n==="n"||n==="s"?"ns":"ew":Ib.find(e=>gi[e].includes(n)&&gi[e].includes(t))||null}function zo(n,t,e,i,s,r){let[o,a]=Fo[s];for(let c of Ui[r]===s?[1]:[0,-1]){let l=n(t+o,e+c,i+a);if(l&&gi[l.shape].includes(Cr[s])&&Ui[l.shape]===Cr[s]==(c===-1))return{x:t+o,y:e+c,z:i+a,r:l}}return null}function Om(n,t,e,i){let s=n(t,e,i);return s?gi[s.shape].filter(r=>zo(n,t,e,i,r,s.shape)):[]}function Lm(n){let t=n.filter(e=>e.dy===1);if(t.length>1)return null;if(t.length){let e=t[0].d,i=n.find(s=>s!==t[0]);return!i||i.d===Cr[e]?"asc_"+e:null}return n.length===2?Tr(n[0].d,n[1].d):Tr(n[0].d)}function pc(n,t,e,i,s,r="n"){let o=[];for(let l of["n","e","s","w"]){let[m,f]=Fo[l],d=Cr[l];for(let x of[0,1,-1]){let p=t+m,M=e+x,y=i+f,g=n(p,M,y);if(!g)continue;if(gi[g.shape].includes(d)&&Ui[g.shape]===d==(x===-1)){o.push({d:l,dy:x,pri:0});break}let P=Om(n,p,M,y);if(P.length>=2)continue;let F=null;if(x===-1?F=!P.length||P[0]===l?"asc_"+d:null:Ui[g.shape]&&P.includes(Ui[g.shape])||(F=P.length?Tr(P[0],d):Tr(d)),F&&(!g.powered||Ou(F))){o.push({d:l,dy:x,pri:1,ns:F,at:[p,M,y]});break}}}o.sort((l,m)=>l.pri-m.pri);let a=[];for(let l of o){if(a.length===2)break;let m=Lm(a.concat([l]));!m||s&&!Ou(m)||a.push(l)}return{shape:a.length?Lm(a):Tr(r),updates:a.filter(l=>l.pri===1).map(l=>[l.at[0],l.at[1],l.at[2],l.ns])}}function zu(n,t,e,i,s,r,o=()=>!1){let a=gi[n],c=m=>Fo[m][0]*s+Fo[m][1]*r+(o(m)?.01:0),l=c(a[0])>=c(a[1])?a[0]:a[1];return{x:t,y:e,z:i,shape:n,from:l===a[0]?a[1]:a[0],s:.5,v:0,lastIn:0}}function Bu(n,t,e,i){let s=i(n.x,n.y,n.z);if(!s)return n.v=0,n;for(n.shape=s.shape,gi[s.shape].includes(n.from)||(n.from=gi[s.shape][0]),e<-.1&&n.lastIn>=-.1&&n.v===0&&(n.from=dc(s.shape,n.from),n.s=1-n.s),n.lastIn=e,s.powered&&(n.v=Math.max(n.v,Uu)),e>.1?n.v<Uo&&(n.v=Math.min(Uo,n.v+Dm*t)):e<-.1?n.v=Math.max(0,n.v-Um*t):n.v=Math.max(0,n.v-Nm*t),n.v>Uo&&!s.powered&&(n.v=Math.max(Uo,n.v-Fm*t)),Ui[s.shape]&&(n.v+=(dc(s.shape,n.from)===Ui[s.shape]?-Fu:Fu)*t,n.v<0&&(n.from=dc(s.shape,n.from),n.s=1-n.s,n.v=-n.v)),n.s+=n.v*t;n.s>=1;){let r=dc(s.shape,n.from),o=zo(i,n.x,n.y,n.z,r,s.shape);if(o)n.x=o.x,n.y=o.y,n.z=o.z,n.from=Cr[r],n.s-=1,s=o.r,n.shape=s.shape,s.powered&&(n.v=Math.max(n.v,Uu));else{n.s=1,n.v=0;break}}return n}function mc(n){let t=gi[n.shape],e=t.includes(n.from)?n.from:t[0],i=t[0]===e?t[1]:t[0],s=Pm[e],r=Pm[i],o=[.5,.5],a=Math.max(0,Math.min(1,n.s)),[c,l,m]=a<.5?[s,o,a*2]:[o,r,a*2-1],f=c[0]+(l[0]-c[0])*m,d=c[1]+(l[1]-c[1])*m,x=Ui[n.shape],p=x?x==="n"?1-d:x==="s"?d:x==="e"?f:1-f:0,M=x?i===x?1:-1:0;return{x:n.x+f,y:n.y+p,z:n.z+d,yaw:Math.atan2(-(l[0]-c[0]),-(l[1]-c[1])),pitch:Math.atan2(M,1)*(x?1:0)}}var Xu={};ri(Xu,{WINDOW:()=>Pb,create:()=>Vu,reel:()=>Gu,roll:()=>Wu,tick:()=>Hu});var Pb=1.3,zm=n=>3+n()*6;function Vu(n=Math.random){return{phase:"wait",t:0,biteAt:zm(n),rnd:n}}function Hu(n,t){return n.t+=t,n.phase==="wait"&&n.t>=n.biteAt?(n.phase="bite",n.t=0,"bite"):n.phase==="bite"&&n.t>1.3?(n.phase="wait",n.t=0,n.biteAt=zm(n.rnd),"escape"):null}var Gu=n=>n&&n.phase==="bite"?"catch":"early";function Wu(n,t=Math.random){let e=n.reduce((s,r)=>s+r.w,0),i=t()*e;for(let s of n)if(i-=s.w,i<0)return s;return n[n.length-1]}function Bm(n){return{stats:Object.assign({},n&&n.stats),done:Object.assign({},n&&n.done)}}function km(n,t,e=1){n.stats[t]=(n.stats[t]||0)+e}function Vm(n,t,e=Date.now()){let i=[];for(let s of t)!n.done[s.id]&&(n.stats[s.stat]||0)>=s.need&&(n.done[s.id]=e,i.push(s));return i}var Hm=(n,t)=>Math.min(t.need,n.stats[t.stat]||0);function Gm(n,t,e,i,s=5){let r=0;for(let o of n)Math.abs(o[0]-t)<=s&&Math.abs(o[1]-e)<=s&&Math.abs(o[2]-i)<=s&&r++;return r}function Wm(n){let t=new Uint8Array(256);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let s=0;for(let r=63;r>=0;r--){let o=n[me(i,r,e)];if(o){s=o;break}}t[e*16+i]=s}return t}var Xm=n=>btoa(String.fromCharCode.apply(null,n)),qm=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));var Db=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],gc=class{constructor(t,e){this.reg=t,this.tops=new Map,this.tiles=new Map,this.portals=new Map,this.dirty=!1,this.rgb=[];for(let i of t.blocks)this.rgb[i.n]=Db(i.colors.top);if(e&&e.tops)for(let i in e.tops)try{this.tops.set(i,qm(e.tops[i]))}catch{}if(e&&Array.isArray(e.portals))for(let i of e.portals)this.portals.set(i.x+","+i.z,i)}scan(t,e,i=4){let s=0;for(let[r,o]of t.chunks){if(s>=i)break;if(!o.vox||this.tops.has(r)&&!(e&&e.has(r)))continue;e&&e.delete(r);let a=Wm(o.vox);this.tops.set(r,a),this.tiles.delete(r),this.dirty=!0,s++;let[c,l]=ym(r);for(let[m,f]of[...this.portals])Math.floor(f.x/16)===c&&Math.floor(f.z/16)===l&&this.portals.delete(m);for(let m=0;m<256;m++){let f=this.reg.get(a[m]);if(f&&(f.interact==="portal"||f.interact==="shadow_portal")){let d=c*16+m%16,x=l*16+Math.floor(m/16);this.portals.set(d+","+x,{x:d,z:x,name:f.name_zh})}}}}tile(t){let e=this.tiles.get(t);if(e)return e;let i=this.tops.get(t);if(!i)return null;e=document.createElement("canvas"),e.width=e.height=16;let s=e.getContext("2d"),r=s.createImageData(16,16);for(let o=0;o<256;o++){let a=this.rgb[i[o]]||[239,235,221],c=o*4,l=.95+(o*2654435761>>>28)/16*.1;r.data[c]=a[0]*l,r.data[c+1]=a[1]*l,r.data[c+2]=a[2]*l,r.data[c+3]=i[o]?255:0}return s.putImageData(r,0,0),this.tiles.set(t,e),e}draw(t,e,i,s,r,o){t.imageSmoothingEnabled=!1;let a=e-r/2/s,c=i-o/2/s,l=e+r/2/s,m=i+o/2/s;for(let f=Math.floor(c/16);f<=Math.floor(m/16);f++)for(let d=Math.floor(a/16);d<=Math.floor(l/16);d++){let x=this.tile(Di(d,f));x&&t.drawImage(x,Math.round((d*16-a)*s),Math.round((f*16-c)*s),Math.ceil(16*s),Math.ceil(16*s))}return{x0:a,z0:c}}explored(t,e){return this.tops.has(Di(Math.floor(t/16),Math.floor(e/16)))}serialize(){let t={};for(let[e,i]of this.tops)t[e]=Xm(i);return this.dirty=!1,{tops:t,portals:[...this.portals.values()]}}};function qu(n,t,e,i,s,r){let o=Math.atan2(-Math.cos(i),-Math.sin(i));n.save(),n.translate(t,e),n.rotate(o),n.fillStyle=r,n.strokeStyle="#EFEBDD",n.lineWidth=2,n.beginPath(),n.moveTo(s,0),n.lineTo(-s*.7,s*.65),n.lineTo(-s*.35,0),n.lineTo(-s*.7,-s*.65),n.closePath(),n.stroke(),n.fill(),n.restore()}var Zu={};ri(Zu,{ARENA_R:()=>Bo,H0:()=>xi,LAIR:()=>yi,findFrame:()=>$u,makeShadowTerrain:()=>Yu});var xi=22,yi={x:0,z:40},Bo=14;function Yu(n,t){let e=f=>t.num(f),i={stone:e("shadow_stone"),moss:e("shadow_moss"),vein:e("shadow_vein"),ore:e("dark_crystal_ore"),bedrock:e("bedrock"),frame:e("dark_crystal"),portal:e("shadow_portal"),bricks:e("shadow_bricks")},s=Ni(n+11),r=Ni(n+23),o=(f,d)=>f<d?1:f<d+8?1-(f-d)/8:0;function a(f,d){let x=xi+qi(s,f/64,d/64,3)*10,p=Math.max(o(Math.hypot(f-.5,d-.5),9),o(Math.hypot(f-yi.x,d-yi.z),Bo+2));return x=x*(1-p)+xi*p,Math.max(6,Math.min(54,Math.round(x)))}let c=new Set;for(let f=0;f<8;f++)c.add(Math.round(yi.x+Math.cos(f*Math.PI/4)*Bo)+","+Math.round(yi.z+Math.sin(f*Math.PI/4)*Bo));function l(f,d){let x=new Uint8Array(16384),p=f*16,M=d*16;for(let y=0;y<16;y++)for(let g=0;g<16;g++){let P=p+g,F=M+y,w=a(P,F),R=Math.hypot(P-.5,F-.5),E=Math.hypot(P-yi.x,F-yi.z);for(let D=0;D<=w;D++){let b=D===0?i.bedrock:D===w?i.moss:i.stone;if(b===i.stone){let T=Hn(n,P,D,F);D<16&&T<.014?b=i.ore:T>.995&&(b=i.vein)}x[me(g,D,y)]=b}if(R>6&&Math.abs(r(P/30,F/30))<.035&&(x[me(g,w,y)]=i.vein),E<Bo-1&&(x[me(g,w,y)]=(Math.floor(P)+Math.floor(F))%2?i.bricks:i.stone),c.has(P+","+F)){for(let D=w+1;D<=w+4;D++)x[me(g,D,y)]=i.bricks;x[me(g,w+5,y)]=i.vein}if(F===0&&P>=-1&&P<=2)for(let D=xi+1;D<=xi+5;D++){let b=P>=0&&P<=1&&D>=xi+2&&D<=xi+4;x[me(g,D,y)]=b?i.portal:i.frame}}return x}let m={x:1,y:xi+1,z:2.5,stele:{x:1,y:xi+1,z:10}};return{height:a,baseHeight:a,biomeOf:()=>"shadow",climate:()=>({t:0,u:0}),genChunk:l,findSpawn:()=>m,SEA:0,villages:{around:()=>[],chunk:()=>[]}}}function $u(n,t,e,i,s,r=o=>o===0){for(let o of[[1,0],[0,1]])for(let a=-2;a<=1;a++)for(let c=-4;c<=1;c++){let l=t+o[0]*a,m=i+o[1]*a,f=e+c,d=(M,y)=>[l+o[0]*M,f+y,m+o[1]*M],x=[];for(let M=0;M<2;M++)for(let y=0;y<3;y++)x.push(d(M,y));if(!x.every(M=>r(n(M[0],M[1],M[2]))))continue;let p=[];for(let M=0;M<3;M++)p.push(d(-1,M),d(2,M));for(let M=0;M<2;M++)p.push(d(M,-1),d(M,3));if(p.every(M=>n(M[0],M[1],M[2])===s)&&p.some(M=>M[0]===t&&M[1]===e&&M[2]===i))return x}return null}var vc={};ri(vc,{HOTBAR:()=>Ju,SIZE:()=>xc,add:()=>Sn,canAdd:()=>Vo,count:()=>Qn,craft:()=>ju,craftable:()=>_c,createInventory:()=>ko,deserialize:()=>yc,moveBetween:()=>Qu,moveSlot:()=>Ku,remove:()=>Os,serialize:()=>Ho,takeFromSlot:()=>ti});var xc=36,Ju=9;function ko(n=36){return{slots:new Array(n).fill(null)}}function Sn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function Qn(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function Os(n,t,e){if(Qn(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function ti(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Ku(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function Vo(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return Sn(s,t,e,i)===0}var Ho=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function yc(n,t=36){let e=ko(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function _c(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(Qn(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function ju(n,t,e=()=>64,i){let s=_c(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)Os(n,o,t.in[o]);return Sn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Qu(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function Nb(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var Rr=(n,t)=>n.owned.includes(t),Ym=(n,t)=>n?t?2:1:0;function Nn(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function zs(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function $m(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Zm(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&Rr(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(zs(n,e.price),n.owned.push(e.id),{ok:!0}):Vo(t,e.id,e.qty,i)?(zs(n,e.price),Sn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Jm=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Km(n){let t=Nb(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function Qm(n){let t=()=>n&&n.KidsAuth,e=()=>n&&n.KidsCoins;return{loggedIn:()=>{try{return!!(t()&&t().isLoggedIn())}catch{return!1}},ready(){let i=e();return this.loggedIn()&&!!i&&typeof i.balance=="function"&&typeof i.spend=="function"},balance:()=>{try{let i=e().balance();return typeof i=="number"?i:null}catch{return null}},spend:(i,s)=>e().spend({amount:i,item:s}),report:i=>{try{e().report&&e().report(i)}catch{}}}}function t0(n,{mode:t="local",member:e=null}={}){return t==="member"&&e&&e.ready()?{source:"member",balance:()=>e.balance()??0,earn:(s,r)=>(e.report({type:"game",item:r||"hero-world",correct:s,total:s}),e.balance()),canSpend:s=>(e.balance()??0)>=s,spend:async(s,r)=>{try{let o=await e.spend(s,r);return o&&o.ok?{ok:!0}:{ok:!1,reason:o&&o.reason||"coins"}}catch{return{ok:!1,reason:"offline"}}}}:{source:"local",balance:()=>n.coins,earn:s=>Nn(n,s),canSpend:s=>n.coins>=s,spend:async s=>zs(n,s)?{ok:!0}:{ok:!1,reason:"coins"}}}function e0(){let n=()=>{};return{online:!1,join:()=>Promise.resolve({ok:!1,reason:"offline"}),leave:n,sendState:n,sendBlock:n,sendEmote:n,on:n}}var of={};ri(of,{createStory:()=>tf,currentMain:()=>nf,dailyPicks:()=>n0,dailyProgress:()=>rf,restartTutorial:()=>ef,skipTutorial:()=>Mc,tick:()=>sf});function tf(n){return n=n||{},{tut:n.tut||{step:0,base:null,done:!1},main:n.main|0,daily:n.daily||null}}function n0(n,t,e=3){let i=2166136261;for(let o of String(t))i=Math.imul(i^o.charCodeAt(0),16777619)>>>0;let s=n.map((o,a)=>a),r=[];for(;r.length<Math.min(e,n.length);)i=Math.imul(i^i>>>13,2654435761)>>>0,r.push(s.splice(i%s.length,1)[0]);return r.map(o=>n[o].id)}var ef=n=>{n.tut={step:0,base:null,done:!1}},Mc=(n,t)=>{n.tut={step:t.tutorial.length,base:null,done:!0}},nf=(n,t)=>t.main[n.main]||null;function sf(n,t,e,i){let s=[];if(!n.tut.done){let r=t.tutorial[n.tut.step];r?(n.tut.base==null&&(n.tut.base=e(r.stat)),e(r.stat)-n.tut.base>=r.need&&(s.push({kind:"tut",q:r}),n.tut.step++,n.tut.base=null,n.tut.step>=t.tutorial.length&&(n.tut.done=!0))):n.tut.done=!0}for(;n.main<t.main.length&&e(t.main[n.main].stat)>=t.main[n.main].need;)s.push({kind:"main",q:t.main[n.main]}),n.main++;if(!n.daily||n.daily.date!==i){let r=n0(t.daily,i);n.daily={date:i,picks:r,base:Object.fromEntries(r.map(o=>{let a=t.daily.find(c=>c.id===o);return[o,e(a.stat)]})),done:[]}}for(let r of n.daily.picks){if(n.daily.done.includes(r))continue;let o=t.daily.find(a=>a.id===r);o&&e(o.stat)-n.daily.base[r]>=o.need&&(n.daily.done.push(r),s.push({kind:"daily",q:o}))}return s}var rf=(n,t,e,i)=>{let s=t.daily.find(r=>r.id===i);return Math.min(s.need,Math.max(0,e(s.stat)-(n.daily&&n.daily.base[i]||0)))};var Wo=[{name_zh:"\u55AE\u5B57",modules:["words"],types:["zh2en","en2zh","zh2en-type"]},{name_zh:"\u55AE\u5B57\uFF0B\u6587\u6CD5",modules:["words","grammar"],types:["grammar-fill","zh2en-type","en2zh"]},{name_zh:"\u53E5\u578B\uFF0B\u7247\u8A9E",modules:["words","grammar","patterns","phrases"],types:["pattern-choose","phrase-fill","grammar-fill","zh2en-type"]}],Go=100,i0={choice:25,typed:40},Ob=5,af=100;function s0(){return{phase:0,hp:Go,retry:[],done:!1}}function r0(n,t,e,i){if(n.done)return{done:!0};if(!t)return n.hp=Math.min(Go,n.hp+Ob),i&&!n.retry.includes(i)&&n.retry.push(i),{ok:!1};i&&(n.retry=n.retry.filter(r=>r!==i));let s=e?i0.typed:i0.choice;return n.hp-=s,n.hp>0?{ok:!0,dmg:s}:n.phase<Wo.length-1?(n.phase++,n.hp=Go,{ok:!0,dmg:s,phaseUp:n.phase}):(n.hp=0,n.done=!0,{ok:!0,dmg:s,done:!0})}var lf=[{body:"#4A3A6B",belly:"#9C8AC8",wing:"#6B5A95"},{body:"#7A2E3A",belly:"#E09A7F",wing:"#A04A55"},{body:"#2E4A7A",belly:"#9CC4E8",wing:"#4A6EA8"}];function Bb(){let n=document.createElement("canvas");n.width=128,n.height=80;let t=n.getContext("2d");for(let i of[34,94])t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(i,36,22,24,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(i+4,40,10,0,7),t.fill(),t.fillStyle="#EFEBDD",t.beginPath(),t.arc(i+8,35,3,0,7),t.fill();t.strokeStyle="#151714",t.lineWidth=4,t.beginPath(),t.arc(64,60,10,.2,Math.PI-.2),t.stroke();let e=new Jn(n);return e.colorSpace=on,e}function o0(){let n=new mn,t=[],e=(a,c)=>{let l=new vn({color:a});return l.userData.base=new le(a),l.userData.role=c,t.push(l),l},i=(a,c,l,m,f,d,x,p,M=n)=>{let y=new De(new je(a,c,l),e(m,f));return y.position.set(d,x,p),M.add(y),y},s=lf[0];i(2,1.4,2.8,s.body,"body",0,1.3,.2),i(1.6,.2,2.2,s.belly,"belly",0,.62,.2),i(.8,.8,1.2,s.body,"body",0,2,-1.4),i(1.3,1,1.3,s.body,"body",0,2.5,-2.2),i(.9,.4,.5,s.belly,"belly",0,2.2,-2.95);let r=new De(new je(1.15,.72,.02),new vn({map:Bb(),transparent:!0}));r.position.set(0,2.62,-2.87),n.add(r);for(let a of[-1,1])i(.16,.42,.16,"#E0352B","accent",a*.42,3.18,-2.1),i(.4,.7,.4,s.wing,"wing",a*.7,.35,-.6),i(.4,.7,.4,s.wing,"wing",a*.7,.35,1);for(let a=0;a<3;a++)i(.22,.3,.3,"#E0352B","accent",0,2.12,-.6+a*.8);i(.7,.6,1.2,s.body,"body",0,1.1,2.1),i(.45,.4,1,s.body,"body",0,.95,3.1),i(.6,.12,.6,"#E0352B","accent",0,.95,3.75);let o=[-1,1].map(a=>{let c=new mn;return c.position.set(a*1,1.9,.2),n.add(c),i(2.4,.14,1.6,s.wing,"wing",a*1.2,0,0,c).rotation.x=-.55,i(2.4,.16,.16,"#E0352B","accent",a*1.2,.44,-.68,c),c});return n.userData={wings:o,mats:t,hitT:0},n.scale.setScalar(1.15),n}function a0(n,t,e,i=.9){let s=n.userData;s.hitT=Math.max(0,s.hitT-e),s.wings[0].rotation.z=.25+Math.sin(t*3)*.45,s.wings[1].rotation.z=-s.wings[0].rotation.z,n.scale.setScalar(1.15*(1+s.hitT*.3));for(let r of s.mats)r.color.copy(r.userData.base).multiplyScalar(s.hitT>0?1.4:i)}function l0(n,t){let e=lf[Math.min(lf.length-1,t)];for(let i of n.userData.mats)e[i.userData.role]&&i.userData.base.set(e[i.userData.role])}function kb(){return new Map}function c0(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function cf(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function Vb(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function h0(n){let t=kb();for(let e in n||{})t.set(e,Vb(n[e]));return t}var bc=16;var RE=18;var $i=32;function u0(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Qe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],Mt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function Hb(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function Kt(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Yi(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let c=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(c)*s*(.6+t()*.5),i+Math.sin(c)*s*(.6+t()*.5)])}Kt(n,o)}var Gb=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat","rail"]);function Wb(n,t){let e=Qe(t.color),i=u0(Hb(t.block+t.face)),s=$i;if(Gb.has(t.pattern)){Xb(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=Mt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Qe(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=Mt(e,1.12);for(let f=0;f<4;f++)Yi(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=Mt(e,.96);for(let f=0;f<4;f++)Yi(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let f=Qe(t.top);n.fillStyle=Mt(f);let d=[[0,0],[s,0]];for(let x=s;x>=0;x-=4)d.push([x,8+Math.round(i()*5)]);Kt(n,d)}if(o==="stone"||o==="bedrock")for(let f=0;f<5;f++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Yi(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let f=0;f<4;f++)n.fillStyle=Mt(e,.92),Yi(n,i,i()*s,i()*s,5);n.fillStyle=Mt(a);for(let f=0;f<5;f++)Yi(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let f=0;f<26;f++)n.fillStyle=Mt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let f=3;f<s;f+=7)n.fillStyle=Mt(e,.82),n.fillRect(f,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=Mt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let f=0;f<9;f++)n.fillStyle=Mt(e,i()<.5?.78:1.15),Yi(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.78),n.fillRect(0,f,s,1);n.fillStyle=Mt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=Mt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=Mt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=Mt([185,182,174]),Kt(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=Mt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=Mt(e,1.18,.72);for(let f=6;f<s;f+=10)n.fillRect(4+Math.floor(i()*10),f,10,2)}if(o==="gold"&&(n.fillStyle=Mt(e,1.15),Kt(n,[[0,0],[s,0],[0,s]]),n.fillStyle=Mt(e,.9),Kt(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=Mt(Qe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=Mt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=Mt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=Mt(Qe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=Mt(Qe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=Mt(a),n.fillRect(14,0,4,4)):(n.fillStyle=Mt(Qe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,10),n.fillStyle=Mt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=Mt(Qe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=Mt(a),n.fillRect(0,0,9,14))),o==="wool")for(let f=0;f<7;f++)n.fillStyle=Mt(e,i()<.5?.94:1.04),Yi(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=Mt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(a,1.3),Kt(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=Mt(Qe("#EFEBDD"),1,.8),Kt(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=Mt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let f=8;f<s;f+=9)n.fillStyle=Mt(e,.9),n.fillRect(0,f,s,2);if(o==="cactus")if(t.face==="side"){for(let f=4;f<s;f+=8)n.fillStyle=Mt(e,.82),n.fillRect(f,0,2,s);n.fillStyle=Mt(Qe("#EFEBDD"),1,.7);for(let f=0;f<6;f++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=Mt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",Kt(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",Kt(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=Mt(e,1.1),Kt(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=Mt(e,.92),Kt(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=Mt(e,.78);for(let f=0;f<s;f+=8){n.fillRect(0,f+7,s,1);let d=f/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,f,1,8)}}if(o==="mossy"){n.fillStyle=Mt(a);for(let f=0;f<6;f++)Yi(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=Mt(e,.6),Kt(n,[[4,2],[12,14],[10,15],[3,4]]),Kt(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=Mt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=Mt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=Mt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=Mt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=Mt(e,1.08),Kt(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=Mt(Qe("#D9CBB5"));for(let f=0;f<s;f+=8){n.fillRect(0,f+6,s,2);let d=f/8%2?0:8;for(let x=d;x<s;x+=16)n.fillRect(x,f,2,6)}}if(o==="checker"&&(n.fillStyle=Mt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let f=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let d of[3,18]){let x=3;for(;x<s-4;){let p=3+Math.floor(i()*3);n.fillStyle=f[Math.floor(i()*f.length)],n.fillRect(x,d+Math.floor(i()*3),p,11),x+=p+1}}n.fillStyle=Mt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.8),n.fillRect(0,f,s,1);if(o==="hay")if(t.face==="side"){for(let f=3;f<s;f+=5)n.fillStyle=Mt(e,.88),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=Mt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let f=5;f<s;f+=6)n.fillStyle=Mt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=Mt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=Mt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=Mt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),Kt(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.85),n.fillRect(f,0,1,s);n.fillStyle=Mt(Qe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=Mt(Qe("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=Mt(e),n.fillRect(0,0,s,s),n.fillStyle=Mt(Qe("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let f=7;f<s;f+=8)n.fillStyle=Mt(e,.85),n.fillRect(0,f,s,1);t.face==="side"&&(n.fillStyle=Mt(a),n.fillRect(0,11,s,3),n.fillStyle=Mt(Qe("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let f=3;f<s;f+=6)n.fillStyle=Mt(e,.72),n.fillRect(0,f,s,2);if(o==="furnace"){for(let f=0;f<4;f++)n.fillStyle=Mt(e,i()<.5?.9:1.08),Yi(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=Mt(a),n.fillRect(8,15,s-16,11),n.fillStyle=Mt(Qe("#E0352B"),1,.85),Kt(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=Mt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=Mt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=Mt(a),Kt(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let c=n.getImageData(0,0,s,s),l=c.data;for(let f=0;f<l.length;f+=4){let d=1+(i()-.5)*.09;l[f]=Math.min(255,l[f]*d),l[f+1]=Math.min(255,l[f+1]*d),l[f+2]=Math.min(255,l[f+2]*d)}n.putImageData(c,0,0);let m=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=m,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function f0(n){let t=document.createElement("canvas");t.width=t.height=$i*bc;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=$i;let a=o.getContext("2d",{willReadFrequently:!0});Wb(a,s),e.drawImage(o,r%bc*$i,Math.floor(r/bc)*$i),i[r]=o}),{canvas:t,tileCanvas:i}}function d0(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"||i.pattern==="rail"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",Kt(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",Kt(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/$i,c=(l,m,f,d,x,p,M,y)=>{r.setTransform(m*a,f*a,d*a,x*a,p,M),r.drawImage(o[l],0,0),y&&(r.fillStyle=`rgba(20,24,20,${y})`,r.fillRect(0,0,$i,$i))};c(i.tile.top,20,10,-20,10,24,4,0),c(i.tile.side,20,10,0,22,4,14,.12),c(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,c="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,Kt(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",Kt(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,Kt(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",Kt(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,Kt(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",Kt(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,Kt(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[l,m]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(l,m,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let l=0;l<4;l++)Kt(r,[[0,-18+l*5],[-5,-14+l*5],[0,-12+l*5]]),Kt(r,[[0,-18+l*5],[5,-14+l*5],[0,-12+l*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let l of[-8,0,8])r.fillRect(l-1,-6,3,8)}else if(o==="armor_helmet")r.fillStyle=a,Kt(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]]);else if(o==="armor_chest")r.fillStyle=a,Kt(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]]);else if(o==="armor_legs")r.fillStyle=a,Kt(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]]);else if(o==="armor_boots")r.fillStyle=a,Kt(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),Kt(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]]);else if(o==="dye")r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill();else if(o==="apple")r.fillStyle=a,r.beginPath(),r.arc(-4,3,11,0,7),r.arc(5,3,11,0,7),r.fill(),r.fillStyle="#8C6640",r.fillRect(-1,-14,3,8),r.fillStyle="#3E6B3A",Kt(r,[[2,-10],[12,-15],[9,-6]]),r.fillStyle="rgba(255,255,255,.3)",r.beginPath(),r.arc(-8,-1,3,0,7),r.fill();else if(o==="fish")r.fillStyle=a,r.beginPath(),r.ellipse(-3,0,14,8,0,0,7),r.fill(),Kt(r,[[9,0],[19,-9],[19,9]]),r.fillStyle="rgba(255,255,255,.25)",Kt(r,[[-12,-3],[2,-7],[-2,-1]]),r.fillStyle="#26302A",r.beginPath(),r.arc(-10,-2,2,0,7),r.fill();else if(o==="rod")r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.moveTo(-16,17),r.lineTo(14,-16),r.stroke(),r.strokeStyle="#26302A",r.lineWidth=1,r.beginPath(),r.moveTo(14,-16),r.lineTo(14,8),r.stroke(),r.fillStyle="#E0352B",r.beginPath(),r.arc(14,10,4,0,7),r.fill();else if(o==="boat")r.fillStyle=a,Kt(r,[[-19,-3],[19,-3],[13,10],[-13,10]]),r.fillStyle="rgba(0,0,0,.2)",Kt(r,[[-15,-3],[15,-3],[13,1],[-13,1]]),r.fillStyle=c,r.fillRect(-2,-14,3,11);else if(o==="minecart"){r.fillStyle=a,Kt(r,[[-16,-10],[16,-10],[13,8],[-13,8]]),r.fillStyle="rgba(0,0,0,.25)",Kt(r,[[-12,-10],[12,-10],[11,-5],[-11,-5]]),r.fillStyle="#26302A";for(let l of[-8,8])r.beginPath(),r.arc(l,10,4,0,7),r.fill()}else if(o==="saddle")r.fillStyle=a,Kt(r,[[-16,-2],[-10,-10],[-2,-6],[6,-12],[16,-4],[12,8],[-12,8]]),r.fillStyle="#26302A",r.fillRect(-2,8,4,9),r.fillStyle="#D9A63A",r.fillRect(-4,15,8,3);else if(o==="paper"){r.fillStyle=a,Kt(r,[[-13,-16],[11,-17],[14,15],[-12,16]]),r.fillStyle="rgba(20,24,20,.16)";for(let l=0;l<4;l++)r.fillRect(-8,-9+l*6,16,2)}else o==="book"?(r.fillStyle=a,Kt(r,[[-15,-15],[13,-17],[15,15],[-13,17]]),r.fillStyle="#EFEBDD",Kt(r,[[10,-14],[14,-14],[15,13],[11,14]]),r.fillStyle="#E1C04F",Kt(r,[[-8,-6],[6,-7],[6,-2],[-8,-1]])):o==="bow"?(r.strokeStyle=a,r.lineWidth=4,r.beginPath(),r.arc(-10,-10,24,-.15,Math.PI/2+.15),r.stroke(),r.strokeStyle="#EFEBDD",r.lineWidth=1.5,r.beginPath(),r.moveTo(13,-14),r.lineTo(-14,13),r.stroke()):o==="arrow"?(r.rotate(-Math.PI/4),r.fillStyle="#8C6640",r.fillRect(-1.5,-14,3,30),r.fillStyle=a,Kt(r,[[0,-22],[6,-13],[-6,-13]]),r.fillStyle="#F4EFE2",Kt(r,[[-1,10],[-7,18],[-1,16]]),Kt(r,[[1,10],[7,18],[1,16]])):o==="meat"?(r.fillStyle=a,r.beginPath(),r.ellipse(-3,2,13,10,-.4,0,7),r.fill(),r.fillStyle="#EFEBDD",r.fillRect(7,-12,5,12),r.beginPath(),r.arc(11,-13,4,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.22)",r.beginPath(),r.ellipse(-7,-1,5,3,-.4,0,7),r.fill()):o==="gem"?(r.fillStyle=a,Kt(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",Kt(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:c,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&Kt(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&Kt(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),Kt(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=c,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",Kt(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",Kt(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function p0(){let n=u0(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=$i;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,c=6+n()*20,l=n()*Math.PI;Kt(r,[[a,c],[a+Math.cos(l)*9,c+Math.sin(l)*9],[a+Math.cos(l+.3)*6,c+Math.sin(l+.3)*6]])}e.push(s),t.push(s)}return t}function Xb(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Qe(t.accent):e,a=(c,l,m)=>{n.fillStyle=m,n.fillRect(c,s-l,2,l)};if(r==="flower"){a(15,18,Mt(e)),n.fillStyle=Mt(e,1.1),Kt(n,[[16,26],[9,20],[15,22]]),Kt(n,[[17,24],[24,18],[18,21]]),n.fillStyle=Mt(o);for(let c=0;c<5;c++){let l=c/5*Math.PI*2;Kt(n,[[16,9],[16+Math.cos(l)*7,9+Math.sin(l)*7],[16+Math.cos(l+.6)*7,9+Math.sin(l+.6)*7]])}n.fillStyle=Mt(Qe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let c=0;c<6;c++){let l=4+c*4+Math.floor(i()*2),m=14+Math.floor(i()*14);n.fillStyle=Mt(e,i()<.5?.9:1.1),Kt(n,[[l,s],[l+3,s],[l+1+(r==="fern"?2:0),s-m]])}else if(r==="deadbush")n.strokeStyle=Mt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=Mt(e),n.fillRect(14,18,4,14),n.fillStyle=Mt(o),Kt(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=Mt(Qe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=Mt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=Mt(e,1.12);for(let c=3;c<s;c+=7)n.fillRect(5,c,s-10,3)}else if(r==="wheat"){let c=Number(t.block.split("_")[1])||0,l=[8,14,21,28][c];for(let m=0;m<5;m++){let f=5+m*5;n.fillStyle=Mt(e),n.fillRect(f,s-l,2,l),c===3&&(n.fillStyle=Mt(o),Kt(n,[[f-2,s-l+9],[f+1,s-l-1],[f+4,s-l+9]]))}}else if(r==="rail"){let c=(t.block.match(/_(ew|ne|nw|se|sw)$/)||[0,"ns"])[1],l={ns:0,ew:1,ne:0,se:1,sw:2,nw:3}[c];n.save(),n.translate(s/2,s/2),n.rotate(l*Math.PI/2),n.translate(-s/2,-s/2);let m=Mt(Qe("#8C6640")),f=Mt(e),d=s*.33,x=s*.67;if(c==="ns"||c==="ew"){n.fillStyle=m;for(let p=2;p<s;p+=6)n.fillRect(4,p,s-8,3);n.fillStyle=f,n.fillRect(d-1.5,0,3,s),n.fillRect(x-1.5,0,3,s),t.accent&&(n.fillStyle=Mt(o),n.fillRect(s/2-1.5,3,3,s-6))}else{n.strokeStyle=m,n.lineWidth=3;for(let p=0;p<5;p++){let M=Math.PI/2+(p+.5)/5*Math.PI/2;n.beginPath(),n.moveTo(s+Math.cos(M)*(s-x-4),Math.sin(M)*(s-x-4)),n.lineTo(s+Math.cos(M)*(s-d+4),Math.sin(M)*(s-d+4)),n.stroke()}n.strokeStyle=f;for(let p of[s-d,s-x])n.beginPath(),n.arc(s,0,p,Math.PI/2,Math.PI),n.stroke()}n.restore()}else r==="door_open"&&(n.fillStyle=Mt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var m0=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,g0=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function qb(n,t){let e=Xi(n),i=Xi(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,c=(i+r)*16,l=n<a?a-n:n>=a+16?n-(a+16-1):0,m=t<c?c-t:t>=c+16?t-(c+16-1):0;Math.max(l,m)<=14&&s.push([e+o,i+r])}return s}function y0(n){let t=new Jn(n);t.magFilter=an,t.minFilter=an,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new j(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new Mn({uniforms:e,vertexShader:m0,fragmentShader:g0}),s=new Mn({uniforms:e,vertexShader:m0,fragmentShader:g0,transparent:!0,depthWrite:!1,side:Kn});return{opaque:i,trans:s,uniforms:e,tex:t}}function x0(n){let t=new ln;return t.setAttribute("position",new Ke(n.pos,3)),t.setAttribute("uv",new Ke(n.uv,2)),t.setAttribute("light",new Ke(n.light,1)),t.setAttribute("lt",new Ke(n.lt,2,!0)),t.setIndex(new Ke(n.index,1)),t.computeBoundingSphere(),t}var Sc=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=Di(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new De(x0(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new De(x0(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Xi(t),s=Xi(e),r=_m(i,s,this.rd);for(let c of r){if(this.inflight>=this.maxInflight)break;let l=Di(c.cx,c.cz);if(this.chunks.has(l))continue;let m={cx:c.cx,cz:c.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(l,m),this.inflight++,this.worker.postMessage({type:"load",cx:c.cx,cz:c.cz,rev:m.meshRev})}let o=this.rd+1.5,a=[];for(let[c,l]of this.chunks){let m=l.cx-i,f=l.cz-s;if(m*m+f*f>o*o){for(let d of["o","t"])l[d]&&(this.scene.remove(l[d]),l[d].geometry.dispose());this.chunks.delete(c),a.push(c)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(c=>{let[l,m]=c.split(",").map(Number);return Math.abs(l-i)>this.rd+3||Math.abs(m-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(c=>c.state==="ready").length}ready(t,e){let i=this.chunks.get(Di(Xi(t),Xi(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=Ru(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(Di(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=Ru(t,e,i);if(!r)return!1;let o=Di(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,c0(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let c=Math.floor(t),l=Math.floor(i);for(let[m,f]of qb(c,l))this.dirtyMesh.add(Di(m,f));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var hf="hw_world",Xo=null;function _0(n){n!==hf&&(hf=n,Xo=null)}function v0(){return Xo||(Xo=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(hf,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Xo)}function uf(n,t){return v0().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var ff=n=>uf("readonly",t=>t.get(n)),wc=n=>uf("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function df(n){let t=await v0();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function pf(n){let t={};for(let e of n){let i=await ff(e);i!==void 0&&(t[e]=i)}await uf("readwrite",e=>e.clear()),await wc(t)}function I(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Zi=n=>document.querySelector(n);function $b(n,t,e,i,s){let r={t:i,id:n.id,m:n.module,k:n.tkey,y:n.type,ok:t?1:0,a:String(e??"").slice(0,120)};return s&&(r.r=s(r)),r}function b0(n,t,e,i,s,r){if(!t||!t.id)return null;let o=$b(t,e,i,s,r),a=n.get("ke_log"),c=Array.isArray(a)?a:[];if(c.push(o),n.set("ke_log",c),t.local)return o;if(e){let f=n.get("ke_correct"),d=Array.isArray(f)?f:[];d.includes(t.id)||(d.push(t.id),n.set("ke_correct",d))}let l=n.get("ke_mistakes")||{},m=l[t.id]&&!l[t.id].d?l[t.id]:null;return e?m&&(m.c++,m.u=s,m.c>=3&&(l[t.id]={d:1,w:m.w,t:m.t,u:s})):l[t.id]={c:0,w:((l[t.id]||{}).w||0)+1,t:s,u:s},(!e||m)&&n.set("ke_mistakes",l),o}var M0=n=>n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();function S0(n,t=Date.now()){let e=M0(new Date(t)),i=0;for(let s of Array.isArray(n)?n:[])s&&M0(new Date(s.t))===e&&i++;return i}function w0(n,{learnedQ:t=new Set,mistakes:e={},correct:i=new Set}={},s=5,r=Math.random){let o=[],a=[],c=[];for(let x of n)e[x]&&!e[x].d?o.push(x):t.has(x)||i.has(x)?c.push(x):a.push(x);let l=x=>{for(let p=x.length-1;p>0;p--){let M=Math.floor(r()*(p+1));[x[p],x[M]]=[x[M],x[p]]}return x};[o,a,c].forEach(l);let m=[],f=(x,p)=>{for(;p-- >0&&x.length;)m.push(x.pop())},d=Math.round(s*.7);return f(o,Math.ceil(d/2)),f(a,d-m.length),f(o,d-m.length),f(c,s-m.length),f(a,s-m.length),f(o,s-m.length),m}var Zb="../../",Jb=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js","syncmerge.js"],gf=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Ac=null,xf=()=>({get:n=>{try{return JSON.parse(localStorage.getItem(n)||"null")}catch{return null}},set:(n,t)=>localStorage.setItem(n,JSON.stringify(t))}),mf=null,E0=n=>{mf=n},T0=()=>S0(xf().get("ke_log"));function yf(n,t,e,i=!0){i&&window.KidsDaily&&window.KidsDaily.rec("english",t);try{b0(xf(),n,t,e,Date.now(),window.KESyncMerge&&window.KESyncMerge.rid)}catch(s){console.warn("[hero-world] \u5B78\u7FD2\u7D00\u9304\u5BEB\u4E0D\u9032\u53BB",s)}if(mf)try{mf(t,n)}catch{}}function _f(n,t,e){try{let i=xf(),s=i.get("ke_learned")||{},r=new Set;for(let l in s)s[l]&&s[l].at&&(n.sets&&n.sets[l]||[]).forEach(m=>r.add(m));let o=n.list(t).filter(l=>l.type!=="speak").map(l=>l.id),a=w0(o,{learnedQ:r,mistakes:i.get("ke_mistakes")||{},correct:new Set(i.get("ke_correct")||[])},e),c=a.length?n.buildQuiz(Object.assign({},t,{ids:a,count:a.length})):[];if(c.length)return c}catch{}return n.buildQuiz(Object.assign({},t,{count:e}))}function Kb(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function vf(){return Ac||(Ac=(async()=>{for(let t of Jb)await Kb(Zb+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Ac=null,n})),Ac}async function C0(n,{onReward:t,onAnswer:e,onClose:i,count:s=5}){n.innerHTML="",n.hidden=!1;let r=I("div",{class:"panel quiz"});n.append(r),r.append(I("div",{class:"p-head"},I("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),I("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let o;try{o=await vf()}catch{r.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let a=window.KE,c=[],l=0,m=0,f=0;function d(){n.hidden=!0,n.innerHTML="",i&&i()}function x(){c=_f(o,{modules:["words","phrases","grammar","patterns"],types:gf,lv:1},s),c.length||(c=o.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:s})),l=0,m=0,f=0,p()}function p(){r.innerHTML="";let g=c[l],P=a.isTyped(g);n._q=g;let F=I("div",{class:"fb"}),w=I("div",{class:"q-body"});r.append(I("div",{class:"p-head"},I("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",I("small",{},`\u7B2C ${l+1} / ${c.length} \u984C`)),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),I("div",{class:"q-type"},(a.TYPES[g.type]||"\u984C\u76EE")+(P?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),I("div",{class:"q-prompt"+(g.en?" en":"")},g.prompt),g.sub?I("div",{class:"q-sub"},g.sub):null,w,F);let R=!1,E=(D,b)=>{if(R)return;R=!0,yf(g,D,b);let T=Ym(D,P);e&&e(D),D&&(f++,m+=T,t&&t(T)),F.className="fb "+(D?"ok":"bad"),F.append(I("div",{},D?`\u7B54\u5C0D\u4E86\uFF01 +${T} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",D?null:I("b",{class:"en"},g.answer)),!D&&g.why?I("div",{class:"why"},g.why):null,I("button",{class:"btn",onclick:M},l+1<c.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(g.input==="type"){let D=I("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),b=()=>{R||!D.value.trim()||E(o.check(g,D.value).ok,D.value)};D.addEventListener("keydown",T=>{T.stopPropagation(),T.key==="Enter"&&b()}),w.append(I("div",{class:"typerow"},D,I("button",{class:"btn",onclick:b},"\u9001\u51FA"))),setTimeout(()=>D.focus(),50)}else{let D=I("div",{class:"opts"});(g.options||[]).forEach(b=>D.append(I("button",{class:"opt"+(/[a-z]/i.test(b)?" en":""),onclick:T=>{if(R)return;let N=o.check(g,b).ok;T.currentTarget.classList.add(N?"ok":"bad"),E(N,b)}},b))),w.append(D)}}function M(){l++,l<c.length?p():y()}function y(){r.innerHTML="",r.append(I("div",{class:"p-head"},I("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:d},"\xD7")),I("p",{class:"big"},`\u7B54\u5C0D ${f} / ${c.length} \u984C\uFF0C\u62FF\u5230 ${m} \u91D1\u5E63`),I("div",{class:"row"},I("button",{class:"btn",onclick:x},"\u518D\u4F86\u4E00\u56DE"),I("button",{class:"btn ghost",onclick:d},"\u56DE\u53BB\u84CB\u623F\u5B50")))}x()}var A0=new Set(gf);async function qo(n,{ids:t=[],onDone:e,types:i,modules:s,title:r,okText:o,daily:a=!0,question:c=null}){n.innerHTML="",n.hidden=!1;let l=I("div",{class:"panel quiz"});n.append(l),l.append(I("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let m;try{m=await vf()}catch{l.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let f=window.KE,d=c,x=i?new Set(i.filter(w=>A0.has(w))):A0;if(!d)for(let w of t){let R=m.byId[w];if(R&&x.has(R.type)){d=m.get(w);break}}let p=!!d&&!c;d||(d=_f(m,{modules:s||["words","phrases","grammar","patterns"],types:i?[...x]:gf,lv:1},1)[0]||m.buildQuiz({modules:["words"],types:["zh2en","en2zh"],lv:1,count:1})[0]);let M=f.isTyped(d);n._q=d,l.innerHTML="";let y=I("div",{class:"fb"}),g=I("div",{class:"q-body"});l.append(I("div",{class:"p-head"},I("h2",{},r||"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),I("div",{class:"q-type"},c?"\u8B80\u5B8C\u56DE\u7B54\uFF1A\u9078\u51FA\u5C0D\u7684\u7B54\u6848":(p?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":f.TYPES[d.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),I("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?I("div",{class:"q-sub"},d.sub):null,g,y);let P=!1,F=(w,R)=>{P||(P=!0,yf(d,w,R,a),y.className="fb "+(w?"ok":"bad"),y.append(I("div",{},w?o||"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",w?null:I("b",{class:"en"},d.answer)),!w&&d.why?I("div",{class:"why"},d.why):null,I("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(w,M,d)}},"\u7E7C\u7E8C")))};if(d.input==="type"){let w=I("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),R=()=>{P||!w.value.trim()||F(m.check(d,w.value).ok,w.value)};w.addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&R()}),g.append(I("div",{class:"typerow"},w,I("button",{class:"btn",onclick:R},"\u9001\u51FA"))),setTimeout(()=>w.focus(),50)}else{let w=I("div",{class:"opts"});(d.options||[]).forEach(R=>w.append(I("button",{class:"opt"+(/[a-z]/i.test(R)?" en":""),onclick:E=>{if(P)return;let D=m.check(d,R).ok;E.currentTarget.classList.add(D?"ok":"bad"),F(D,R)}},R))),g.append(w)}}async function R0(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=I("div",{class:"panel quiz"});n.append(i),i.append(I("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await vf()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=_f(s,{modules:[t.module],types:t.types,lv:t.lv},t.count);o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,c=0,l=()=>{i.innerHTML="";let m=o[a];n._q=m;let f=I("div",{class:"fb"}),d=I("div",{class:"q-body"});i.append(I("div",{class:"p-head"},I("h2",{},t.title_zh+" ",I("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),I("div",{class:"q-type"},r.TYPES[m.type]||"\u984C\u76EE"),I("div",{class:"q-prompt"+(m.en?" en":"")},m.prompt),m.sub?I("div",{class:"q-sub"},m.sub):null,d,f);let x=!1,p=(M,y)=>{x||(x=!0,yf(m,M,y),M&&c++,f.className="fb "+(M?"ok":"bad"),f.append(I("div",{},M?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",M?null:I("b",{class:"en"},m.answer)),!M&&m.why?I("div",{class:"why"},m.why):null,I("button",{class:"btn",onclick:()=>{a++,a<o.length?l():(n.hidden=!0,n.innerHTML="",e&&e(c,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(m.input==="type"){let M=I("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),y=()=>{x||!M.value.trim()||p(s.check(m,M.value).ok,M.value)};M.addEventListener("keydown",g=>{g.stopPropagation(),g.key==="Enter"&&y()}),d.append(I("div",{class:"typerow"},M,I("button",{class:"btn",onclick:y},"\u9001\u51FA"))),setTimeout(()=>M.focus(),50)}else{let M=I("div",{class:"opts"});(m.options||[]).forEach(y=>M.append(I("button",{class:"opt"+(/[a-z]/i.test(y)?" en":""),onclick:g=>{if(x)return;let P=s.check(m,y).ok;g.currentTarget.classList.add(P?"ok":"bad"),p(P,y)}},y))),d.append(M)}};l()}function I0(n,t,e){let[i,s]=String(n).split(",").map(Number),r=m=>Hn(4242,i|0,t*7+m,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,c=Math.floor(r(2)*a.length),l=(c+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[c],a[l]]}}function P0(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?Rr(n,e.blueprint)?{ok:!1,reason:"owned"}:(zs(n,e.price),n.owned.push(e.blueprint),{ok:!0}):Vo(t,e.give,e.count,i)?(zs(n,e.price),Sn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Mf=(n,t,e)=>!!(n&&n[t.id]===e);function L0(n,t,e,i,s,r,o=()=>64){if(Mf(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,Nn(s,t.reward.coins|0);let a={};for(let c in t.reward.items||{}){let l=Sn(r,c,t.reward.items[c],o);l&&(a[c]=l)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function Ir(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var bf={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Ec=n=>n==="creative"?"creative":"survival",D0=n=>bf[Ec(n)].db;function N0(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function U0(n){let t=Ec(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function F0(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var O0=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Lf={};ri(Lf,{BREED_CAP:()=>If,LOVE_MS:()=>B0,MAX_STAGE:()=>eS,STAGE_SECONDS:()=>tS,armorMax:()=>z0,armorPoints:()=>Yo,canTill:()=>wf,eat:()=>Rf,equip:()=>nS,findMate:()=>Pf,harvest:()=>Af,nearWater:()=>Ef,reduceDamage:()=>Cf,stageAt:()=>Sf,wearArmor:()=>Tf});var tS=60,eS=3;function Sf(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var wf=(n,t)=>(n==="grass"||n==="dirt")&&t;function Af(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function Ef(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let c of[0,-1])if(t(n(e+a,i+c,s+o)))return!0;return!1}function Yo(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var z0=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function Tf(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?z0(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var Cf=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function nS(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function Rf(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var B0=3e4,If=12;function Pf(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<B0&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var Ff={};ri(Ff,{apply:()=>Rc,duck:()=>Ms,muted:()=>$o,rainLevel:()=>Uf,scene:()=>Nf,setVolume:()=>Ic,sfx:()=>en,state:()=>iS,toggleMute:()=>Df,unlock:()=>Cc});var We=null,Bs=null,Tc=null,Pr=null,Gn=()=>window.HIAudio||null,V0=()=>Gn()?Gn().get():{muted:!1,music:.35,sfx:.7};function Cc(){try{Gn()&&Gn().unlock()}catch{}if(!We){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;We=new n,Bs=We.createGain(),Bs.connect(We.destination),Tc=We.createBuffer(1,We.sampleRate,We.sampleRate);let t=Tc.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}We.state==="suspended"&&We.resume(),Rc()}function Rc(){if(Bs){let n=V0();Bs.gain.setTargetAtTime(n.muted?0:n.sfx,We.currentTime,.03)}}var $o=()=>V0().muted;function Df(){return Gn()&&Gn().toggle(),Rc(),$o()}function Ic(n){Gn()&&Gn().set(n),Rc()}function Nf(n){try{Gn()&&Gn().scene(n)}catch{}}function Ms(n){let t=Gn();t&&(n&&Ms.id==null?Ms.id=t.duckStart():!n&&Ms.id!=null&&(t.duckEnd(Ms.id),Ms.id=null))}function H0(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function ei(n,t,e,i,s,r,o){let a=We.createOscillator(),c=We.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),H0(c,e,i,s,r),a.connect(c),c.connect(Bs),a.start(e),a.stop(e+i+r+.05)}function bs(n,t,e,i,s,r=1){let o=We.createBufferSource(),a=We.createBiquadFilter(),c=We.createGain();o.buffer=Tc,a.type=n,a.frequency.value=t,a.Q.value=r,H0(c,e,.004,i,s),o.connect(a),a.connect(c),c.connect(Bs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var k0={wood:(n,t)=>{ei("sine",190*t,n,.003,.16,.12,95*t),bs("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{bs("highpass",1800*t,n,.1,.06),ei("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{bs("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{ei("sine",1900*t,n,.002,.08,.25,1500*t),bs("highpass",4200,n,.06,.12)},soft:(n,t)=>{bs("bandpass",850*t,n,.09,.1,.8)}};function en(n,t="soft"){if(!We||$o())return;let e=We.currentTime+.005,i=k0[t]||k0.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{bs(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":ei("sine",880,e,.002,.07,.08,1320);break;case"chest":ei("triangle",160,e,.02,.07,.3,120),ei("sine",330,e+.12,.005,.05,.15);break;case"door":ei("sawtooth",120,e,.03,.04,.3,160),bs("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>bs("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":ei("triangle",659,e,.005,.08,.15),ei("triangle",988,e+.1,.005,.08,.25);break;case"coin":ei("sine",1319,e,.002,.08,.08),ei("sine",1976,e+.07,.002,.08,.22);break;case"hurt":ei("triangle",300,e,.005,.1,.18,200);break;default:break}}function Uf(n){if(We){if(!Pr&&n>.01){let t=We.createBufferSource(),e=We.createBiquadFilter(),i=We.createBiquadFilter(),s=We.createGain();t.buffer=Tc,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(Bs),t.start(),Pr={s:t,g:s}}Pr&&Pr.g.gain.setTargetAtTime(.06*n,We.currentTime,.4)}}var iS=()=>({ctx:We?We.state:"none",hi:Gn()?Gn().state():null,rain:Pr?+Pr.g.gain.value.toFixed(3):0});var Hf={};ri(Hf,{HI_SCENE:()=>zf,createWeather:()=>Bf,precipFor:()=>Vf,sceneFor:()=>Of,soundOf:()=>Lr,stepWeather:()=>kf});function Lr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function Of({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var zf={calm:"hub",night:"night",cave:"cave"};function Bf(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function kf(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function Vf(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var sS=[1,2,4,6,8];function Pc(n,t){if(t&&(t.type==="rod"||t.type==="bow")&&(t=null),!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/sS[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function Dr(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function G0(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var $f={};ri($f,{collect:()=>qf,createFurnace:()=>Gf,dismantle:()=>Yf,start:()=>Wf,tick:()=>Xf});function Gf(){return{fuel:0,jobs:[],done:{}}}function Wf(n,t,e,i=4){if(Qn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(Qn(t,"coal")<1)return{ok:!1,reason:"fuel"};Os(t,"coal",1),n.fuel+=i}return Os(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function Xf(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function qf(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=Sn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function Yf(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var ed={};ri(ed,{MAX_HP:()=>Zo,REGEN_EVERY:()=>oS,SAFE_FALL:()=>rS,createHealth:()=>Zf,damage:()=>Kf,fallDamage:()=>Jf,hearts:()=>td,regen:()=>jf,respawnPoint:()=>Qf});var Zo=20,rS=4,oS=4;function Zf(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function Jf(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function Kf(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function jf(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function Qf(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function td(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Lc={animal:8,quiz:4};function W0(){return{list:[],nextId:1}}var Jo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function X0(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function q0(n,t){return n<.2&&!t}function Y0(n,t,e){return n.tame?!1:n.kind==="quiz"?t>.45||e>48:e>72}function $0(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let c=n.home.x-n.p.x,l=n.home.z-n.p.z,m=Math.hypot(c,l);if(m>10){n.yaw=Math.atan2(-c,-l),n.v.x=c/m*s.speed,n.v.z=l/m*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let c=a>1.6?s.speed:0;n.v.x=r/(a||1)*c,n.v.z=o/(a||1)*c;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function Z0(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null,meat:n.def.meat?{id:n.def.meat,n:1}:null}}var J0=(n,t)=>n?(t?2:1)+1:0;function Nr(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],c=[t.x,t.y,t.z],l=0,m=1/0;for(let f=0;f<3;f++){if(Math.abs(c[f])<1e-9){if(a[f]<r[f]||a[f]>o[f])return null;continue}let d=(r[f]-a[f])/c[f],x=(o[f]-a[f])/c[f];if(d>x&&([d,x]=[x,d]),l=Math.max(l,d),m=Math.min(m,x),l>m)return null}return l}function K0(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var j0=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function Q0(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function tg(n,t,e,i,s=()=>64){let r=(t||[]).find(l=>l.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),c={};Nn(i,o);for(let l in a){let m=Sn(e,l,a[l],s);m&&(c[l]=m)}return{ok:!0,coins:o,items:a,leftovers:c,name_zh:r.name_zh}}function eg(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function nd(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function ng(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:nd(n[e].map,n,t).ok?n[e]:null}var od={};ri(od,{COOLDOWN:()=>id,GRAV:()=>ig,LIFE:()=>sg,SPEED:()=>Dc,shoot:()=>sd,step:()=>rd});var Dc=26,ig=9,sg=2.5,id=.45;function sd(n,t){let e=Math.hypot(t.x,t.y,t.z)||1;return{p:{x:n.x,y:n.y,z:n.z},v:{x:t.x/e*Dc,y:t.y/e*Dc+1,z:t.z/e*Dc},age:0}}function rd(n,t,e,i){n.age+=t,n.v.y-=ig*t;let s=n.v.x*t,r=n.v.y*t,o=n.v.z*t,a=Math.hypot(s,r,o)||1e-6,c={x:s/a,y:r/a,z:o/a},l=null,m=a;for(let f of i){let d=Nr(n.p,c,f.p,f.w,f.h);d!=null&&d<=m&&(m=d,l=f)}if(l)return{hit:"mob",target:l.ref};for(let f=1;f<=4;f++){let d=n.p.x+s*f/4,x=n.p.y+r*f/4,p=n.p.z+o*f/4;if(e(Math.floor(d),Math.floor(x),Math.floor(p)))return n.p={x:n.p.x+s*(f-1)/4,y:n.p.y+r*(f-1)/4,z:n.p.z+o*(f-1)/4},{hit:"block"}}return n.p.x+=s,n.p.y+=r,n.p.z+=o,n.age>sg?{hit:"gone"}:null}var Fi={};function Ur(n){return Fi[n]||(Fi[n]=new vn({color:n,transparent:!0}),Fi[n].userData.base=new le(n)),Fi[n]}var Ko=null;function cS(){if(Ko)return Ko;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),Ko=new Jn(n),Ko.colorSpace=on,Ko}function rg(n,t){let e=new mn,i=n.colors,[s,r]=n.size,o=(c,l,m,f,d,x,p,M)=>{let y=new De(new je(c,l,m),M||Ur(f));return y.position.set(d,x,p),e.add(y),y},a=[];if(n.kind==="villager"){for(let l of[-.13,.13]){let m=o(.2,.6,.22,i.leg,l,.6,0);m.geometry.translate(0,-.6/2,0),a.push(m)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let l of[-.36,.36])o(.16,.62,.18,t||i.body,l,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let c=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);Fi.__face||(Fi.__face=new vn({map:cS(),transparent:!0}),Fi.__face.userData.base=new le("#ffffff"));let l=[Ur(i.head),Ur(i.head),Ur(i.head),Ur(i.head),Ur(i.head),Fi.__face],m=new De(new je(s*.9,s*.8,s*.8),l);m.position.set(0,r*.72+s*.4,0),e.add(m),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let c=n.id==="chicken"?.25:.45,l=r-c-(n.id==="chicken"?.15:.25);o(s,l,n.id==="chicken"?s:s*1.35,i.body,0,c+l/2,0),i.patch&&o(s*.5,l*.55,.02+s*1.36,i.patch,s*.12,c+l*.55,0);let m=n.id==="chicken"?.3:.45,f=o(m,m,m,i.head,0,c+l+m*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,f.position.y+m/2+.05,f.position.z),o(.12,.06,.12,"#D9A63A",0,f.position.y-.02,f.position.z-m/2-.05));let d=n.id==="chicken"?.06:.18,x=n.id==="chicken"?0:s*.45,p=s*.3;for(let[M,y]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-p,-x],[p,-x],[-p,x],[p,x]]){let g=o(d,c,d,i.leg,M,c/2,y);g.geometry.translate(0,-c/2,0),g.position.y=c,a.push(g)}}return e.userData.legs=a,e}function og(n){for(let t in Fi){let e=Fi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function Nc(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Uc="f932ec32e0",Oc=new URLSearchParams(location.search),fS=720,Fc=5,lg={boat:-.85,minecart:-.6,horse:.75},cg=[[0,0,0,1,.1,1]],hg=[[0,0,0,1,.5,1]],dS=[[0,0,0,1,1,1]],pS=[[.3,0,.3,.7,.7,.7]],mS=20261008,ad=Oc.get("test")==="1"||window.__HW_TEST__===!0,gS=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,h={touch:gS,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[],portalLock:!0};function wn(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function ni(n,t){try{localStorage.setItem(n,t)}catch{}}async function xS(){let n=Ec(wn("hw_mode","survival")),t=U0(n),e=!t.creative&&wn("hw_dim","overworld")==="shadow"?"shadow":"overworld",i=u=>e==="shadow"&&/^hw_(furnaces|chests|crops|map|vehicles)$/.test(u)?u+"_s":u,s=e==="shadow"?"hw_chunk_s:":"hw_chunk:";_0(D0(n));let[r,o,a,c,l,m,f,d,x]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json","data/life.json","data/quests.json","data/books.json"].map(u=>fetch(u,{cache:"no-cache"}).then(_=>_.json()))),p=xm(r),M=o.recipes||[],y=u=>p.maxStack(u),g={};try{let[u,_,S,C,L,V,st,ut,lt,vt,Gt,re,ie]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops","hw_ach","hw_map","hw_vehicles","hw_story"].map(Ie=>ff(i(Ie))));g={meta:u,player:_,inv:S,coins:C,furnaces:L,claimed:V,quests:st,chests:ut,crops:lt,achv:vt,mapd:Gt,vehs:re,storyd:ie,chunks:await df(s)}}catch(u){console.warn("save unavailable",u)}let P=g.meta&&g.meta.seed||mS+bf[n].seedOffset,F=e==="shadow"?P+7777:P,w=e==="shadow"?Yu(F,p):Rm(P,p,l),R=h0(Object.fromEntries(Object.entries(g.chunks||{}).map(([u,_])=>[u.slice(s.length),_]))),E=g.inv?yc(g.inv):ko();t.creative&&!g.inv&&O0.forEach((u,_)=>{p.get(u)&&(E.slots[_]={id:u,count:64})});let D=Km(g.coins),b=Bm(g.achv),T=f.achievements||[],N=tf(g.storyd);!g.storyd&&g.player&&Mc(N,d);let z=u=>u==="look"?h.lookAcc||0:u==="walk"?h.walkAcc||0:b.stats[u]||0,J=e0(),Q=t0(D,{mode:wn("hw_coin_source","local"),member:Qm(window)}),O=new gc(p,g.mapd),B=Zf(g.player&&g.player.hp!=null?g.player.hp:20);h.bed=g.player&&g.player.bed||null,h.horse=g.player&&g.player.horse||null;let q=c.portals||[],K=Array.isArray(g.claimed)?g.claimed.slice():[],rt=g.furnaces||{},$=g.quests||{},et=Object.fromEntries(Object.entries(g.chests||{}).map(([u,_])=>[u,yc(_,27)])),ot=g.crops||{};h.armor=g.player&&Array.isArray(g.player.armor)?g.player.armor.slice(0,4):[null,null,null,null],h.armorDur=g.player&&Array.isArray(g.player.armorDur)?g.player.armorDur.slice(0,4):[null,null,null,null];let wt=o.smelt||[],Ct=o.fuelPerCoal||4;g.meta&&typeof g.meta.time=="number"&&(h.time=g.meta.time);let Nt=Zi("#c"),_t=new cc({canvas:Nt,antialias:!1,powerPreference:"high-performance"}),Rt={low:{pr:.75,np:120,grain:!1},med:{pr:1,np:300,grain:!0},high:{pr:h.touch?1.5:1.25,np:500,grain:!0}};function G(){let u=Rt[wn("hw_gfx","high")]||Rt.high;_t.setPixelRatio(Math.min(window.devicePixelRatio||1,u.pr)),h.np=u.np;let _=document.getElementById("grain");_&&(_.hidden=!u.grain),document.documentElement.style.setProperty("--bs",{s:.85,m:1,l:1.2}[wn("hw_btn","m")]||1),document.body.classList.toggle("lefty",wn("hw_lefty","off")==="on"),h.invert=wn("hw_invert","off")==="on"}G();let Y=new ao,gt=new le("#EFEBDD");Y.background=gt;let xt=new _n(72,1,.08,200);xt.rotation.order="YXZ";let bt=f0(p),It=d0(p,bt),se=y0(bt.canvas),Wt=new Worker("assets/hw-worker.js?v="+Uc),ft=new Sc({scene:Y,mats:se,reg:p,worker:Wt,diffs:R,onDirty:u=>{h.dirty.add(u),(h.mapDirty||(h.mapDirty=new Set)).add(u)}}),he=Math.max(2,Math.min(6,parseInt(Oc.get("rd")||wn("hw_rd",h.touch?"3":"4"),10)||4));ft.setRenderDistance(he),xt.far=he*16+40,xt.updateProjectionMatrix();let Ht=await new Promise(u=>{let _=S=>{S.data.type==="ready"&&(Wt.removeEventListener("message",_),u(S.data.spawn))};Wt.addEventListener("message",_),Wt.postMessage({type:"init",seed:F,dim:e,blocks:r,structures:l,diffs:Object.fromEntries([...R].map(([S,C])=>[S,cf(C)]))})}),ee=g.player&&g.player.dims&&g.player.dims[e];h.dimPos=g.player&&g.player.dims||{},g.player&&(e==="overworld"||ee)?Object.assign(h,{p:ee?{x:ee.x,y:ee.y,z:ee.z}:{x:g.player.x,y:g.player.y,z:g.player.z},yaw:(ee?ee.yaw:g.player.yaw)||0,pitch:g.player.pitch||0,fly:!!g.player.fly&&!ee,sel:g.player.sel|0}):(g.player&&(h.sel=g.player.sel|0),h.p={x:Ht.x,y:Ht.y,z:Ht.z},h.yaw=Math.atan2(-(Ht.stele.x+.5-Ht.x),-(Ht.stele.z+.5-Ht.z)),h.pitch=-.15);let de=new Ls(new go(new je(1.004,1.004,1.004)),new Ps({color:1382164,transparent:!0,opacity:.45}));de.visible=!1,Y.add(de);let Je=p0().map(u=>new Jn(u)),ye=new De(new je(1.01,1.01,1.01),new vn({map:Je[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));ye.visible=!1,Y.add(ye);let Fe=(u,_)=>{let S=document.createElement("canvas");S.width=S.height=64;let C=S.getContext("2d");C.fillStyle=u,C.beginPath(),C.arc(32,32,28,0,7),C.fill(),_&&(C.globalCompositeOperation="destination-out",C.beginPath(),C.arc(44,26,24,0,7),C.fill());let L=new Jn(S);return L.colorSpace=on,L},H=new Is(new cs({map:Fe("#F2C46B"),depthWrite:!1,fog:!1})),ke=new Is(new cs({map:Fe("#EDE6D0",!0),depthWrite:!1,fog:!1}));Y.add(H,ke);let ve=500,U=new Float32Array(ve*6),v=new Float32Array(ve*3),Z=new Float32Array(ve*3);for(let u=0;u<ve;u++)Z[u*3]=Math.random()*24-12,Z[u*3+1]=Math.random()*16,Z[u*3+2]=Math.random()*24-12;let nt=new ln;nt.setAttribute("position",new Ke(U,3));let at=new Ls(nt,new Ps({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));at.frustumCulled=!1,at.visible=!1,Y.add(at);let Et=new ln;Et.setAttribute("position",new Ke(v,3));let Dt=new fo(Et,new mr({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));Dt.frustumCulled=!1,Dt.visible=!1,Y.add(Dt),h.weather=Bf();let ct=0;function dt(u,_,S){if(at.visible=S==="rain",Dt.visible=S==="snow",!!S){ct+=u;for(let C=0;C<h.np;C++){let L=Z[C*3],V=Z[C*3+2],st=S==="rain"?16:1.6,ut=_.y+10-(Z[C*3+1]+ct*st)%16;if(S==="rain"){let lt=C*6;U[lt]=U[lt+3]=_.x+L,U[lt+2]=U[lt+5]=_.z+V,U[lt+1]=ut,U[lt+4]=ut-.45}else{let lt=C*3,vt=Math.sin(ct*.8+C)*.4;v[lt]=_.x+L+vt,v[lt+1]=ut,v[lt+2]=_.z+V+vt*.6}}nt.setDrawRange(0,h.np*2),Et.setDrawRange(0,h.np),(S==="rain"?nt:Et).attributes.position.needsUpdate=!0}}let Pt=new mn,Yt=(u,_,S,C,L,V,st)=>{let ut=new De(new je(u,_,S),new vn({color:C}));return ut.position.set(L,V,st),ut.userData.base=new le(C),Pt.add(ut),ut},Ft=Yt(.24,.75,.26,"#26302A",-.14,.375,0),Ut=Yt(.24,.75,.26,"#26302A",.14,.375,0);Yt(.56,.7,.3,"#2F5A34",0,1.1,0);let jt=Yt(.18,.66,.2,"#E7CDA6",-.38,1.12,0),ne=Yt(.18,.66,.2,"#E7CDA6",.38,1.12,0);Yt(.46,.42,.42,"#E7CDA6",0,1.66,0),Yt(.5,.14,.46,"#151714",0,1.9,.02),Yt(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Ft,Ut,jt,ne].forEach(u=>{u.geometry.translate(0,-u.geometry.parameters.height/2+.05,0),u.position.y+=u.geometry.parameters.height/2-.05}),Pt.visible=!1,Y.add(Pt);let ue={},W=u=>ue[u]||(ue[u]=(()=>{let _=new Image;_.src=It[u];let S=new gn(_);return S.colorSpace=on,_.onload=()=>{S.needsUpdate=!0},new cs({map:S,depthWrite:!0,alphaTest:.3})})());function At(u,_,S,C){let L=new Is(W(u));L.scale.set(.42,.42,1),Y.add(L),h.drops.push({id:u,s:L,p:{x:_,y:S,z:C},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let ht=(u,_,S)=>{let C=ft.get(u,_,S);return p.flat.solid[C]===1&&(p.flat.boxes[C]||!0)},Tt=Object.fromEntries((a.mobs||[]).map(u=>[u.id,u])),Lt=W0(),pt=new Map,Qt=0;function $t(u,_){for(let S=61;S>0;S--){let C=ft.get(u,S,_);if(p.flat.solid[C])return ft.get(u,S+1,_)||ft.get(u,S+2,_)?null:{y:S+1,n:C};if(p.flat.liquid[C])return null}return null}function Oe(u,_,S,C=7){for(let L=-C;L<=C;L++)for(let V=-C;V<=C;V++)for(let st=-C;st<=C;st++)if(p.flat.lightEmit[ft.get(u+st,_+L,S+V)])return!0;return!1}function be(u,_,S,C,L){let V=X0(Lt,u,{x:_+.5,y:S,z:C+.5}),st=rg(u,L);return pt.set(V.id,st),Y.add(st),V}let An=new Set;function Un(){for(let u of w.villages.around(h.p.x-64,h.p.z-64,h.p.x+64,h.p.z+64))if(!(An.has(u.id)||!ft.ready(u.x,u.z))){An.add(u.id);for(let _=0;_<u.villagers;_++){let S=I0(u.id,_,m),C=u.x+(_%2?2:-2),L=u.z+(_-1),V=$t(C,L),st=be(Tt.villager,C,V?V.y:u.y+1,L,S.prof.color);Object.assign(st,{home:{x:u.x,z:u.z},village:u.id,role:S})}}}function zc(u){if(Tt.villager&&Un(),e==="overworld"&&h.horse&&!h.horseMob&&Tt.horse&&ft.ready(h.horse.x,h.horse.z)){let st=be(Tt.horse,Math.floor(h.horse.x),h.horse.y,Math.floor(h.horse.z));st.tame=!0,h.horse.saddled&&gd(st),h.horseMob=st}let _=Math.random()*Math.PI*2,S=14+Math.random()*14,C=Math.floor(h.p.x+Math.cos(_)*S),L=Math.floor(h.p.z+Math.sin(_)*S);if(!ft.ready(C,L))return;let V=$t(C,L);if(V)if(Jo(Lt,"animal")<Lc.animal&&V.n===p.num("grass")&&u>.3){let st=Object.values(Tt).filter(vt=>vt.kind==="animal"&&(!vt.biome||vt.biome===w.biomeOf(C,L))),ut=st[Math.floor(Math.random()*st.length)],lt=1+Math.floor(Math.random()*3);for(let vt=0;vt<lt&&Jo(Lt,"animal")<Lc.animal;vt++){let Gt=C+vt%2,re=L+(vt>>1),ie=$t(Gt,re);ie&&be(ut,Gt,ie.y,re)}}else t.quizMobs&&Jo(Lt,"quiz")<Lc.quiz&&q0(u,Oe(C,V.y,L))&&Tt.quizling&&be(e==="shadow"&&Tt.shadowling?Tt.shadowling:Tt.quizling,C,V.y,L)}function Bc(u,_,S){Qt+=u,Qt>2.5&&h.started&&(Qt=0,zc(e==="shadow"?0:_));for(let C=Lt.list.length-1;C>=0;C--){let L=Lt.list[C],V=pt.get(L.id),st=Math.hypot(L.p.x-h.p.x,L.p.z-h.p.z);if(L.riding){L.p.x=h.p.x,L.p.y=h.p.y,L.p.z=h.p.z,L.yaw=h.yaw,L.v.x=h.v.x,L.v.z=h.v.z,Nc(V,L,S/1e3);continue}if(L.gone){L.goneT=(L.goneT||0)+u,Nc(V,L,S/1e3),L.goneT>.35&&(Y.remove(V),pt.delete(L.id),Lt.list.splice(C,1));continue}if(Y0(L,_,st)){L.gone=!0,L.goneT=0,L.village&&An.delete(L.village);continue}if(!ft.ready(L.p.x,L.p.z))continue;$0(L,h.p,u,Math.random),L.v.y-=20*u,L.v.y<-20&&(L.v.y=-20);let ut=fc(L.p,L.v,u,ht,{w:Math.min(.9,L.def.size[0]),h:L.def.size[1],canStep:!0,grounded:L.onGround});L.onGround=ut.onGround,p.flat.liquid[ft.get(L.p.x,L.p.y+.3,L.p.z)]&&(L.v.y=2),Nc(V,L,S/1e3)}og(.35+.65*_)}function Ji(u,_,S){let C,L;u==="screen"?(Mi.set(_/innerWidth*2-1,-(S/innerHeight)*2+1,.5).unproject(xt).sub(xt.position).normalize(),C={x:xt.position.x,y:xt.position.y,z:xt.position.z},L={x:Mi.x,y:Mi.y,z:Mi.z}):(C=Or(),L=ea());let V=u==="screen"?Yn("screen",_,S):Yn("center"),st=null,ut=h.view==="tp"&&u==="screen"?8:4.5;V&&(ut=Math.min(ut,V.dist+.5));for(let lt of Lt.list){if(lt.gone||lt.riding)continue;let vt=Nr(C,L,lt.p,lt.def.size[0],lt.def.size[1]);vt!=null&&vt<ut&&(ut=vt,st=lt)}for(let lt of h.vehicles){if(h.ride&&h.ride.veh===lt)continue;let vt=Nr(C,L,lt.p,1.3,.9);vt!=null&&vt<ut&&(ut=vt,st=lt.m)}if(h.boss){let lt=Nr(C,L,h.boss.p,3.6,3.6);lt!=null&&lt<ut+1&&(ut=lt,st=h.boss.m)}return st}function Ss(){try{return K0(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function ks(u){if(u.kind==="vehicle"){Yc(u.veh);return}if(u.kind==="boss"){Ng();return}if(u.type==="horse"){Mg(u);return}if(u.kind==="villager"){if(!t.trading){St("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}ug(u);return}if(u.kind==="animal"&&E.slots[h.sel]&&E.slots[h.sel].id==="wheat"){t.consume&&ti(E,h.sel,1),X();let S=Date.now();u.love=S,St(`${u.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let C=Pf(Lt.list,u,S);if(C&&Jo(Lt,"animal")<If){let L=be(u.def,Math.floor((u.p.x+C.p.x)/2),Math.floor(u.p.y),Math.floor((u.p.z+C.p.z)/2));pt.get(L.id).scale.setScalar(.65),u.love=0,C.love=0,St(`\u751F\u4E86\u4E00\u96BB\u5C0F${u.def.name_zh}\uFF01`),h.stats.bred=(h.stats.bred||0)+1,Me("bred")}else C&&St("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(u.kind==="animal"){let S=E.slots[h.sel],C=!!(S&&p.toolOf(S.id)&&p.toolOf(S.id).type==="sword"),L=Z0(u,C,Math.random);if(u.v.y=4,u.v.x+=(u.p.x-h.p.x)*1.5,u.v.z+=(u.p.z-h.p.z)*1.5,C){let V=Dr(E,h.sel,p);V.broke&&St(`\u4F60\u7684${p.name(V.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}if(L&&L.drops)for(let V=0;V<L.drops.n;V++)At(L.drops.id,u.p.x,u.p.y+.6,u.p.z);L&&L.meat&&At(L.meat.id,u.p.x,u.p.y+.6,u.p.z);return}if(u.busy)return;u.busy=!0,On(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let _=Ss().slice(0,30).sort(()=>Math.random()-.5);qo(yt.ov,{ids:_,onDone:(S,C)=>{if(h.overlay=null,u.busy=!1,S&&u.def.tough&&!u.hurt){u.hurt=!0,St("\u6697\u5F71\u932F\u984C\u602A\u6643\u4E86\u4E00\u4E0B\uFF0C\u518D\u7B54\u5C0D\u4E00\u984C\u5C31\u80FD\u6253\u6557\u5B83\uFF01");return}if(S){let L=J0(!0,C)+(u.def.tough?2:0);Nn(D,L),Pn(),u.gone=!0,u.goneT=0,St(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${L} \u91D1\u5E63`),h.dirtyMeta=!0,pn(),h.stats.quizWins=(h.stats.quizWins||0)+1,Me("quiz_wins")}else if(S===!1){let L=h.p.x-u.p.x,V=h.p.z-u.p.z,st=Math.hypot(L,V)||1;h.v.x=L/st*7,h.v.z=V/st*7,h.v.y=4.5,u.p.x-=L/st*1.5,u.p.z-=V/st*1.5,St("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let Wn=(u,_,S)=>ft.get(u,_,S),Ki=(u,_,S)=>{let C=p.get(ft.get(u,_,S));return C&&C.rail?{shape:C.rail,powered:!!C.powered}:null},yt=yS();function St(u){for(;yt.toasts.children.length>3;)yt.toasts.firstChild.remove();let _=I("div",{class:"toast"},u);yt.toasts.append(_),setTimeout(()=>_.remove(),2200)}function jo(u){let _=I("div",{class:"toast ach"},I("i",{class:"badge"}),I("span",{},"\u6210\u5C31\u9054\u6210\uFF1A",I("b",{},u.name_zh),u.coins&&t.coins?`\u3000+${u.coins} \u91D1\u5E63`:""));yt.toasts.append(_),setTimeout(()=>_.remove(),3500)}function Me(u,_=1){km(b,u,_),h.dirtyMeta=!0;for(let S of Vm(b,T))jo(S),S.coins&&t.coins&&(Nn(D,S.coins),Pn())}let ii=()=>Math.max(5,Math.min(100,parseInt(wn("hw_daily_goal","20"),10)||20)),Oi=0;function ws(){let u=ii();yt.learnCnt.textContent=Oi+"/"+u,yt.learnBar.style.width=Math.min(100,Oi/u*100)+"%",yt.learnPill.classList.toggle("done",Oi>=u)}function Vs(){try{Oi=T0()}catch{}ws()}E0(u=>{let _=Oi;Vs(),Me("answers"),u&&Me("answers_ok"),_<ii()&&Oi>=ii()&&St("\u4ECA\u5929\u7684\u5B78\u7FD2\u76EE\u6A19\u9054\u6210\u4E86\uFF01\u597D\u68D2\uFF01")});function Qo(){let u=document.getElementById("pinbox"),_=window.KSParentPin;if(u.innerHTML="",!_||!_.isSet()){u.append(I("div",{class:"pin-ask"},I("p",{},"\u6539\u6BCF\u65E5\u76EE\u6A19\u8981\u5BB6\u9577\u5BC6\u78BC\u3002\u8ACB\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),I("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let S=I("input",{class:"typein",type:"password",inputmode:"numeric",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),C=I("input",{class:"typein",type:"number",min:"5",max:"100",value:String(ii()),"aria-label":"\u6BCF\u65E5\u984C\u6578"}),L=()=>{if(!_.verify(S.value.trim())){St("\u5BC6\u78BC\u4E0D\u5C0D"),S.value="";return}ni("hw_daily_goal",String(Math.max(5,Math.min(100,+C.value||20)))),ws(),St("\u6BCF\u65E5\u76EE\u6A19\u6539\u6210 "+ii()+" \u984C"),ld()};[S,C].forEach(V=>V.addEventListener("keydown",st=>{st.stopPropagation(),st.key==="Enter"&&L()})),u.append(I("div",{class:"pin-ask"},I("p",{},"\u5BB6\u9577\uFF1A\u6BCF\u5929\u8981\u7B54\u5E7E\u984C\uFF085\u2013100\uFF09"),I("div",{class:"typerow"},S,C,I("button",{class:"btn",onclick:L},"\u78BA\u5B9A")))),setTimeout(()=>S.focus(),50)}function kc(u,_,S,C){Me("placed"),C==="torch"&&Me("place:torch");let L=h.recentPlaced||(h.recentPlaced=[]);L.push([u,_,S]),L.length>80&&L.shift(),!b.done.house&&Gm(L,u,_,S)>=30&&Me("house")}function Vc(){let u=!1;for(let _ of qn())b.stats["boss:"+_]||(b.stats["boss:"+_]=1,u=!0);u&&Me("boss",0)}let ta=D.coins;function Pn(){D.coins>ta&&en("coin"),ta=D.coins,yt.coins.textContent=D.coins}let Fr="";function A(){let u=td(B.hp),_=u.join();_!==Fr&&(Fr=_,yt.hearts.innerHTML="",u.forEach(S=>yt.hearts.append(I("i",{class:"ht "+S}))))}function k(u){if(h.dead||u<=0||!t.damage)return;let _=u,S=Yo(h.armor,p);if(u=Cf(u,S),S&&(Tf(h.armor,h.armorDur,p,_).forEach(V=>St(`\u4F60\u7684${p.name(V)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),nn(),h.dirtyMeta=!0),u<=0)return;let C=Kf(B,u);A(),h.dirtyMeta=!0,en("hurt"),yt.flash.classList.remove("on"),yt.flash.offsetWidth,yt.flash.classList.add("on"),C&&it()}function it(){Vr(!0),h.dead=!0,On(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="dead";let u=yt.ov;u.innerHTML="",u.hidden=!1,u.append(I("div",{class:"panel start"},I("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),I("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),I("button",{class:"btn big",onclick:tt},h.bed&&e==="overworld"?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function tt(){let u=Qf(h.bed,Ht,!!h.bed&&e==="overworld");h.p={x:u.x,y:u.y,z:u.z},h.v={x:0,y:0,z:0},h.fallTop=u.y,B.hp=20,h.dead=!1,A(),Ue(),h.dirtyMeta=!0,St(h.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function X(){yt.hotbar.innerHTML="";for(let _=0;_<9;_++){let S=E.slots[_];yt.hotbar.append(I("button",{class:"slot"+(_===h.sel?" on":""),"aria-label":S?p.name(S.id):"\u7A7A\u683C",onpointerdown:C=>{C.stopPropagation(),h.sel=_,X()}},S?I("img",{src:It[S.id],alt:""}):null,S&&S.count>1?I("span",{class:"cnt"},S.count):null,Bt(S),I("span",{class:"key"},_+1)))}let u=E.slots[h.sel];yt.selName.textContent=u?p.name(u.id):""}function Bt(u){let _=G0(u,p);return!_||_.left>=_.max?null:I("span",{class:"dur"+(_.frac<.25?" low":"")},I("i",{style:"width:"+Math.round(_.frac*100)+"%"}))}function qt(u=4){let _=new Set,S=Math.floor(h.p.x),C=Math.floor(h.p.y),L=Math.floor(h.p.z);for(let V=-u;V<=u;V++)for(let st=-u;st<=u;st++)for(let ut=-u;ut<=u;ut++){let lt=ft.get(S+ut,C+V,L+st);lt&&_.add(p.get(lt).id)}return _}let Ot=()=>({near:qt(),owned:new Set(D.owned)}),Jt=-1,Xt=null,fe=null,ge=u=>u==="inv"?E:u==="chest"?et[fe]:null,Zt=(u,_)=>u==="armor"?h.armor[_]?{id:h.armor[_],count:1,dur:h.armorDur[_]}:null:ge(u).slots[_];function Te(u,_,S){if(!Xt){Zt(u,_)&&(Xt={c:u,i:_}),S();return}let C=Xt;if(Xt=null,C.c===u&&C.i===_){S();return}if(u==="armor"||C.c==="armor"){let[L,V,st,ut]=u==="armor"?[C.c,C.i,u,_]:[u,_,C.c,C.i];if(L==="armor"){S();return}let lt=ge(L),vt=lt.slots[V],Gt=vt&&p.get(vt.id),re=h.armor[ut];if(vt&&!(Gt.armor&&Gt.armor.slot===ut)){St("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),S();return}let ie=h.armorDur[ut],Ie=re?Number.isFinite(ie)?{id:re,count:1,dur:ie}:{id:re,count:1}:null;vt?(h.armor[ut]=vt.id,h.armorDur[ut]=Number.isFinite(vt.dur)?vt.dur:null,vt.count>1?(vt.count--,Ie&&Sn(lt,re,1,y)):lt.slots[V]=Ie):re&&(h.armor[ut]=null,h.armorDur[ut]=null,lt.slots[V]=Ie),nn(),h.dirtyMeta=!0,X(),S();return}C.c===u?Ku(ge(u),C.i,_,y):Qu(ge(C.c),C.i,ge(u),_,y),h.dirtyMeta=!0,X(),S()}let He=(u,_,S,C="")=>{let L=Zt(u,_),V=Xt&&Xt.c===u&&Xt.i===_;return I("button",{class:"slot"+(V?" pick":"")+C,title:L?p.name(L.id):"",onclick:()=>Te(u,_,S)},L?I("img",{src:It[L.id],alt:""}):null,L&&L.count>1?I("span",{class:"cnt"},L.count):null,Bt(L))},Ve=["\u982D","\u8EAB","\u817F","\u8173"];function Ne(u){let _=Yo(h.armor,p);return I("div",{class:"armor-row"},Ve.map((S,C)=>I("div",{class:"armor-slot"},He("armor",C,u),I("small",{},S))),I("small",{class:"muted"},`\u8B77\u7532 ${_} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,_*4)}%\uFF09`))}function nn(){if(yt.armor){let u=Yo(h.armor,p);yt.armor.textContent=u?`\u8B77\u7532 ${u}`:""}}function Vt(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=et[fe]||(et[fe]=ko(27)),S=I("div",{class:"inv-grid"});for(let V=0;V<27;V++)S.append(He("chest",V,Vt));let C=I("div",{class:"inv-grid"});for(let V=9;V<36;V++)C.append(He("inv",V,Vt));let L=I("div",{class:"inv-grid hbrow"});for(let V=0;V<9;V++)L.append(He("inv",V,Vt," hb"));return u.append(I("div",{class:"panel inv"},I("div",{class:"p-head"},I("h2",{},"\u7BB1\u5B50"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),S,I("h3",{},"\u80CC\u5305"),C,L)),_}function tn(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=I("div",{class:"inv-grid"}),S=ut=>He("inv",ut,tn,ut<9?" hb":"");for(let ut=9;ut<36;ut++)_.append(S(ut));let C=I("div",{class:"inv-grid hbrow"});for(let ut=0;ut<9;ut++)C.append(S(ut));let L=I("div",{class:"craft"},I("h3",{},"\u5408\u6210"));if(t.creative){let ut=I("div",{class:"craft"},I("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),I("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),lt=I("div",{class:"cat-grid"});F0(p).forEach(vt=>lt.append(I("button",{class:"slot",title:p.name(vt),onclick:()=>{E.slots[h.sel]={id:vt,count:64},h.dirtyMeta=!0,X(),tn(),St(`${p.name(vt)} \u653E\u9032\u7B2C ${h.sel+1} \u683C`)}},I("img",{src:It[vt],alt:""})))),ut.append(lt),u.append(I("div",{class:"panel inv"},I("div",{class:"p-head"},I("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("div",{class:"inv-wrap"},I("div",{},I("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),_,C),ut)));return}let V=Ot(),st={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};M.forEach(ut=>{let lt=_c(E,ut,V),vt=lt.ok;ut.blueprint&&lt.reason==="blueprint"&&!Object.keys(ut.in).some(Gt=>Gt!=="stick"&&Qn(E,Gt)>0)||L.append(I("div",{class:"rcp"+(vt?"":" no")},I("img",{src:It[ut.out.id],alt:""}),I("div",{class:"rcp-t"},I("b",{},`${ut.name_zh} \xD7${ut.out.count}`),I("small",{},Object.keys(ut.in).map(Gt=>`${p.name(Gt)} ${Qn(E,Gt)}/${ut.in[Gt]}`).join("\u3001")+(st[lt.reason]?"\u3000\xB7 "+st[lt.reason]:""))),I("button",{class:"btn small",onclick:()=>{let Gt=ju(E,ut,y,Ot());Gt.ok?(St(`\u505A\u597D\u4E86\uFF1A${ut.name_zh} \xD7${ut.out.count}`),h.dirtyMeta=!0,Me("craft:"+ut.out.id)):St({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[Gt.reason]||"\u6750\u6599\u4E0D\u5920"),tn(),X()}},"\u88FD\u4F5C")))}),u.append(I("div",{class:"panel inv"},I("div",{class:"p-head"},I("h2",{},"\u80CC\u5305"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("div",{class:"inv-wrap"},I("div",{},I("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),Ne(tn),_,C),L)))}let we=$m(p);function En(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=I("div",{class:"shop"}),S=ng(q,qn());we.filter(C=>!C.id.startsWith("portal_")||S&&C.id===S.block).forEach(C=>_.append(I("div",{class:"offer"+(C.locked?" locked":"")},I("img",{src:It[C.id],alt:""}),I("div",{class:"of-t"},I("b",{},`${C.name_zh}${C.qty>1?" \xD7"+C.qty:""}`),I("small",{},C.locked?`\uFF08${C.locked}\uFF09`:`${C.price} \u91D1\u5E63${C.desc?"\u3000"+C.desc:""}`)),Rr(D,C.id)?I("span",{class:"owned"},"\u5DF2\u64C1\u6709"):I("button",{class:"btn small",disabled:C.locked?!0:null,onclick:()=>Xn(C)},C.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),u.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u5546\u5E97\u3000",I("span",{class:"coin"}),` ${D.coins}`),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),_))}function Xn(u){let _=Zm(D,E,u,y);_.ok?(Me("bought"),Me("buy:"+u.id),St(u.blueprint?`\u62FF\u5230 ${u.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${u.name_zh} \xD7${u.qty}`),h.dirtyMeta=!0,Pn(),X(),pn()):St({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[_.reason]||"\u8CB7\u4E0D\u4E86"),En()}let Fn=null;function si(){let u=yt.ov,_=rt[Fn]||(rt[Fn]=Gf());u.innerHTML="",u.hidden=!1;let S=_.jobs[0],C=I("div",{class:"shop"});wt.forEach(V=>{let st=Qn(E,V.in);C.append(I("div",{class:"offer"+(st?"":" locked")},I("img",{src:It[V.in],alt:""}),I("div",{class:"of-t"},I("b",{},`${p.name(V.in)} \u2192 ${p.name(V.out)}`),I("small",{},`\u6709 ${st} \u500B \xB7 \u6BCF\u500B ${V.time} \u79D2`)),I("button",{class:"btn small",onclick:()=>{let ut=Wf(_,E,V,Ct);ut.ok||St(ut.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),h.dirtyMeta=!0,X(),si()}},"\u653E\u9032\u53BB")))});let L=Object.values(_.done).reduce((V,st)=>V+st,0);u.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u7194\u7210"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,_.fuel-_.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${Qn(E,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${Ct} \u500B\uFF09`),I("div",{class:"furnace-st"},S?`\u6B63\u5728\u71D2\uFF1A${p.name(S.in)}\uFF08\u9084\u8981 ${Math.ceil(S.left)} \u79D2\uFF0C\u6392\u968A ${_.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),I("div",{class:"row"},I("button",{class:"btn",disabled:L?null:!0,onclick:()=>{let V=qf(_,E,y);V&&(St(`\u62FF\u51FA ${V} \u500B`),Me("smelted",V)),h.dirtyMeta=!0,X(),si()}},`\u62FF\u51FA\u4F86\uFF08${L}\uFF09`)),C))}let Re=null,Xe=(u,_)=>{try{return JSON.parse(localStorage.getItem(u)||"null")||_}catch{return _}},qn=()=>eg(Xe("hw_portal_rewards",[]),Xe("hi_save",null),q),ze='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function _i(){let u=q.find(L=>L.map===Re),_=yt.ov;if(_.innerHTML="",_.hidden=!1,!u){Ue();return}let S=Object.keys(u.reward.items).map(L=>`${p.name(L)} \xD7${u.reward.items[L]}`).join("\u3001"),C=nd(u.map,q,qn());if(!C.ok){_.append(I("div",{class:"panel start"},I("div",{class:"p-head"},I("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("div",{class:"padlock",html:ze}),I("p",{class:"big"},`\u5148\u6253\u5012 ${C.need.boss_zh} \u624D\u80FD\u9032\u5165`),I("p",{class:"muted"},`\u5F9E\u300C${C.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${C.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:Ue},"\u77E5\u9053\u4E86"))));return}_.append(I("div",{class:"panel start"},I("div",{class:"p-head"},I("h2",{},"\u50B3\u9001\u9580\u30FB"+u.name_zh),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${u.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${u.reward.coins} \u91D1\u5E63\u3001${S}\u3002`),I("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),I("div",{class:"row"},I("button",{class:"btn big",onclick:async()=>{await pn(),h.leaving=j0(u.map),location.href=h.leaving}},"\u9032\u5165"),I("button",{class:"btn ghost",onclick:Ue},"\u5148\u4E0D\u8981"))))}function vi(){if(!t.portals)return 0;let u;try{u=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{u=[]}let _=Q0(u,K);for(let S of _){let C=tg(S,q,E,D,y);if(K.push(S.id),!!C.ok){for(let L in C.leftovers)for(let V=0;V<C.leftovers[L];V++)At(L,h.p.x,h.p.y+1,h.p.z);St(`\u5F9E${C.name_zh}\u5E36\u56DE\u4F86\uFF1A${C.coins} \u91D1\u5E63\u3001${Object.keys(C.items).map(L=>p.name(L)+" \xD7"+C.items[L]).join("\u3001")}`)}}return _.length&&(Pn(),X(),h.dirtyMeta=!0,pn()),Vc(),_.length}let ji=null;function ug(u){ji=u,u.busy=!0,un("trade")}function Hc(){let u=ji,_=yt.ov;if(!u)return Ue();_.innerHTML="",_.hidden=!1;let S=u.role,C=Ir(),L=I("div",{class:"shop"});S.prof.offers.forEach(st=>{let ut=st.blueprint||st.give,lt=!!st.blueprint,vt=lt&&p.blueprints.find(re=>re.id===st.blueprint),Gt=lt&&Rr(D,st.blueprint);L.append(I("div",{class:"offer"},I("img",{src:It[ut],alt:""}),I("div",{class:"of-t"},I("b",{},lt?vt.name_zh:`${p.name(ut)}${st.count>1?" \xD7"+st.count:""}`),I("small",{},`${st.price} \u91D1\u5E63${lt?"\u3000"+(vt.desc||""):""}`)),Gt?I("span",{class:"owned"},"\u5DF2\u64C1\u6709"):I("button",{class:"btn small",onclick:()=>{let re=P0(D,E,st,y);re.ok?(en("trade"),Me("traded"),Me("bought"),St(lt?`\u62FF\u5230 ${vt.name_zh}\uFF01`:`\u8CB7\u5230 ${p.name(ut)} \xD7${st.count}`),h.dirtyMeta=!0,Pn(),X(),pn()):St({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[re.reason]||"\u8CB7\u4E0D\u4E86"),Hc()}},"\u8CFC\u8CB7")))});let V=I("div",{class:"quests"});S.quests.forEach(st=>{let ut=Mf($,st,C),lt=Object.keys(st.reward.items||{}).map(vt=>`${p.name(vt)} \xD7${st.reward.items[vt]}`).join("\u3001");V.append(I("div",{class:"offer quest"+(ut?" locked":"")},I("div",{class:"of-t"},I("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+st.title_zh),I("small",{},`${st.desc}\uFF0C\u7B54\u5C0D ${st.need} \u984C \u2192 ${st.reward.coins} \u91D1\u5E63\u3001${lt}`)),ut?I("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):I("button",{class:"btn small",onclick:()=>{h.overlay="quest",R0(yt.ov,{quest:st,onDone:vt=>{if(h.overlay="trade",vt>=0){let Gt=L0($,st,vt,C,D,E,y);if(Gt.ok){for(let re in Gt.leftovers)for(let ie=0;ie<Gt.leftovers[re];ie++)At(re,h.p.x,h.p.y+1,h.p.z);St(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${Gt.coins} \u91D1\u5E63\u3001${lt}`),Pn(),X(),h.dirtyMeta=!0,pn(),h.stats.quests=(h.stats.quests||0)+1,Me("quests")}else St(`\u7B54\u5C0D ${vt} \u984C\uFF0C\u8981 ${st.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Hc()}})}},"\u63A5\u59D4\u8A17")))}),_.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},`\u6751\u6C11\u30FB${S.prof.name_zh}\u3000`,I("span",{class:"coin"}),` ${D.coins}`),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("h3",{},"\u4EA4\u6613"),L,I("h3",{},"\u82F1\u6587\u59D4\u8A17"),I("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),V))}function ld(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=I("b",{},ft.rd),S=I("input",{type:"range",min:2,max:6,step:1,value:ft.rd,oninput:C=>{_.textContent=C.target.value},onchange:C=>{let L=+C.target.value;ft.setRenderDistance(L),xt.far=L*16+40,xt.updateProjectionMatrix(),ni("hw_rd",L)}});u.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u8A2D\u5B9A"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",_,S),I("label",{class:"set"},"\u756B\u8CEA",I("select",{onchange:C=>{ni("hw_gfx",C.target.value),G()}},[["low","\u7701\u96FB\uFF08iPad \u6BD4\u8F03\u9806\uFF09"],["med","\u4E00\u822C"],["high","\u6E05\u695A"]].map(([C,L])=>I("option",{value:C,selected:wn("hw_gfx","high")===C?!0:null},L)))),I("label",{class:"set"},"\u6309\u9215\u5927\u5C0F",I("select",{onchange:C=>{ni("hw_btn",C.target.value),G()}},[["s","\u5C0F"],["m","\u4E2D"],["l","\u5927"]].map(([C,L])=>I("option",{value:C,selected:wn("hw_btn","m")===C?!0:null},L)))),I("label",{class:"set"},"\u5DE6\u624B\u6A21\u5F0F\uFF08\u6416\u687F\u5728\u53F3\u908A\uFF09",I("input",{type:"checkbox",checked:wn("hw_lefty","off")==="on"?!0:null,onchange:C=>{ni("hw_lefty",C.target.checked?"on":"off"),G()}})),I("label",{class:"set"},"\u4E0A\u4E0B\u8996\u89D2\u53CD\u8F49",I("input",{type:"checkbox",checked:wn("hw_invert","off")==="on"?!0:null,onchange:C=>{ni("hw_invert",C.target.checked?"on":"off"),G()}})),I("label",{class:"set"},"\u97F3\u6A02",I("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:C=>Ic({music:+C.target.value,muted:!1})})),I("label",{class:"set"},"\u97F3\u6548",I("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:C=>{Ic({sfx:+C.target.value,muted:!1}),en("place","wood")}})),t.creative?I("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",I("input",{type:"checkbox",checked:wn("hw_weather","on")!=="off"?!0:null,onchange:C=>ni("hw_weather",C.target.checked?"on":"off")})):null,I("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:dg},"\u532F\u51FA\u4E16\u754C\uFF08\u5099\u4EFD\u6A94\uFF09"),I("label",{class:"btn ghost"},"\u532F\u5165\u4E16\u754C",I("input",{type:"file",accept:".json,application/json",hidden:!0,onchange:C=>{C.target.files[0]&&pg(C.target.files[0])}}))),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:mg},"\u91CD\u7F6E\u4E16\u754C"),t.creative?I("button",{class:"btn",onclick:()=>Gc("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):I("button",{class:"btn",onclick:fg},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:Qo},`\u6BCF\u65E5\u5B78\u7FD2\u76EE\u6A19\uFF1A${ii()} \u984C\uFF08\u5BB6\u9577\uFF09`)),I("div",{id:"pinbox"}),I("div",{class:"row"},I("button",{class:"btn ghost",onclick:()=>{ef(N),h.dirtyMeta=!0,Ue(),eh(!0)}},"\u91CD\u65B0\u770B\u65B0\u624B\u6559\u5B78")),I("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),I("p",{},I("a",{class:"home-link",href:"../../#s/game",onclick:()=>{pn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),I("p",{class:"muted small"},"\u91D1\u5E63\u4F86\u6E90\uFF1A"+(Q.source==="member"?"\u5B78\u7FD2\u7AD9\u5B78\u7FD2\u5E63":"\u9019\u53F0\u88DD\u7F6E\u7684\u9322\u5305")+"\u3000\u7248\u672C "+Uc)))}async function Gc(u){await pn(),ni("hw_mode",u),h.resetting=!0,location.reload()}function fg(){let u=document.getElementById("pinbox"),_=window.KSParentPin;if(u.innerHTML="",!_||!_.isSet()){u.append(I("div",{class:"pin-ask"},I("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),I("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let S=I("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),C=()=>{let L=N0(_,S.value.trim());L.ok?Gc("creative"):(St(L.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),S.value="")};S.addEventListener("keydown",L=>{L.stopPropagation(),L.key==="Enter"&&C()}),u.append(I("div",{class:"pin-ask"},I("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),I("div",{class:"typerow"},S,I("button",{class:"btn",onclick:C},"\u78BA\u5B9A")))),setTimeout(()=>S.focus(),50)}async function cd(){await pn(!0);let u={};for(let _=0;_<localStorage.length;_++){let S=localStorage.key(_);/^hw_/.test(S)&&S!=="hw_mode"&&(u[S]=localStorage.getItem(S))}return{app:"hero-world",v:1,mode:n,at:new Date().toISOString(),db:await df(""),ls:u}}async function dg(){try{let u=new Blob([JSON.stringify(await cd())],{type:"application/json"}),_=I("a",{href:URL.createObjectURL(u),download:"\u65B9\u584A\u4E16\u754C\u5099\u4EFD_"+Ir()+".json"});document.body.append(_),_.click(),setTimeout(()=>{URL.revokeObjectURL(_.href),_.remove()},1500),St("\u5099\u4EFD\u6A94\u4E0B\u8F09\u597D\u4E86\uFF0C\u597D\u597D\u6536\u8457")}catch(u){St("\u532F\u51FA\u5931\u6557\uFF1A"+u.message)}}async function pg(u){try{let _=JSON.parse(await u.text());if(!_||_.app!=="hero-world"||!_.db||typeof _.db!="object")throw new Error("\u9019\u4E0D\u662F\u65B9\u584A\u4E16\u754C\u7684\u5099\u4EFD\u6A94");if(!confirm("\u532F\u5165\u6703\u628A\u73FE\u5728\u9019\u500B\u4E16\u754C\u63DB\u6210\u5099\u4EFD\u88E1\u7684\u4E16\u754C\uFF08\u91D1\u5E63\u4E5F\u6703\u63DB\u6210\u5099\u4EFD\u7684\uFF09\uFF0C\u78BA\u5B9A\u55CE\uFF1F"))return;h.resetting=!0,await pf([]),await wc(_.db);for(let S in _.ls||{})/^hw_/.test(S)&&S!=="hw_mode"&&ni(S,_.ls[S]);location.reload()}catch(_){h.resetting=!1,St("\u532F\u5165\u5931\u6557\uFF1A"+(_&&_.name==="QuotaExceededError"?"\u5132\u5B58\u7A7A\u9593\u4E0D\u5920":_.message))}}async function mg(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){h.resetting=!0,ni("hw_dim","overworld");try{await pf(["hw_coins"])}catch(u){console.warn(u)}location.reload()}}function un(u){document.pointerLockElement&&document.exitPointerLock(),h.overlay=u,On(),Me("open:"+u,1),u==="inv"?(Jt=-1,Xt=null,tn()):u==="shop"?En():u==="set"?ld():u==="furnace"?si():u==="portal"?_i():u==="trade"?Hc():u==="chest"?(Xt=null,Vt()):u==="map"?Qc():u==="ach"?Pg():u==="quests"?kg():u==="book"?(Hr=null,Gr()):u==="quiz"&&C0(yt.ov,{onAnswer:()=>Me("stele_answers"),onReward:_=>{Nn(D,_),Pn(),h.dirtyMeta=!0,pn()},onClose:()=>{h.overlay=null}})}function Ue(){if(h.overlay==="book")try{speechSynthesis.cancel()}catch{}yt.ov.hidden=!0,yt.ov.innerHTML="",h.overlay=null,ji&&(ji.busy=!1,ji=null)}let hd=()=>{yt.btnSnd.textContent=$o()?"\u{1F507}":"\u{1F50A}"};yt.btnSnd.onclick=()=>{Cc(),Df(),hd()},["pointerdown","keydown"].forEach(u=>addEventListener(u,()=>Cc(),{capture:!0,once:!0})),hd(),yt.btnInv.onclick=()=>h.overlay==="inv"?Ue():un("inv"),yt.btnShop.onclick=()=>h.overlay==="shop"?Ue():un("shop"),yt.btnSet.onclick=()=>h.overlay==="set"?Ue():un("set"),yt.btnView.onclick=()=>ud(),yt.bRide.onclick=()=>Vr(),yt.bMap.onclick=()=>h.overlay==="map"?Ue():un("map"),yt.restOk.onclick=()=>{yt.rest.hidden=!0},yt.bQuest.onclick=()=>h.overlay==="quests"?Ue():un("quests"),yt.bAch.onclick=()=>h.overlay==="ach"?Ue():un("ach");function ud(){h.view=h.view==="fp"?"tp":"fp",St(h.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function fd(){h.ride||(h.fly=!h.fly,h.v.y=0,yt.root.classList.toggle("flying",h.fly),St(h.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC"))}let Mi=new j;function ea(){let u=Math.cos(h.pitch);return{x:-Math.sin(h.yaw)*u,y:Math.sin(h.pitch),z:-Math.cos(h.yaw)*u}}let Or=()=>({x:h.p.x,y:h.p.y+1.62+h.eyeOff+(h.ride?lg[h.ride.kind]:0),z:h.p.z}),dd=u=>u&&!p.flat.liquid[u],Wc=u=>p.flat.boxes[u]||(p.flat.shape[u]===4?cg:p.flat.shape[u]===8?hg:null);function Yn(u,_,S){if(u==="screen"){Mi.set(_/innerWidth*2-1,-(S/innerHeight)*2+1,.5).unproject(xt).sub(xt.position).normalize();let st=xt.position,ut=h.view==="tp"?st.distanceTo(new j(h.p.x,h.p.y+1.62,h.p.z)):0,lt={x:st.x,y:st.y,z:st.z},vt={x:Mi.x,y:Mi.y,z:Mi.z};h.lastRay={o:lt,d:vt};let Gt=Er(lt,vt,Fc+1+ut,Wn,dd,Wc);return Gt&&(Gt.at={x:lt.x+vt.x*Gt.dist,y:lt.y+vt.y*Gt.dist,z:lt.z+vt.z*Gt.dist}),Gt}let C=Or(),L=ea();h.lastRay={o:C,d:L};let V=Er(C,L,Fc,Wn,dd,Wc);return V&&(V.at={x:C.x+L.x*V.dist,y:C.y+L.y*V.dist,z:C.z+L.z*V.dist}),V}function On(){h.mining.active=!1,h.mining.k="",h.mining.t=0,ye.visible=!1}function gg(u,_,S){en("door");let C=p.get(ft.get(u,_,S)),L=p.get(C.openAs||C.closeAs);if(!L)return;let V=ut=>{let lt=p.get(ut);return lt&&lt.interact==="door"},st=_;for(;V(ft.get(u,st-1,S));)st--;for(let ut=st;V(ft.get(u,ut,S));ut++)ft.set(u,ut,S,L.n);h.dirtyMeta=!0}let pd=()=>{let u=E.slots[h.sel];return u?p.toolOf(u.id):null};function xg(u){let _=u.n,S=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:Pc(p.get(_),pd());if(!ft.set(u.x,u.y,u.z,0))return;J.sendBlock(u.x,u.y,u.z,0);let C=u.x+","+u.y+","+u.z,L=p.get(_);if(et[C]){if(t.drops){for(let lt of et[C].slots)if(lt)for(let vt=0;vt<lt.count;vt++)At(lt.id,u.x+.5,u.y+.4,u.z+.5)}delete et[C]}if(L&&L.crop){if(delete ot[C],t.drops)for(let lt of Af(L.stage|0))for(let vt=0;vt<lt.n;vt++)At(lt.id,u.x+.5,u.y+.3,u.z+.5);h.stats.harvested=(h.stats.harvested||0)+(L.stage===3?1:0),L.stage===3&&Me("harvested"),h.dirtyMeta=!0;return}let V=S.harvest?p.dropOf(_):null;V&&At(V,u.x+.5,u.y+.4,u.z+.5),t.drops&&L.pattern==="leaves"&&Math.random()<(f.appleChance||.1)?At("apple",u.x+.5,u.y+.4,u.z+.5):!S.harvest&&!S.creative&&St(`${p.name(_)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let st=ft.get(u.x,u.y+1,u.z);if(p.flat.plant[st]){delete ot[u.x+","+(u.y+1)+","+u.z],ft.set(u.x,u.y+1,u.z,0);let lt=t.drops&&p.dropOf(st);lt&&At(lt,u.x+.5,u.y+1.3,u.z+.5)}if(p.get(_).interact==="door")for(let lt of[-1,1]){let vt=ft.get(u.x,u.y+lt,u.z);p.get(vt)&&p.get(vt).interact==="door"&&ft.set(u.x,u.y+lt,u.z,0)}let ut=u.x+","+u.y+","+u.z;if(h.bed&&h.bed.x===u.x&&h.bed.y===u.y&&h.bed.z===u.z&&(h.bed=null,St("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),rt[ut]){let lt=Yf(rt[ut]);for(let vt in lt)for(let Gt=0;Gt<lt[vt];Gt++)At(vt,u.x+.5,u.y+.4,u.z+.5);delete rt[ut]}if(S.usesTool){let lt=Dr(E,h.sel,p);lt.broke&&St(`\u4F60\u7684${p.name(lt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),X()}h.dirtyMeta=!0,h.stats.mined++,en("break",Lr(L)),Me("mined"),Me("mine:"+(L.pattern==="log"?"wood":L.id))}function Hs(u){let _=E.slots[h.sel],S=_&&p.get(_.id);if(S&&S.food)return t.damage?(Rf(B,S.food,20)?(en("eat"),ti(E,h.sel,1),A(),X(),h.dirtyMeta=!0,St(`\u5403\u4E86${S.name_zh}\uFF0C\u597D\u98FD\uFF01`),h.stats.ate=(h.stats.ate||0)+1):St("\u73FE\u5728\u4E0D\u9913"),!0):(St("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(S&&S.id==="shadow_flint"){if(!t.portals)return St("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u958B\u6697\u5F71\u50B3\u9001\u9580"),!0;let zt=p.num("dark_crystal"),te=u&&u.n===zt?$u((Pe,$e,$n)=>ft.get(Pe,$e,$n),u.x,u.y,u.z,zt):null;if(!te)return St("\u5148\u7528 10 \u500B\u6697\u6676\u6392\u4E00\u500B\u6846\uFF08\u88E1\u9762\u7A7A 2 \u683C\u5BEC\u30013 \u683C\u9AD8\uFF09\uFF0C\u518D\u5C0D\u8457\u6846\u9EDE\u706B\u7A2E"),!1;let Ae=p.num("shadow_portal");for(let Pe of te)ft.set(Pe[0],Pe[1],Pe[2],Ae);return Me("portal_lit"),ti(E,h.sel,1),X(),h.dirtyMeta=!0,St(e==="shadow"?"\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u56DE\u5BB6":"\u6697\u5F71\u50B3\u9001\u9580\u4EAE\u4E86\uFF01\u8D70\u9032\u53BB\u5C31\u80FD\u5230\u6697\u5F71\u754C"),!0}if(S&&S.id==="fishing_rod")return h.fish?wg():Sg(),!0;if(S&&S.id==="bow")return xd(),!0;if(S&&S.id==="book")return un("book"),!0;if(S&&S.place==="boat"){if(h.ride)return St("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let zt=h.lastRay,te=zt&&Er(zt.o,zt.d,Fc+1,Wn,Pe=>p.flat.liquid[Pe]||p.flat.solid[Pe]);if(!te||!p.flat.liquid[te.n]||ft.get(te.x,te.y+1,te.z))return St("\u8239\u8981\u653E\u5728\u6C34\u9762\u4E0A"),!1;h.p={x:te.x+.5,y:te.y+1-.15,z:te.z+.5};let Ae=Xc("boat",h.p,h.yaw,{y:te.y+1});return t.consume&&ti(E,h.sel,1),X(),kr("boat",{y:te.y+1,veh:Ae}),!0}if(S&&S.place==="minecart"){if(h.ride)return St("\u5148\u4E0B\u4F86\u518D\u653E"),!0;let zt=u&&p.get(u.n);if(!zt||!zt.rail)return St("\u7926\u8ECA\u8981\u653E\u5728\u9435\u8ECC\u4E0A"),!1;let te=zu(zt.rail,u.x,u.y,u.z,-Math.sin(h.yaw),-Math.cos(h.yaw),$e=>!!zo(Ki,u.x,u.y,u.z,$e,zt.rail)),Ae=mc(te),Pe=Xc("minecart",{x:Ae.x,y:Ae.y+.05,z:Ae.z},Ae.yaw,{st:te});return t.consume&&ti(E,h.sel,1),X(),kr("minecart",{st:te,veh:Pe}),!0}if(!u)return!1;let C=p.get(u.n);if(C&&C.interact==="chest"){if(en("chest"),fe=u.x+","+u.y+","+u.z,C.id==="loot_chest"&&!et[fe]){let zt=w.ruins&&w.ruins.at(u.x,u.z);et[fe]=Em(vc,(l.loot||{})[zt?zt.kind:"forest_ruins"],Am(u.x,u.y,u.z),y),Me("loot"),St("\u627E\u5230\u907A\u8DE1\u7684\u5BF6\u7BB1\u4E86\uFF01"),h.dirtyMeta=!0}return un("chest"),!0}let L=S&&p.toolOf(_.id);if(L&&L.type==="hoe"&&wf(C.id,!ft.get(u.x,u.y+1,u.z)||p.flat.plant[ft.get(u.x,u.y+1,u.z)])){if(ft.set(u.x,u.y+1,u.z,0),ft.set(u.x,u.y,u.z,p.num("farmland")),t.consume){let zt=Dr(E,h.sel,p);zt.broke&&St(`\u4F60\u7684${p.name(zt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return X(),h.dirtyMeta=!0,!0}if(S&&S.place==="crop")return C.id!=="farmland"||u.face[1]!==1||ft.get(u.x,u.y+1,u.z)?(St("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(ft.set(u.x,u.y+1,u.z,p.num("wheat_0")),ot[u.x+","+(u.y+1)+","+u.z]={t:Date.now(),wet:Ef(Wn,zt=>p.flat.liquid[zt]===1,u.x,u.y,u.z)},t.consume&&ti(E,h.sel,1),X(),h.dirtyMeta=!0,h.stats.planted=(h.stats.planted||0)+1,!0);let V=p.get(u.n);if(V&&V.interact==="riddle")return Og(u),!0;if(V&&V.interact==="quiz")return t.coins?(un("quiz"),!0):(St("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let st=E.slots[h.sel]&&p.get(E.slots[h.sel].id).placeable;if(V&&V.interact==="door")return gg(u.x,u.y,u.z),!0;if(V&&V.interact==="portal"&&!st&&!t.portals)return St("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(V&&V.interact==="portal"&&!st)return Re=V.portal,un("portal"),!0;if(V&&V.interact==="bed"&&!st&&e==="shadow")return St("\u6697\u5F71\u754C\u7761\u4E0D\u8457\uFF0C\u5E8A\u53EA\u80FD\u5728\u539F\u672C\u7684\u4E16\u754C\u8A2D\u91CD\u751F\u9EDE"),!0;if(V&&V.interact==="bed"&&!st)return h.bed={x:u.x,y:u.y,z:u.z},h.dirtyMeta=!0,Me("bed"),St("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(V&&V.interact==="craft"&&!st)return un("inv"),!0;if(V&&V.interact==="furnace"&&!st)return Fn=u.x+","+u.y+","+u.z,un("furnace"),!0;let ut=E.slots[h.sel];if(!ut)return St("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let lt=p.get(ut.id);if(!lt||!lt.placeable)return St(`${p.name(ut.id)} \u4E0D\u80FD\u653E`),!1;if(lt.place==="slab"&&lt.fullAs&&u.n===lt.n&&u.face[1]===1&&ft.set(u.x,u.y,u.z,p.num(lt.fullAs)))return t.consume&&ti(E,h.sel,1),X(),h.stats.placed++,h.dirtyMeta=!0,!0;let vt=p.flat.plant[u.n]&&!p.flat.plant[lt.n],Gt=vt?u.x:u.x+u.face[0],re=vt?u.y:u.y+u.face[1],ie=vt?u.z:u.z+u.face[2];if(re<0||re>=64)return!1;let Ie=ft.get(Gt,re,ie);if(Ie&&!p.flat.liquid[Ie]&&!(vt&&p.flat.plant[Ie]))return!1;let Ce=.6/2;if(lt.solid&&Gt+1>h.p.x-Ce&&Gt<h.p.x+Ce&&ie+1>h.p.z-Ce&&ie<h.p.z+Ce&&re+1>h.p.y&&re<h.p.y+1.8)return!1;if(p.flat.plant[lt.n]&&!p.flat.solid[ft.get(Gt,re-1,ie)])return St(`${lt.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let sn=lt.n;if(lt.place==="slab"){let zt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&zt>.5)&&p.get(lt.id+"_top")&&(sn=p.num(lt.id+"_top"))}else if(lt.place==="stairs"){let zt=-Math.sin(h.yaw),te=-Math.cos(h.yaw),Ae=Math.abs(zt)>Math.abs(te)?zt>0?1:3:te>0?2:0,Pe=p.get(lt.id+["","_e","_s","_w"][Ae]);Pe&&(sn=Pe.n)}let ce=null;if(lt.place==="rail"){if(!p.flat.solid[ft.get(Gt,re-1,ie)])return St("\u9435\u8ECC\u8981\u653E\u5728\u5730\u4E0A"),!1;let zt=-Math.sin(h.yaw),te=-Math.cos(h.yaw),Ae=pc(Ki,Gt,re,ie,!!lt.powered,Math.abs(zt)>Math.abs(te)?"e":"n");sn=p.num(Oo(!!lt.powered,Ae.shape)),ce=Ae.updates}if(!ft.set(Gt,re,ie,sn))return!1;if(J.sendBlock(Gt,re,ie,sn),ce)for(let[zt,te,Ae,Pe]of ce){let $e=Ki(zt,te,Ae);$e&&ft.set(zt,te,Ae,p.num(Oo($e.powered,Pe)))}return en("place",Lr(lt)),lt.interact==="door"&&!ft.get(Gt,re+1,ie)&&ft.set(Gt,re+1,ie,lt.n),t.consume&&ti(E,h.sel,1),h.dirtyMeta=!0,X(),h.stats.placed++,kc(Gt,re,ie,lt.id),!0}let zr={},Br=u=>zr[u]||(zr[u]=(()=>{let _=new vn({color:u});return _.userData.base=new le(u),_})());function yg(u){let _=new mn,S=(C,L,V,st,ut,lt,vt)=>{let Gt=new De(new je(C,L,V),Br(st));Gt.position.set(ut,lt,vt),_.add(Gt)};if(u==="boat"){S(.9,.08,1.5,"#8C6640",0,.04,0);for(let C of[-1,1])S(.08,.3,1.5,"#A97E4E",C*.45,.19,0),S(.9,.3,.08,"#A97E4E",0,.19,C*.75);S(.9,.06,.25,"#C49A63",0,.25,.1)}else{S(.9,.08,1.1,"#5E6660",0,.12,0);for(let C of[-1,1])S(.08,.45,1.1,"#8C8A84",C*.45,.35,0),S(.9,.45,.08,"#8C8A84",0,.35,C*.55),S(.06,.18,.18,"#26302A",C*.47,.1,.35),S(.06,.18,.18,"#26302A",C*.47,.1,-.35)}return _}h.vehicles=[];function Xc(u,_,S,C){let L=yg(u);L.rotation.order="YXZ",L.position.set(_.x,_.y,_.z),L.rotation.y=S,Y.add(L);let V=Object.assign({kind:u,p:{x:_.x,y:_.y,z:_.z},yaw:S,obj:L,hits:0},C);return V.m={kind:"vehicle",veh:V,id:-2},h.vehicles.push(V),V}function qc(u){h.ride||h.dead||(h.p={x:u.p.x,y:u.p.y,z:u.p.z},u.kind==="boat"?kr("boat",{y:u.y,veh:u}):(u.st.v=0,kr("minecart",{st:u.st,veh:u})))}function Yc(u){if(!(h.ride&&h.ride.veh===u)){if(u.hits++,u.hits<2){St("\u518D\u6253\u4E00\u4E0B\u5C31\u80FD\u6536\u8D77\u4F86"),u.obj.position.y=u.p.y+.15,setTimeout(()=>{u.obj.position.y=u.p.y},120);return}h.vehicles.splice(h.vehicles.indexOf(u),1),Y.remove(u.obj),At(u.kind,u.p.x,u.p.y+.5,u.p.z),h.dirtyMeta=!0,St(u.kind==="boat"?"\u8239\u6536\u8D77\u4F86\u4E86":"\u7926\u8ECA\u6536\u8D77\u4F86\u4E86")}}let Gs=new mn,md=new vn({color:15723485,transparent:!0,opacity:.38,depthWrite:!1}),$c=[0,1].map(()=>{let u=new De(new je(1,1,1),md);return Gs.add(u),u});Gs.visible=!1,Y.add(Gs);function _g(u){let _=E.slots[h.sel],S=_&&p.get(_.id);if(!u||!S||!S.placeable)return null;let C=p.get(u.n);if(C&&["chest","quiz","door"].includes(C.interact))return null;if(S.place==="slab"&&S.fullAs&&u.n===S.n&&u.face[1]===1)return{x:u.x,y:u.y,z:u.z,n:p.num(S.fullAs)};let L=p.flat.plant[u.n]&&!p.flat.plant[S.n],V=L?u.x:u.x+u.face[0],st=L?u.y:u.y+u.face[1],ut=L?u.z:u.z+u.face[2];if(st<0||st>=64)return null;let lt=ft.get(V,st,ut);if(lt&&!p.flat.liquid[lt]&&!(L&&p.flat.plant[lt]))return null;let vt=S.n;if(S.place==="slab"){let Gt=u.at?u.at.y-Math.floor(u.at.y):0;(u.face[1]===-1||u.face[1]===0&&Gt>.5)&&p.get(S.id+"_top")&&(vt=p.num(S.id+"_top"))}else if(S.place==="stairs"){let Gt=-Math.sin(h.yaw),re=-Math.cos(h.yaw),ie=Math.abs(Gt)>Math.abs(re)?Gt>0?1:3:re>0?2:0,Ie=p.get(S.id+["","_e","_s","_w"][ie]);Ie&&(vt=Ie.n)}else if(S.place==="rail"){if(!p.flat.solid[ft.get(V,st-1,ut)])return null;let Gt=-Math.sin(h.yaw),re=-Math.cos(h.yaw);vt=p.num(Oo(!!S.powered,pc(Ki,V,st,ut,!!S.powered,Math.abs(Gt)>Math.abs(re)?"e":"n").shape))}return{x:V,y:st,z:ut,n:vt}}function vg(u){let _=_g(u);if(!_){Gs.visible=!1;return}let S=p.flat.shape[_.n],C=p.flat.boxes[_.n]||(S===4?cg:S===8?hg:S>=1&&S<=3?pS:dS);$c.forEach((L,V)=>{let st=C[V];L.visible=!!st,st&&(L.scale.set((st[3]-st[0])*.98,(st[4]-st[1])*.98,(st[5]-st[2])*.98),L.position.set(_.x+(st[0]+st[3])/2,_.y+(st[1]+st[4])/2,_.z+(st[2]+st[5])/2))}),Gs.visible=!0}function gd(u){u.saddled=!0;let _=pt.get(u.id);if(!_)return;let S=new De(new je(.62,.1,.6),Br("#5C3A24"));S.position.set(0,1.4,.05),_.add(S)}function kr(u,_){let S=_.veh?_.veh.obj:null;h.ride=Object.assign({kind:u,obj:S,yaw:_.veh?_.veh.yaw:h.yaw},_),h.fly=!1,yt.root.classList.remove("flying"),h.v={x:0,y:0,z:0},yt.bRide.hidden=!1,On(),Me("ride:"+u),Me("ride"),St({boat:"\u4E0A\u8239\u4E86\uFF01\u7528\u8D70\u8DEF\u7684\u65B9\u5F0F\u5212\u8239\uFF0C\u6309\u300C\u4E0B\u4F86\u300D\u4E0A\u5CB8",minecart:"\u5750\u4E0A\u7926\u8ECA\uFF01\u5F80\u524D\u63A8\u5C31\u51FA\u767C\uFF0C\u91D1\u8272\u9435\u8ECC\u6703\u52A0\u901F",horse:"\u9A0E\u4E0A\u99AC\u4E86\uFF01\u8DD1\u5F97\u66F4\u5FEB\u3001\u8DF3\u5F97\u66F4\u9AD8"}[u])}function Vr(u){let _=h.ride;if(_){if(h.ride=null,yt.bRide.hidden=!0,_.veh&&(_.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},_.veh.yaw=_.yaw,_.st&&(_.st.v=0,_.veh.st=_.st)),_.kind==="horse"&&(_.m.riding=!1),_.kind==="minecart")h.p.y+=.2;else for(let[S,C]of[[1,0],[-1,0],[0,1],[0,-1],[1.5,0],[-1.5,0],[0,1.5],[0,-1.5]]){let L={x:h.p.x+S,y:Math.floor(h.p.y+.5),z:h.p.z+C};if(Im(L,ht)&&p.flat.solid[ft.get(L.x,L.y-1,L.z)]){h.p=L;break}}h.v={x:0,y:0,z:0},h.fallTop=h.p.y,u||St("\u4E0B\u4F86\u4E86")}}function Mg(u){let _=E.slots[h.sel];if(!u.tame){_&&(_.id==="wheat"||_.id==="apple")?(t.consume&&ti(E,h.sel,1),X(),u.fed=(u.fed||0)+1,u.fed>=3?(u.tame=!0,h.horseMob=u,h.dirtyMeta=!0,St("\u99AC\u5152\u8DDF\u4F60\u8B8A\u6210\u597D\u670B\u53CB\u4E86\uFF01\u88DD\u4E0A\u99AC\u978D\u5C31\u80FD\u9A0E")):St(`\u99AC\u5152\u5403\u5F97\u597D\u958B\u5FC3\uFF08${u.fed}/3\uFF09`)):St("\u99AC\u5152\u6709\u9EDE\u5BB3\u7F9E\uFF0C\u9935\u7260 3 \u500B\u5C0F\u9EA5\u6216\u860B\u679C\u8A66\u8A66\u770B");return}if(!u.saddled){_&&_.id==="saddle"?(t.consume&&ti(E,h.sel,1),X(),gd(u),h.horseMob=u,h.dirtyMeta=!0,St("\u88DD\u597D\u99AC\u978D\u4E86\uFF01\u518D\u9EDE\u4E00\u4E0B\u99AC\u5152\u5C31\u80FD\u9A0E\u4E0A\u53BB")):St("\u8981\u5148\u5E6B\u99AC\u5152\u88DD\u4E0A\u99AC\u978D\uFF08\u5546\u5E97\u6216\u6751\u838A\u7684\u5546\u4EBA\u6709\u8CE3\uFF09");return}h.ride||(u.riding=!0,h.p={x:u.p.x,y:u.p.y,z:u.p.z},kr("horse",{m:u}),h.stats.rodeHorse=(h.stats.rodeHorse||0)+1)}function bg(u,_,S,C,L,V,st){let ut=h.ride;if(ut.kind==="boat"){let lt=(C*S+V*_)*7,vt=(L*S+st*_)*7,Gt=1-Math.exp(-2.5*u);h.v.x+=(lt-h.v.x)*Gt,h.v.z+=(vt-h.v.z)*Gt,h.v.y=0;let re=(Ce,sn)=>p.flat.liquid[ft.get(Ce,ut.y-1,sn)]===1&&!p.flat.solid[ft.get(Ce,ut.y,sn)],ie=h.p.x+h.v.x*u,Ie=h.p.z+h.v.z*u;re(ie+Math.sign(h.v.x)*.6,h.p.z)?h.p.x=ie:h.v.x=0,re(h.p.x,Ie+Math.sign(h.v.z)*.6)?h.p.z=Ie:h.v.z=0,h.p.y=ut.y-.15,Math.hypot(h.v.x,h.v.z)>.3&&(ut.yaw=Math.atan2(-h.v.x,-h.v.z))}else{Bu(ut.st,u,S,Ki);let lt=mc(ut.st);h.p.x=lt.x,h.p.z=lt.z,h.p.y=lt.y+.05,ut.yaw=lt.yaw,ut.pitch=lt.pitch,h.v.x=h.v.z=h.v.y=0}h.fallTop=h.p.y}let Zc=(()=>{let u=new mn,_=new De(new je(.16,.1,.16),Br("#E0352B")),S=new De(new je(.16,.08,.16),Br("#EFEBDD"));return _.position.y=.05,S.position.y=-.04,u.add(_,S),u.visible=!1,Y.add(u),u})();function Sg(){let u=h.lastRay,_=u&&Er(u.o,u.d,Fc+3,Wn,S=>p.flat.liquid[S]||p.flat.solid[S]);return!_||!p.flat.liquid[_.n]||ft.get(_.x,_.y+1,_.z)?(St("\u8981\u628A\u9B5A\u7DDA\u7529\u5230\u6C34\u9762\u4E0A"),!1):(h.fish=Vu(Math.random),h.fish.at={x:_.x+.5,y:_.y+1,z:_.z+.5},Zc.visible=!0,St("\u7529\u7AFF\uFF01\u7B49\u6D6E\u6A19\u5F80\u4E0B\u6C89\uFF0C\u518D\u9EDE\u4E00\u4E0B\u6536\u7DDA"),!0)}function Jc(){h.fish=null,Zc.visible=!1}function wg(){let u=Gu(h.fish);if(Jc(),u!=="catch"){St("\u592A\u65E9\u6536\u7DDA\u4E86\uFF0C\u9B5A\u9084\u6C92\u4E0A\u9264\uFF0C\u518D\u7529\u4E00\u6B21");return}let _=f.fishing.loot,S=Wu(_,Math.random);if(S.coins&&!t.coins&&(S=_[0]),S.coins)Nn(D,S.coins),Pn(),St(`\u91E3\u5230\u4E00\u500B\u5C0F\u9322\u888B\uFF01 +${S.coins} \u91D1\u5E63`);else{let C=Sn(E,S.id,S.n,y);for(let L=0;L<C;L++)At(S.id,h.p.x,h.p.y+1,h.p.z);St(S.treasure?`\u6488\u5230\u5BF6\u7269\uFF1A${p.name(S.id)} \xD7${S.n}\uFF01`:"\u91E3\u5230\u4E00\u689D\u9B5A\uFF01")}t.consume&&Dr(E,h.sel,p).broke&&St("\u91E3\u7AFF\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u652F\u5427\uFF01"),X(),h.dirtyMeta=!0,en("pickup"),Me("fish"),S.treasure&&Me("treasure")}let Ag=new je(.05,.05,.62);h.arrows=[];function xd(){let u=performance.now()/1e3;if(u-(h.bowT||0)<id)return;if(t.consume&&Qn(E,"arrow")<1){St("\u6C92\u6709\u7BAD\u4E86\uFF1A\u7FBD\u6BDB\uFF0B\u6728\u68CD\uFF0B\u9D5D\u5375\u77F3\u53EF\u4EE5\u505A 4 \u652F\u7BAD");return}h.bowT=u;let _=h.lastRay||{o:Or(),d:ea()},S=sd({x:_.o.x+_.d.x*.6,y:_.o.y+_.d.y*.6,z:_.o.z+_.d.z*.6},_.d);S.obj=new De(Ag,Br("#8C6640")),Y.add(S.obj),h.arrows.push(S),t.consume&&(Os(E,"arrow",1),Dr(E,h.sel,p).broke&&St("\u5F13\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01")),X(),h.dirtyMeta=!0,en("place","wood"),Me("shot")}function Eg(u){if(!h.arrows.length||!u)return;let _=Lt.list.filter(S=>!S.gone&&!S.riding&&(S.kind==="quiz"||S.kind==="animal"&&!S.def.noHit&&!S.tame&&S.type!=="horse")).map(S=>({p:S.p,w:S.def.size[0],h:S.def.size[1],ref:S}));h.boss&&_.push({p:h.boss.p,w:3.6,h:3.6,ref:h.boss.m});for(let S=h.arrows.length-1;S>=0;S--){let C=h.arrows[S],L=rd(C,u,ht,_);C.obj.position.set(C.p.x,C.p.y,C.p.z),Mi.set(C.p.x+C.v.x,C.p.y+C.v.y,C.p.z+C.v.z),C.obj.lookAt(Mi),L&&(Y.remove(C.obj),h.arrows.splice(S,1),L.hit==="mob"?(Me("arrow_hit"),ks(L.target)):L.hit==="block"&&t.consume&&At("arrow",C.p.x,C.p.y,C.p.z))}}let Kc=x.books||[],Tg=u=>{if(!(ad||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let _=new SpeechSynthesisUtterance(u);_.lang="en-US",_.rate=.85,speechSynthesis.speak(_)}catch{}},jc=u=>$["book:"+u.id]===Ir(),Hr=null,Ws=!1;function Gr(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=Kc.find(C=>C.id===Hr),S=C=>I("div",{class:"p-head"},I("h2",{},C),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7"));if(!_){let C=I("div",{class:"shop"});Kc.forEach(L=>C.append(I("div",{class:"offer"+(jc(L)?" locked":"")},I("img",{src:It.book,alt:""}),I("div",{class:"of-t"},I("b",{class:"en"},L.title),I("small",{},L.title_zh+(jc(L)?"\u3000\u2713 \u4ECA\u5929\u7B54\u5C0D\u4E86":t.coins?`\u3000\u8B80\u5B8C\u7B54\u5C0D +${x.coins|0} \u91D1\u5E63`:""))),I("button",{class:"btn small",onclick:()=>{Hr=L.id,Ws=!1,Gr()}},"\u8B80")))),u.append(I("div",{class:"panel"},S("\u82F1\u6587\u5C0F\u66F8"),I("p",{class:"muted"},"\u6311\u4E00\u7BC7\u4F86\u8B80\u3002\u8B80\u5B8C\u56DE\u7B54\u4E00\u500B\u554F\u984C\uFF08\u6BCF\u7BC7\u6BCF\u5929\u7B54\u5C0D\u7B2C\u4E00\u6B21\u6709\u91D1\u5E63\uFF09\u3002"),C));return}u.append(I("div",{class:"panel book"},S(_.title_zh),I("h3",{class:"en"},_.title),I("p",{class:"book-text en"},_.en),Ws?I("p",{class:"book-text zh"},_.zh):null,I("div",{class:"row"},I("button",{class:"btn ghost",onclick:()=>{Ws=!Ws,Gr()}},Ws?"\u96B1\u85CF\u4E2D\u6587":"\u770B\u4E2D\u6587\u7FFB\u8B6F"),I("button",{class:"btn ghost",onclick:()=>Tg(_.en)},"\u{1F50A} \u6717\u8B80")),I("div",{class:"row"},I("button",{class:"btn",onclick:()=>Cg(_)},"\u8B80\u5B8C\u4E86\uFF0C\u56DE\u7B54\u554F\u984C"),I("button",{class:"btn ghost",onclick:()=>{Hr=null,Gr()}},"\u2190 \u63DB\u4E00\u672C"))))}function Cg(u){try{speechSynthesis.cancel()}catch{}let _=u.q.options.slice().sort(()=>Math.random()-.5),S={id:"hwbook:"+u.id,module:"reading",tkey:"\u82F1\u6587\u5C0F\u66F8",type:"reading",local:!0,title:u.title,prompt:u.q.prompt,sub:Ws?u.q.zh:"",options:_,answer:u.q.options[0],en:!0,why:""};h.overlay="ask",qo(yt.ov,{question:S,title:"\u82F1\u6587\u5C0F\u66F8\uFF1A"+u.title,okText:"\u7B54\u5C0D\u4E86\uFF01\u4F60\u770B\u61C2\u9019\u7BC7\u6545\u4E8B\u4E86",onDone:C=>{if(h.overlay="book",C){let L=!jc(u),V=L&&t.coins?x.coins|0:0;$["book:"+u.id]=Ir(),V&&(Nn(D,V),Pn()),Me("books"),h.dirtyMeta=!0,pn(),St(V?`\u8B80\u61C2\u4E86\uFF01 +${V} \u91D1\u5E63`:"\u8B80\u61C2\u4E86\uFF01"),Hr=null}else C===!1&&St("\u518D\u8B80\u4E00\u6B21\u770B\u770B\uFF0C\u7B54\u6848\u5C31\u5728\u6545\u4E8B\u88E1\uFF01");Gr()}})}let Qi=2,na=wn("hw_minimap","on")!=="off";function Rg(u){na=u,ni("hw_minimap",u?"on":"off"),yt.mini.hidden=!u}yt.mini.hidden=!na;function Ig(){let u=yt.mini,_=u.getContext("2d");_.fillStyle="#D9D3C0",_.fillRect(0,0,u.width,u.height),O.draw(_,h.p.x,h.p.z,2,u.width,u.height),qu(_,u.width/2,u.height/2,h.yaw,7,"#E0352B")}function Qc(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=Math.max(240,Math.min(innerWidth-60,760)),S=Math.max(200,Math.min(innerHeight-200,540)),C=I("canvas",{class:"bigmap",width:_,height:S}),L=C.getContext("2d");L.fillStyle="#D9D3C0",L.fillRect(0,0,_,S);let{x0:V,z0:st}=O.draw(L,h.p.x,h.p.z,Qi,_,S),ut=(ie,Ie)=>[(ie-V)*Qi,(Ie-st)*Qi],lt=(ie,Ie,Ce,sn,ce)=>{let[zt,te]=ut(ie,Ie);zt<-20||te<-20||zt>_+20||te>S+20||(L.fillStyle=sn,L.strokeStyle=sn,L.lineWidth=3,ce==="roof"?(L.beginPath(),L.moveTo(zt-8,te+1),L.lineTo(zt,te-7),L.lineTo(zt+8,te+1),L.fill(),L.fillRect(zt-5,te+1,10,7)):ce==="ring"?(L.beginPath(),L.arc(zt,te,6,0,7),L.stroke()):L.fillRect(zt-5,te-5,10,10),L.font="bold 12px sans-serif",L.textAlign="center",L.strokeStyle="#EFEBDD",L.strokeText(Ce,zt,te-11),L.fillStyle="#26302A",L.fillText(Ce,zt,te-11))},vt=Math.max(_,S)/Qi;for(let ie of w.villages.around(h.p.x-vt,h.p.z-vt,h.p.x+vt,h.p.z+vt))O.explored(ie.x,ie.z)&&lt(ie.x,ie.z,"\u6751\u838A","#8C5A3A","roof");for(let ie of O.portals.values())lt(ie.x+.5,ie.z+.5,ie.name.replace("\u50B3\u9001\u9580\u30FB",""),"#5B3F8C","ring");lt(Ht.x,Ht.z,"\u51FA\u751F\u9EDE","#3E6B3A"),h.bed&&lt(h.bed.x+.5,h.bed.z+.5,"\u5E8A","#E0352B");let[Gt,re]=ut(h.p.x,h.p.z);qu(L,Gt,re,h.yaw,9,"#E0352B"),u.append(I("div",{class:"panel map"},I("div",{class:"p-head"},I("h2",{},"\u5730\u5716"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),C,I("div",{class:"row"},I("button",{class:"btn small",onclick:()=>{Qi=Math.min(6,Qi+1),Qc()}},"\u653E\u5927"),I("button",{class:"btn small",onclick:()=>{Qi=Math.max(1,Qi-1),Qc()}},"\u7E2E\u5C0F"),I("label",{class:"set inline"},I("input",{type:"checkbox",checked:na?!0:null,onchange:ie=>Rg(ie.target.checked)}),"\u89D2\u843D\u5C0F\u5730\u5716")),I("p",{class:"muted"},"\u53EA\u756B\u5F97\u51FA\u4F60\u53BB\u904E\u7684\u5730\u65B9\u3002\u7D05\u8272\u7BAD\u982D\u662F\u4F60\uFF1B\u5713\u5708\u662F\u50B3\u9001\u9580\u3002")))}function Pg(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=T.filter(C=>b.done[C.id]).length,S=I("div",{class:"ach-list"});T.forEach(C=>{let L=!!b.done[C.id];S.append(I("div",{class:"ach-item"+(L?" done":"")},I("i",{class:"badge"}),I("div",{},I("b",{},C.name_zh),I("small",{},C.desc_zh+(L?"\u3000\u2713":`\uFF08${Hm(b,C)}/${C.need}\uFF09`)+(C.coins?`\u3000\u734E\u52F5 ${C.coins} \u91D1\u5E63`:"")))))}),u.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},`\u6210\u5C31\u3000${_} / ${T.length}`),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("p",{class:"muted"},t.coins?"\u6709\u4E9B\u6210\u5C31\u6703\u9001\u91D1\u5E63\u3002":"\u5275\u9020\u6A21\u5F0F\u7684\u6210\u5C31\u4E0D\u9001\u91D1\u5E63\u3002"),S))}async function Lg(u){h.travelling||(h.travelling=!0,Vr(!0),Jc(),On(),St(u==="shadow"?"\u7A7F\u904E\u6697\u5F71\u50B3\u9001\u9580\u2026":"\u56DE\u5230\u539F\u672C\u7684\u4E16\u754C\u2026"),await pn(!0),ni("hw_dim",u),h.resetting=!0,location.reload())}function th(){let u=h.boss;u&&(yt.bossName.textContent=`\u932F\u984C\u9B54\u9F8D\u30FB\u7B2C ${u.st.phase+1}\uFF0F3 \u968E\u6BB5\uFF1A${Wo[u.st.phase].name_zh}`,yt.bossHp.style.width=Math.max(0,u.st.hp/Go*100)+"%")}function Dg(u){if(e!=="shadow"||b.stats.dragon)return;let _=yi,S=Math.hypot(h.p.x-_.x,h.p.z-_.z);if(!h.boss&&S<60&&ft.ready(_.x,_.z)){let V=o0();Y.add(V),h.boss={g:V,st:s0(),p:{x:_.x+.5,y:xi+1.5,z:_.z+.5},m:{kind:"boss",id:-1},t:0}}let C=h.boss;if(!C)return;C.t+=u,C.g.position.set(C.p.x,C.p.y+Math.sin(C.t*1.6)*.25,C.p.z),C.g.rotation.y=Math.atan2(-(h.p.x-C.p.x),-(h.p.z-C.p.z)),a0(C.g,C.t,u);let L=S<28;L===yt.bossbar.hidden&&(yt.bossbar.hidden=!L,L&&(th(),C.greeted||(C.greeted=!0,St("\u932F\u984C\u9B54\u9F8D\u51FA\u73FE\u4E86\uFF01\u9EDE\u7260\u5C31\u6703\u51FA\u984C\uFF0C\u7B54\u5C0D\u624D\u6253\u5F97\u5230"))))}function Ng(){let u=h.boss;if(!u||u.busy)return;u.busy=!0,On(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask";let _=Wo[u.st.phase],S=Ss().slice(0,40).sort(()=>Math.random()-.5);qo(yt.ov,{ids:u.st.retry.concat(S),types:_.types,modules:_.modules,title:`\u932F\u984C\u9B54\u9F8D\u30FB${_.name_zh}`,okText:"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86",onDone:(C,L,V)=>{h.overlay=null,u.busy=!1,C!=null&&yd(C,L,V&&V.id)}})}function yd(u,_,S){let C=h.boss;if(!C)return;let L=r0(C.st,u,_,S);if(!u){let V=h.p.x-C.p.x,st=h.p.z-C.p.z,ut=Math.hypot(V,st)||1;h.v.x=V/ut*8,h.v.z=st/ut*8,h.v.y=5,St("\u9B54\u9F8D\u62CD\u62CD\u7FC5\u8180\u628A\u4F60\u5439\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01"),th();return}if(C.g.userData.hitT=.3,en("hit","stone"),L.done){Ug();return}L.phaseUp!=null?(l0(C.g,L.phaseUp),St(`\u9B54\u9F8D\u63DB\u4E86\u984F\u8272\uFF01\u7B2C ${L.phaseUp+1} \u968E\u6BB5\uFF1A${Wo[L.phaseUp].name_zh}`)):St(_?"\u6253\u5B57\u984C\uFF01\u9B54\u9F8D\u88AB\u5927\u5927\u6253\u4E2D\u4E86\uFF01":"\u7B54\u5C0D\u4E86\uFF01\u9B54\u9F8D\u88AB\u6253\u4E2D\u4E86\uFF01"),th()}function Ug(){Y.remove(h.boss.g),h.boss=null,yt.bossbar.hidden=!0,t.coins&&(Nn(D,af),Pn()),Me("dragon"),pn(),Fg()}function Fg(){On(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ending";let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=["\u932F\u984C\u9B54\u9F8D\u300C\u5657\u300D\u7684\u4E00\u8072\uFF0C\u8B8A\u56DE\u4E00\u672C\u5C0F\u5C0F\u7684\u932F\u984C\u672C\u3002","\u88E1\u9762\u7684\u6BCF\u4E00\u984C\uFF0C\u4F60\u90FD\u5B78\u6703\u4E86\u3002","","\u4E3B\u89D2\u3000\u4F60","\u5192\u96AA\u3000\u65B9\u584A\u4E16\u754C\u30FB\u52C7\u8005\u5CF6\u4E94\u500B\u50B3\u9001\u9580\u30FB\u6697\u5F71\u754C","\u7DF4\u7FD2\u3000\u55AE\u5B57\u30FB\u6587\u6CD5\u30FB\u53E5\u578B\u30FB\u7247\u8A9E","\u5925\u4F34\u3000\u6751\u6C11\u30FB\u5C0F\u99AC\u30FB\u7926\u8ECA\u30FB\u4E00\u652F\u91E3\u7AFF","",t.coins?`\u734E\u52F5\u3000${af} \u91D1\u5E63`:"","","\u8B1D\u8B1D\u4F60\u4E00\u8DEF\u7DF4\u7FD2\u82F1\u6587\u3002","\u4E16\u754C\u9084\u5728\uFF0C\u7E7C\u7E8C\u84CB\u4F60\u7684\u57CE\u5821\u5427\uFF01"];u.append(I("div",{class:"ending"},I("div",{class:"paper sun"}),I("div",{class:"paper hill"}),I("div",{class:"paper hill b"}),I("div",{class:"credits"},I("h1",{},"\u65B9\u584A\u4E16\u754C\u50B3\u8AAA"),_.map(S=>I("p",{},S)),I("button",{class:"btn big",onclick:Ue},"\u7E7C\u7E8C\u5192\u96AA"))))}function Og(u){h.riddleBusy||(h.riddleBusy=!0,On(),document.pointerLockElement&&document.exitPointerLock(),h.overlay="ask",qo(yt.ov,{ids:Ss().slice(0,20),types:["en2zh","zh2en","zh2en-type","phrase-fill"],title:"\u82F1\u6587\u5716\u66F8\u9928\u7684\u9580\uFF1A\u7B54\u5C0D\u5C31\u6703\u6253\u958B",okText:"\u7B54\u5C0D\u4E86\uFF01\u9580\u6162\u6162\u6253\u958B\u4E86",onDone:_=>{if(h.overlay=null,h.riddleBusy=!1,!_){_===!1&&St("\u9580\u9084\u9396\u8457\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01");return}for(let S=-2;S<=2;S++){let C=p.get(ft.get(u.x,u.y+S,u.z));C&&C.interact==="riddle"&&ft.set(u.x,u.y+S,u.z,0)}Me("library"),h.dirtyMeta=!0,en("door")}}))}function zg(){if(!b.stats.village&&e==="overworld"){for(let u of w.villages.around(h.p.x-30,h.p.z-30,h.p.x+30,h.p.z+30))if(Math.hypot(u.x-h.p.x,u.z-h.p.z)<22){Me("village");break}}for(let u of sf(N,d,z,Ir())){if(h.dirtyMeta=!0,u.kind==="tut"){en("pickup"),N.tut.done&&St("\u65B0\u624B\u6559\u5B78\u5B8C\u6210\u4E86\uFF01\u63A5\u4E0B\u4F86\u770B\u300C\u624B\u518A\u300D\u7684\u4E3B\u7DDA");continue}let _=t.coins?u.q.coins|0:0;_&&(Nn(D,_),Pn()),St((u.kind==="main"?"\u4E3B\u7DDA\u5B8C\u6210\uFF1A"+u.q.title:"\u4ECA\u65E5\u4EFB\u52D9\u5B8C\u6210\uFF1A"+u.q.text)+(_?`\u3000+${_} \u91D1\u5E63`:""))}eh()}function Bg(u){if(u==="lair")return e==="shadow"?{x:yi.x+.5,z:yi.z+.5}:null;if(e!=="overworld")return null;if(u==="stele"&&Ht.stele)return{x:Ht.stele.x+.5,z:Ht.stele.z+.5};if(u==="portal"&&Ht.portal)return{x:Ht.portal.x+.5,z:Ht.portal.z+.5};if(u==="village"){if(!h.vilHint||Date.now()-h.vilHint.t>3e3){let _=null,S=1/0;for(let C of w.villages.around(h.p.x-400,h.p.z-400,h.p.x+400,h.p.z+400)){let L=Math.hypot(C.x-h.p.x,C.z-h.p.z);L<S&&(S=L,_=C)}h.vilHint={t:Date.now(),v:_}}return h.vilHint.v?{x:h.vilHint.v.x,z:h.vilHint.v.z}:null}return null}let _d="";function eh(u){let _=!N.tut.done&&d.tutorial[N.tut.step],S=nf(N,d),C=_||S,L=_?N.tut.step+(h.touch?"t":"d"):"";if((u||L!==_d)&&(_d=L,yt.tut.hidden=!_,yt.tut.innerHTML="",_&&yt.tut.append(I("b",{},`\u65B0\u624B\u6559\u5B78 ${N.tut.step+1}/${d.tutorial.length}`),I("span",{},_.text),I("small",{},h.touch?_.touch:_.desk),I("button",{class:"link",onclick:()=>{Mc(N,d),h.dirtyMeta=!0,eh(!0)}},"\u8DF3\u904E\u6559\u5B78"))),yt.obj.hidden=!C||!h.started,!C)return;h.objTarget=Bg(C.hint),yt.objArrow.hidden=!h.objTarget;let V=h.objTarget?Math.round(Math.hypot(h.objTarget.x-h.p.x,h.objTarget.z-h.p.z)):0;yt.objText.textContent=(_?"":"\u4E3B\u7DDA\uFF1A")+(_?_.text:S.text)+(h.objTarget&&V>4?`\uFF08\u7D04 ${V} \u683C\uFF09`:"")}function kg(){let u=yt.ov;u.innerHTML="",u.hidden=!1;let _=I("div",{class:"quest-list"});d.main.forEach((C,L)=>_.append(I("div",{class:"quest-item"+(L<N.main?" done":L===N.main?" cur":"")},I("b",{},(L<N.main?"\u2713 ":"")+C.title),I("small",{},C.text+(C.coins&&t.coins?`\u3000\u734E\u52F5 ${C.coins} \u91D1\u5E63`:"")))));let S=I("div",{class:"quest-list"});(N.daily?N.daily.picks:[]).forEach(C=>{let L=d.daily.find(st=>st.id===C),V=N.daily.done.includes(C);S.append(I("div",{class:"quest-item"+(V?" done":" cur")},I("b",{},(V?"\u2713 ":"")+L.text),I("small",{},`${V?L.need:rf(N,d,z,C)} / ${L.need}`+(L.coins&&t.coins?`\u3000\u734E\u52F5 ${L.coins} \u91D1\u5E63`:""))))}),u.append(I("div",{class:"panel"},I("div",{class:"p-head"},I("h2",{},"\u5192\u96AA\u624B\u518A"),I("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Ue},"\xD7")),I("h3",{},"\u4ECA\u65E5\u4EFB\u52D9\uFF08\u6BCF\u5929\u63DB 3 \u500B\uFF09"),S,I("h3",{},`\u4E3B\u7DDA\u3000${Math.min(N.main,d.main.length)} / ${d.main.length}`),_,I("p",{class:"muted"},N.tut.done?"\u65B0\u624B\u6559\u5B78\u53EF\u4EE5\u5728\u300C\u8A2D\u5B9A\u300D\u91CD\u65B0\u770B\u3002":`\u65B0\u624B\u6559\u5B78\u9032\u884C\u4E2D\uFF1A\u7B2C ${N.tut.step+1} \u6B65`))),setTimeout(()=>{let C=u.querySelector(".quest-item.cur");C&&C.scrollIntoView&&C.scrollIntoView({block:"nearest"})},0)}function vd(){ad||!Nt.requestPointerLock||Nt.requestPointerLock()}addEventListener("keydown",u=>{if(u.target&&u.target.tagName==="INPUT")return;let _=u.key.toLowerCase();if(_==="e"){h.overlay==="inv"?Ue():!h.overlay&&un("inv"),u.preventDefault();return}if(h.overlay!=="dead"&&!(h.overlay==="ask"||h.overlay==="quest")){if(_==="escape"&&h.overlay){h.overlay==="quiz"?(yt.ov.hidden=!0,yt.ov.innerHTML="",h.overlay=null):Ue();return}if(!h.overlay){if(_==="shift"&&h.ride){Vr();return}h.keys[_]=!0,u.code==="Space"&&(h.keys[" "]=!0,u.preventDefault()),_>="1"&&_<="9"&&(h.sel=+_-1,X()),_==="f"&&fd(),_==="v"&&ud(),_==="m"&&un("map"),_==="k"&&un("ach"),_==="j"&&un("quests")}}}),addEventListener("keyup",u=>{h.keys[u.key.toLowerCase()]=!1,u.code==="Space"&&(h.keys[" "]=!1)}),addEventListener("blur",()=>{h.keys={},On()}),Nt.addEventListener("mousedown",u=>{if(!(h.touch||h.overlay)){if(document.pointerLockElement!==Nt){vd();return}if(u.button===0){let _=Ji("center");if(_){ks(_);return}h.mining.active=!0,h.mining.src="center"}if(u.button===2){let _=Ji("center");if(_&&_.kind==="vehicle"){qc(_.veh);return}Hs(Yn("center")),h.placeRepeat=.3,h.rightHeld=!0}}}),addEventListener("mouseup",u=>{u.button===0&&On(),u.button===2&&(h.rightHeld=!1)}),Nt.addEventListener("contextmenu",u=>u.preventDefault()),addEventListener("mousemove",u=>{document.pointerLockElement===Nt&&(h.yaw-=u.movementX*.0024,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-u.movementY*.0024*(h.invert?-1:1))))}),addEventListener("wheel",u=>{h.overlay||h.touch||(h.sel=(h.sel+(u.deltaY>0?1:8))%9,X())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{yt.root.classList.toggle("locked",document.pointerLockElement===Nt)});let Wr=new Map;function Vg(u){h.touch!==u&&(h.touch=u,yt.root.classList.toggle("touch",u),document.body.classList.toggle("is-touch",u))}yt.root.classList.toggle("touch",h.touch),document.body.classList.toggle("is-touch",h.touch),Nt.addEventListener("pointerdown",u=>{if(u.pointerType!=="touch"||(Vg(!0),h.overlay))return;if(u.preventDefault(),(document.body.classList.contains("lefty")?u.clientX>innerWidth*.6:u.clientX<innerWidth*.4)&&u.clientY>innerHeight*.35&&!h.joy.active){h.joy={x:0,y:0,active:!0,id:u.pointerId,ox:u.clientX,oy:u.clientY},yt.joy.style.transform=`translate(${u.clientX-60}px, ${u.clientY-60}px)`,yt.joy.hidden=!1,yt.knob.style.transform="translate(0px,0px)",Wr.set(u.pointerId,{kind:"joy"});return}let _={kind:"look",x:u.clientX,y:u.clientY,sx:u.clientX,sy:u.clientY,t0:performance.now(),drag:!1,hold:!1};_.timer=setTimeout(()=>{if(_.drag)return;let S=Ji("screen",_.x,_.y);if(S&&S.kind==="vehicle"){Yc(S.veh),_.vehHit=!0;return}_.hold=!0,h.mining.active=!0,h.mining.src="screen",h.mining.sx=_.x,h.mining.sy=_.y},280),Wr.set(u.pointerId,_),h.touchPress=_},{passive:!1}),addEventListener("pointermove",u=>{let _=Wr.get(u.pointerId);if(!_)return;if(_.kind==="joy"){let L=u.clientX-h.joy.ox,V=u.clientY-h.joy.oy,st=Math.hypot(L,V),ut=55;st>ut&&(L*=ut/st,V*=ut/st),h.joy.x=L/ut,h.joy.y=V/ut,yt.knob.style.transform=`translate(${L}px,${V}px)`;return}let S=u.clientX-_.x,C=u.clientY-_.y;_.x=u.clientX,_.y=u.clientY,!_.drag&&Math.hypot(_.x-_.sx,_.y-_.sy)>12&&(_.drag=!0,clearTimeout(_.timer),_.hold&&(On(),_.hold=!1)),_.drag?(h.yaw-=S*.0055,h.pitch=Math.max(-1.55,Math.min(1.55,h.pitch-C*.0055*(h.invert?-1:1)))):_.hold&&(h.mining.sx=_.x,h.mining.sy=_.y)});let Md=u=>{let _=Wr.get(u.pointerId);if(_){if(Wr.delete(u.pointerId),h.touchPress===_&&(h.touchPress=null),_.kind==="joy"){h.joy={x:0,y:0,active:!1},yt.joy.hidden=!0;return}if(clearTimeout(_.timer),_.hold)On();else if(!_.drag&&performance.now()-_.t0<280&&!h.overlay&&E.slots[h.sel]&&E.slots[h.sel].id==="bow")Hs(Yn("screen",_.x,_.y));else if(!_.drag&&performance.now()-_.t0<280&&!h.overlay){let S=Ji("screen",_.x,_.y);S&&S.kind==="vehicle"?qc(S.veh):S?ks(S):Hs(Yn("screen",_.x,_.y))}}};addEventListener("pointerup",Md),addEventListener("pointercancel",Md);let bd=(u,_,S)=>{u.addEventListener("pointerdown",C=>{C.preventDefault(),C.stopPropagation(),_()}),u.addEventListener("pointerup",S),u.addEventListener("pointercancel",S),u.addEventListener("pointerleave",S)};bd(yt.bJump,()=>{h.jumpHeld=!0},()=>{h.jumpHeld=!1}),bd(yt.bDown,()=>{h.downHeld=!0},()=>{h.downHeld=!1}),yt.bFly.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),fd()}),yt.bPlace.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),Hs(Yn("center"))}),document.addEventListener("touchmove",u=>{u.target.closest(".scroll, .panel")||u.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(u=>document.addEventListener(u,_=>_.preventDefault(),{passive:!1})),yt.start.hidden=!1,yt.go.onclick=()=>{yt.start.hidden=!0,h.started=!0,h.paused=!1,yt.root.classList.add("started"),h.touch||vd()};async function pn(u){if(h.resetting)return;h.ride&&h.ride.veh&&(h.ride.veh.p={x:h.p.x,y:h.p.y,z:h.p.z},h.ride.veh.yaw=h.ride.yaw);let _={hw_meta:{v:1,seed:P,time:h.time,build:Uc},hw_player:{dims:Object.assign({},h.dimPos,{[e]:{x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw}}),x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,pitch:h.pitch,fly:h.fly,sel:h.sel,hp:B.hp,bed:h.bed,armor:h.armor,armorDur:h.armorDur,horse:h.horseMob&&!h.horseMob.gone?{x:h.horseMob.p.x,y:h.horseMob.p.y,z:h.horseMob.p.z,saddled:!!h.horseMob.saddled}:h.horse},hw_inventory:Ho(E),hw_coins:Jm(D),[i("hw_furnaces")]:rt,[i("hw_chests")]:Object.fromEntries(Object.entries(et).map(([S,C])=>[S,Ho(C)])),[i("hw_crops")]:ot,hw_quests:$,hw_portal_claimed:K.slice(-200),hw_ach:b,hw_story:N,[i("hw_vehicles")]:h.vehicles.map(S=>({kind:S.kind,x:S.p.x,y:S.p.y,z:S.p.z,yaw:S.yaw,wy:S.y,st:S.st?{x:S.st.x,y:S.st.y,z:S.st.z,shape:S.st.shape,from:S.st.from,s:S.st.s}:null}))};O.dirty&&(u||Date.now()-(h.mapSavedAt||0)>3e4)&&(_[i("hw_map")]=O.serialize(),h.mapSavedAt=Date.now());for(let S of h.dirty){let C=R.get(S);C&&(_[s+S]=cf(C))}h.dirty.clear(),h.dirtyMeta=!1;try{await wc(_),h.lastSave=Date.now()}catch(S){console.warn("save failed",S),!h.quotaWarned&&S&&(S.name==="QuotaExceededError"||/quota/i.test(S.message||""))&&(h.quotaWarned=!0,St("\u5B58\u6A94\u7A7A\u9593\u4E0D\u5920\u4E86\uFF01\u8ACB\u5230\u300C\u8A2D\u5B9A\u300D\u532F\u51FA\u4E16\u754C\u5099\u4EFD\uFF0C\u6216\u8ACB\u5927\u4EBA\u6E05\u4E00\u4E0B\u700F\u89BD\u5668\u7A7A\u9593"))}}setInterval(()=>{h.started&&pn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&h.started&&pn(!0)}),addEventListener("pagehide",()=>{h.started&&pn(!0)}),h.stats={mined:0,placed:0};function Sd(){let u=innerWidth,_=innerHeight;_t.setSize(u,_,!1),xt.aspect=u/_,xt.updateProjectionMatrix()}addEventListener("resize",Sd),Sd(),Pn(),X(),A(),nn(),t.creative&&(Zi("#coinpill").hidden=!0,Zi("#modebadge").hidden=!1,yt.btnShop.hidden=!0,yt.hearts.hidden=!0),(Array.isArray(g.vehs)?g.vehs:[]).forEach(u=>{u&&(u.kind==="boat"||u.kind==="minecart"&&u.st)&&Xc(u.kind,u,u.yaw||0,u.kind==="boat"?{y:u.wy}:{st:Object.assign({v:0,lastIn:0},u.st)})}),Vs(),setInterval(Vs,6e4),vi(),e==="shadow"&&(Me("shadow"),setTimeout(()=>St("\u9019\u88E1\u662F\u6697\u5F71\u754C\uFF01\u932F\u984C\u9B54\u9F8D\u5728\u524D\u9762\u7684\u5E73\u53F0\u4E0A\uFF1B\u56DE\u5BB6\u8D70\u9032\u5F8C\u9762\u7684\u50B3\u9001\u9580"),600)),addEventListener("pageshow",u=>{u.persisted&&vi()});let wd=performance.now(),ia=0,nh=0,Hg=new le("#EFEBDD"),Gg=new le("#22302F"),Wg=new le("#E6B48C");function Ad(u){requestAnimationFrame(Ad);let _=(u-wd)/1e3;wd=u;let S=Math.min(.05,_);h.frames.push(_*1e3),h.frames.length>4e3&&h.frames.shift(),ft.update(h.p.x,h.p.z);let C=ft.ready(h.p.x,h.p.z);if(h.auto&&$g(S),h.started&&!h.overlay&&C&&qg(S),h.started&&C&&!h.travelling){let ce=p.get(ft.get(h.p.x,h.p.y+.2,h.p.z));ce&&ce.interact==="shadow_portal"?!h.portalLock&&t.portals&&(h.portalT=(h.portalT||0)+S,h.portalT>1&&Lg(e==="shadow"?"overworld":"shadow")):(h.portalLock=!1,h.portalT=0)}h.started&&!h.dead&&jf(B,S)&&(A(),h.dirtyMeta=!0),h.time=(h.time+S/fS)%1;let L=h.time*Math.PI*2,V=Math.sin(L),st=e==="shadow"?.42:Math.min(1,Math.max(0,(V+.12)/.42));gt.copy(Gg).lerp(Hg,st);let ut=Math.max(0,1-Math.abs(V)/.3)*(st>.05?1:.4);if(gt.lerp(Wg,ut*.55),e==="shadow"&&gt.set("#1C2620"),!(t.creative&&wn("hw_weather","on")==="off")?kf(h.weather,S):h.weather.level=0,h.ambT=(h.ambT||0)+S,h.ambT>1){h.ambT=0;let ce=Math.floor(h.p.x),zt=Math.floor(h.p.z),te=!1;for(let Pe=2;Pe<14&&!te;Pe++)p.flat.opaque[ft.get(ce,Math.floor(h.p.y)+Pe,zt)]&&(te=!0);h.underground=te&&h.p.y<w.height(ce,zt)-4,h.biome=w.biomeOf(ce,zt);let Ae=Of({day:st,underground:h.underground});Ae!==h.musicScene&&(h.musicScene=Ae,Nf(zf[Ae]))}let vt=h.underground||e==="shadow"?null:Vf(h.biome,h.weather),Gt=vt?h.weather.level:0;Gt&&gt.lerp(h.rainSky||(h.rainSky=new le("#8E9590")),.45*Gt),dt(S,xt.position,vt),Uf(vt==="rain"?Gt:0),Ms(h.overlay==="quiz"||h.overlay==="ask"||h.overlay==="quest"),se.uniforms.uDay.value=st*(1-.3*Gt),se.uniforms.uFog.value.set(...Xg(gt));let re=Or();h.eyeOff*=Math.pow(5e-4,S);let ie=ea();if(h.view==="tp"){let ce=Er(re,{x:-ie.x,y:-ie.y,z:-ie.z},4,Wn,te=>p.flat.opaque[te]===1),zt=ce?Math.max(.4,ce.dist-.25):4;xt.position.set(re.x-ie.x*zt,re.y-ie.y*zt,re.z-ie.z*zt)}else xt.position.set(re.x,re.y,re.z);xt.rotation.set(h.pitch,h.yaw,0);let Ie=xt.far*.8;if(H.position.set(xt.position.x+Math.cos(L)*Ie,xt.position.y+Math.sin(L)*Ie,xt.position.z+.25*Ie),H.scale.setScalar(Ie*.14),ke.position.set(xt.position.x-Math.cos(L)*Ie,xt.position.y-Math.sin(L)*Ie,xt.position.z-.25*Ie),ke.scale.setScalar(Ie*.1),H.visible=ke.visible=e!=="shadow",Pt.visible=h.view==="tp",Pt.visible){Pt.position.set(h.p.x,h.p.y+(h.ride?lg[h.ride.kind]:0),h.p.z),Pt.rotation.y=h.yaw;let ce=Math.hypot(h.v.x,h.v.z),zt=Math.sin(u/120)*Math.min(1,ce/4)*.7;Ft.rotation.x=zt,Ut.rotation.x=-zt,jt.rotation.x=-zt,ne.rotation.x=zt;let te=.35+.65*st;Pt.children.forEach(Ae=>Ae.material.color.copy(Ae.userData.base).multiplyScalar(te))}for(let ce in ue)ue[ce].color.setScalar(.4+.6*st);md.color.setScalar(.5+.5*st);for(let ce in zr)zr[ce].color.copy(zr[ce].userData.base).multiplyScalar(.35+.65*st);h.ride&&h.ride.obj&&(h.ride.obj.position.set(h.p.x,h.p.y,h.p.z),h.ride.obj.rotation.y=h.ride.yaw,h.ride.obj.rotation.x=h.ride.pitch||0);let Ce=h.started&&!h.overlay?h.mining.active&&h.mining.src==="screen"?Yn("screen",h.mining.sx,h.mining.sy):Yn("center"):null;if(Ce){de.visible=!0;let ce=Wc(Ce.n);if(ce){let zt=1,te=1,Ae=1,Pe=0,$e=0,$n=0;for(let Xs of ce)zt=Math.min(zt,Xs[0]),te=Math.min(te,Xs[1]),Ae=Math.min(Ae,Xs[2]),Pe=Math.max(Pe,Xs[3]),$e=Math.max($e,Xs[4]),$n=Math.max($n,Xs[5]);de.scale.set(Pe-zt,$e-te,$n-Ae),de.position.set(Ce.x+(zt+Pe)/2,Ce.y+(te+$e)/2,Ce.z+(Ae+$n)/2)}else de.scale.set(1,1,1),de.position.set(Ce.x+.5,Ce.y+.5,Ce.z+.5)}else de.visible=!1;let sn=h.touchPress;if(vg(!h.started||h.overlay||h.mining.active?null:h.touch?sn&&!sn.drag&&!sn.hold?Yn("screen",sn.x,sn.y):null:Ce),h.mining.active&&Ce){let ce=Ce.x+","+Ce.y+","+Ce.z;ce!==h.mining.k&&(h.mining.k=ce,h.mining.t=0),h.mining.t+=S;let zt=t.creative?p.get(Ce.n).hardness<0?1/0:t.breakTime:Pc(p.get(Ce.n),pd()).time;if(zt===1/0)ye.visible=!1,h.mining.warned||(St(p.name(Ce.n)+"\u6316\u4E0D\u52D5"),h.mining.warned=!0);else{h.mining.tick=(h.mining.tick||0)+S,h.mining.tick>.25&&(h.mining.tick=0,en("hit",Lr(p.get(Ce.n))));let te=h.mining.t/zt;ye.visible=!0,ye.position.copy(de.position),ye.scale.copy(de.scale),ye.material.map=Je[Math.min(3,Math.floor(te*4))],te>=1&&(xg(Ce),h.mining.k="",h.mining.t=0,ye.visible=!1)}}else ye.visible=!1,h.mining.active||(h.mining.warned=!1);if(h.rightHeld&&!h.overlay&&(h.placeRepeat-=S,h.placeRepeat<=0&&(Hs(Yn("center")),h.placeRepeat=.25)),Yg(S),Eg(h.overlay?0:S),h.fish){let ce=Hu(h.fish,S),zt=E.slots[h.sel];!zt||zt.id!=="fishing_rod"||Math.hypot(h.p.x-h.fish.at.x,h.p.z-h.fish.at.z)>16?Jc():(ce==="bite"?(St("\u9B5A\u4E0A\u9264\u4E86\uFF01\u5FEB\u9EDE\u4E00\u4E0B\uFF01"),en("pickup")):ce==="escape"&&St("\u9B5A\u6E9C\u8D70\u4E86\uFF0C\u518D\u7B49\u7B49\u770B"),Zc.position.set(h.fish.at.x,h.fish.at.y-.05+(h.fish.phase==="bite"?-.18:Math.sin(u/400)*.03),h.fish.at.z))}if(h.netT=(h.netT||0)+S,h.netT>.25&&(h.netT=0,J.sendState({x:h.p.x,y:h.p.y,z:h.p.z,yaw:h.yaw,dim:e,ride:h.ride?h.ride.kind:null})),h.started){h.lookAcc=(h.lookAcc||0)+Math.min(1,Math.abs(h.yaw-(h.lastYaw??h.yaw))+Math.abs(h.pitch-(h.lastPitch??h.pitch))),h.lastYaw=h.yaw,h.lastPitch=h.pitch;let ce=Math.hypot(h.p.x-(h.lastPx??h.p.x),h.p.z-(h.lastPz??h.p.z));ce<2&&(h.walkAcc=(h.walkAcc||0)+ce),h.lastPx=h.p.x,h.lastPz=h.p.z,h.storyT=(h.storyT||0)+S,h.storyT>.5&&(h.storyT=0,zg())}if(h.objTarget&&!yt.objArrow.hidden){let ce=h.objTarget,zt=Math.atan2(-(ce.x-h.p.x),-(ce.z-h.p.z))-h.yaw;yt.objArrow.style.transform="rotate("+-zt+"rad)"}if(h.started&&!document.hidden&&!h.dead&&(h.playT=(h.playT||0)+S,h.playT>1800&&(h.playT=0,yt.rest.hidden=!1,en("pickup"))),h.mapT=(h.mapT||0)+S,h.mapT>.3&&(h.mapT=0,O.scan(ft,h.mapDirty),na&&Ig()),h.cropT=(h.cropT||0)+S,h.cropT>2){h.cropT=0;let ce=Date.now();for(let zt in ot){let[te,Ae,Pe]=zt.split(",").map(Number);if(!ft.ready(te,Pe))continue;let $e=p.get(ft.get(te,Ae,Pe));if(!$e||!$e.crop){delete ot[zt];continue}let $n=Sf(ot[zt].t,ce,ot[zt].wet);$n>($e.stage|0)&&(ft.set(te,Ae,Pe,p.num("wheat_"+$n)),h.dirtyMeta=!0)}}Bc(h.overlay?0:S,st,u),Dg(h.overlay?0:S);for(let ce in rt){let zt=rt[ce];zt.jobs.length&&(Xf(zt,S),h.dirtyMeta=!0,h.overlay==="furnace"&&ce===Fn&&(h.furnUi=(h.furnUi||0)+S)>.5&&(h.furnUi=0,si()))}_t.render(Y,xt),ia+=_,nh++,ia>.5&&(yt.dbg&&(yt.dbg.textContent=`${Math.round(nh/ia)} fps \xB7 \u5340\u584A ${ft.stats.loaded} \xB7 ${Cm[w.biomeOf(Math.floor(h.p.x),Math.floor(h.p.z))]} \xB7 ${h.p.x.toFixed(1)}, ${h.p.y.toFixed(1)}, ${h.p.z.toFixed(1)}`),ia=0,nh=0),!C&&h.started?yt.loading.hidden=!1:yt.loading.hidden=!0}function Xg(u){let _=u.getHexString();return[parseInt(_.slice(0,2),16)/255,parseInt(_.slice(2,4),16)/255,parseInt(_.slice(4,6),16)/255]}function qg(u){let _=h.keys,S=(_.d?1:0)-(_.a?1:0),C=(_.w?1:0)-(_.s?1:0);h.joy.active&&(S=h.joy.x,C=-h.joy.y);let L=Math.min(1,Math.hypot(S,C));if(L>0){let $e=Math.hypot(S,C);S=S/$e*L,C=C/$e*L}let V=-Math.sin(h.yaw),st=-Math.cos(h.yaw),ut=Math.cos(h.yaw),lt=-Math.sin(h.yaw);if(h.ride&&h.ride.kind!=="horse"){bg(u,S,C,V,st,ut,lt);return}let vt=_.control||!h.fly&&_.shift||h.joy.active&&L>.92,Gt=Wn(h.p.x,h.p.y+.1,h.p.z),re=Wn(h.p.x,h.p.y+1,h.p.z),ie=p.flat.liquid[Gt]===1||p.flat.liquid[re]===1,Ie=h.fly?10:h.ride?8.5:ie?2.6:vt?6.2:4.3,Ce=(V*C+ut*S)*Ie,sn=(st*C+lt*S)*Ie,ce=_[" "]||h.jumpHeld,zt=h.fly&&_.shift||h.downHeld;if(h.fly)h.v.x=Ce,h.v.z=sn,h.v.y=((ce?1:0)-(zt?1:0))*8;else{let $e=h.onGround?14:5,$n=1-Math.exp(-$e*u);h.v.x+=(Ce-h.v.x)*$n,h.v.z+=(sn-h.v.z)*$n,ie?(h.v.y-=9*u,h.v.y<-3&&(h.v.y=-3),ce&&(h.v.y=3.4)):p.flat.climb[Gt]||p.flat.climb[re]?(h.v.y=ce||C>.1?3.2:zt?-3:Math.max(h.v.y-28*u,-1.5),h.fallTop=h.p.y):(h.v.y-=28*u,h.v.y<-40&&(h.v.y=-40),ce&&h.onGround&&(h.v.y=h.ride?10.5:8.6,h.onGround=!1))}let te=h.onGround,Ae=fc(h.p,h.v,u,ht,{canStep:!h.fly,grounded:h.onGround});if(h.onGround=Ae.onGround,Ae.stepped&&(h.eyeOff-=Ae.stepped),h.fallTop==null||h.fly||ie||h.onGround&&te?h.fallTop=h.p.y:h.onGround||(h.fallTop=Math.max(h.fallTop,h.p.y)),h.onGround&&!te){let $e=Jf(h.fallTop-h.p.y,{water:ie,flying:h.fly});$e&&(k($e),St("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),h.fallTop=h.p.y}let Pe=Math.hypot(h.v.x,h.v.z);h.onGround&&!h.fly&&Pe>1&&(h.stepT=(h.stepT||0)+u*Pe,h.stepT>1.8&&(h.stepT=0,en("step",Lr(p.get(Wn(h.p.x,h.p.y-.5,h.p.z)))))),h.p.y<-20&&(h.p={x:Ht.x,y:Ht.y+1,z:Ht.z},h.v={x:0,y:0,z:0},h.fallTop=h.p.y)}function Yg(u){let _=h.p.x,S=h.p.y+.9,C=h.p.z;for(let L=h.drops.length-1;L>=0;L--){let V=h.drops[L];V.age+=u;let st=_-V.p.x,ut=S-V.p.y,lt=C-V.p.z,vt=Math.hypot(st,ut,lt);if(vt<1.5&&V.age>.25&&Sn(E,V.id,1,y)===0){Y.remove(V.s),h.drops.splice(L,1),h.dirtyMeta=!0,X(),en("pickup");continue}if(vt<4.5&&V.age>.25?(V.v.x=st/vt*6,V.v.y=ut/vt*6,V.v.z=lt/vt*6,V.p.x+=V.v.x*u,V.p.y+=V.v.y*u,V.p.z+=V.v.z*u):(V.v.y-=18*u,V.v.x*=.9,V.v.z*=.9,fc(V.p,V.v,u,ht,{w:.25,h:.25})),V.age>300){Y.remove(V.s),h.drops.splice(L,1);continue}V.s.position.set(V.p.x,V.p.y+.2+Math.sin(V.age*3)*.06,V.p.z)}}h.auto=Oc.get("auto")==="walk";let Ed=0;function $g(u){h.started||yt.go.click(),Ed+=u,h.keys.w=!0,h.keys[" "]=Ed%1.6<.15,h.yaw+=u*.08}window.HW={build:Uc,TEST:ad,G:h,reg:p,inv:E,wallet:D,world:ft,Inv:vc,Aud:Ff,Amb:Hf,chests:et,crops:ot,Farm:Lf,clickSlot:Te,MODE:n,RULE:t,switchMode:Gc,questState:$,tradesJson:m,spawnVillagers:Un,terr:w,claimPortalRewards:vi,portals:q,claimedIds:K,mobS:Lt,mobDefs:Tt,spawnMob:be,hitMob:ks,mobAt:Ji,surfaceY:$t,health:B,hurt:k,Health:ed,furnaces:rt,Smelt:$f,smeltList:wt,recipes:M,craftCtx:Ot,breakInfo:Pc,start(){yt.go.click()},state(){return{pos:{...h.p},coins:D.coins,inv:Ho(E),loaded:ft.stats.loaded,stats:{...h.stats},overlay:h.overlay,fly:h.fly}},lookAt(u,_,S){let C=Or(),L=u-C.x,V=_-C.y,st=S-C.z;h.yaw=Math.atan2(-L,-st),h.pitch=Math.atan2(V,Math.hypot(L,st))},target(){let u=Yn("center");return u&&{x:u.x,y:u.y,z:u.z,n:u.n,face:u.face}},mine(u){u?(h.mining.active=!0,h.mining.src="center"):On()},use(){return Hs(Yn("center"))},key(u,_){h.keys[u]=_},books:Kc,booksJson:x,shootArrow:xd,Arch:od,open:un,close:Ue,save:pn,spawn:Ht,dismount:Vr,Rail:ku,ach:b,mapv:O,Fish:Xu,bump:Me,bank:Q,net:J,backupData:cd,applyPrefs:G,story:N,Story:of,QJ:d,DIM:e,bossDamage:yd,Shadow:Zu,hitVehicle:Yc,rideVehicle:qc,ghostState:()=>({visible:Gs.visible,sy:$c[0].scale.y,two:$c[1].visible}),perf(){return{frames:h.frames.slice(),meshMs:ft.stats.meshMs.slice(),genMs:ft.stats.genMs.slice(),loaded:ft.stats.loaded}},resetPerf(){h.frames.length=0,ft.stats.meshMs.length=0,ft.stats.genMs.length=0},info:()=>({calls:_t.info.render.calls,tris:_t.info.render.triangles,geos:_t.info.memory.geometries,objs:Y.children.length}),ready:()=>ft.ready(h.p.x,h.p.z)},requestAnimationFrame(Ad)}function yS(){let n=Zi("#ui"),t=e=>n.querySelector(e);return Oc.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Zi("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Zi("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),bRide:t("#b-ride"),bMap:t("#b-map"),bAch:t("#b-ach"),mini:t("#minimap"),bossbar:t("#bossbar"),bossName:t("#bossname"),bossHp:t("#bosshp"),obj:t("#objective"),rest:t("#restcard"),restOk:t("#restok"),learnPill:t("#learnpill"),learnCnt:t("#learncnt"),learnBar:t("#learnbar"),objArrow:t("#objarrow"),objText:t("#objtext"),tut:t("#tutorial"),bQuest:t("#b-quest"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Zi("#start"),go:Zi("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}xS().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
